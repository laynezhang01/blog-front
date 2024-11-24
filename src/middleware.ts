import {NextRequest, NextResponse} from 'next/server';
import {redis} from '@/db/redis';
import {REDIS_KEYS} from '@/config/redisKeys';
import {getVisitorInfo} from '@/libs/Visitor';

const middleware = async (request: NextRequest) => {
    const {nextUrl} = request;
    const pathname = nextUrl.pathname;

    const isApi = pathname.startsWith('/api/');

    if (!isApi && process.env.NODE_ENV === 'production') {
        await redis.set(REDIS_KEYS.CURRENT_VISITOR, getVisitorInfo(request));
    }

    return NextResponse.next();
};

export const config = {
    matcher: ['/((?!_next|.*\\..*).*)']
};

export default middleware;
