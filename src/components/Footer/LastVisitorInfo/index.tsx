import React from 'react';
import {redis} from '@/db/redis';
import {REDIS_KEYS} from '@/config/redisKeys';
import {IVisitorInfo} from '@/libs/visitor';

export default async function LastVisitorInfo() {
    let lastVisitor: IVisitorInfo | undefined;
    const [lv, cv] = await redis.mget<IVisitorInfo[]>(REDIS_KEYS.LAST_VISITOR, REDIS_KEYS.CURRENT_VISITOR);
    if (process.env.NODE_ENV === 'production') {
        try {
            await redis.set(REDIS_KEYS.LAST_VISITOR, cv);
        } catch (e) {
            console.log(e);
        }
    }

    lastVisitor = lv;

    if (!lastVisitor) {
        return 'redis可能挂了...';
    }

    return (
        <span className="flex items-center justify-center gap-1 md:justify-start">
            <span>
                最近访客来自&nbsp;
                {[lastVisitor?.city, lastVisitor?.country].filter(Boolean).join(', ')}
            </span>
            <span className="font-medium">{lastVisitor?.flag}</span>
            <span className="font-medium">
                {[lastVisitor.os, lastVisitor.osVersion, lastVisitor.browserName, lastVisitor.browserVersion]
                    .filter(Boolean)
                    .join(', ')}
            </span>
        </span>
    );
}
