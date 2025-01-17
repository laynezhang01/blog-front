import {Ratelimit} from '@upstash/ratelimit';
import {Redis} from '@upstash/redis';

export const redis = Redis.fromEnv();

// Create a new ratelimiter, that allows 30 requests per 10 seconds
export const ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(30, '10 s'),
    analytics: true,
});
