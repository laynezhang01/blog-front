import React from 'react';

import { REDIS_KEYS } from '@/config/redisKeys';
import { redis } from '@/db/redis';
import { IVisitorInfo } from '@/libs/visitor';

export default async function LastVisitorInfo() {
  let lastVisitor;

  if (process.env.NODE_ENV === 'production') {
    try {
      const [lv, cv] = await redis.mget<IVisitorInfo[]>(
        REDIS_KEYS.LAST_VISITOR,
        REDIS_KEYS.CURRENT_VISITOR
      );
      lastVisitor = lv;
      await redis.set(REDIS_KEYS.LAST_VISITOR, cv);
    } catch (e) {
      console.error(e);
    }
  }

  if (!lastVisitor) {
    return 'redis可能挂了...';
  }

  return (
    <span className="flex items-center justify-center gap-1 md:justify-start">
      <span>
        最近访客来自&nbsp;
        {lastVisitor?.city}
      </span>
      <span className="font-medium">{lastVisitor?.flag}</span>
      <span className="font-medium">
        {[lastVisitor.os, lastVisitor.browserName].filter(Boolean).join(', ')}
      </span>
    </span>
  );
}
