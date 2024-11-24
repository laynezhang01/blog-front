import {Redis} from '@upstash/redis';
import {Ratelimit} from '@upstash/ratelimit';

export const redis = Redis.fromEnv();

// Create a new ratelimiter, that allows 30 requests per 10 seconds
export const ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(30, '10 s'),
    analytics: true
});
