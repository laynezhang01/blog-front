import React from 'react';

import { REDIS_KEYS } from '@/config/redisKeys';
import { redis } from '@/db/redis';
import { prettifyNumber } from '@/libs/math';

export default async function TotalPageViews() {
  let views: number = 0;
  try {
    // 如果是线上会自动加1
    if (process.env.NODE_ENV === 'production') {
      views = await redis.incr(REDIS_KEYS.TOTAL_VIEWS);
    } else {
      // 否则读取数据 不增加访问数量
      views = (await redis.get(REDIS_KEYS.TOTAL_VIEWS)) ?? 0;
    }
  } catch {}

  return (
    <span title={`${Intl.NumberFormat('en-US').format(views)}次浏览`}>
      <span>总浏览量&nbsp;</span>
      <span>{prettifyNumber(await views)}</span>
    </span>
  );
}
