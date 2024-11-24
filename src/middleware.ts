import {NextRequest, NextResponse} from 'next/server';
// import {getIP} from '@/libs/ip';
import countries from '@/libs/countries.json';
import {redis} from '@/db/redis';
import {REDIS_KEYS} from '@/config/redisKeys';
import {getUaInfo} from '@/libs/ua';

const middleware = async (request: NextRequest) => {
    // @ts-expect-error: Vercel有这个key
    const {nextUrl, geo} = request;
    const pathname = nextUrl.pathname;

    // const ip = getIP(request);
    const isApi = pathname.startsWith('/api/');

    if (geo && !isApi && process.env.NODE_ENV === 'production') {
        const country = geo.country || 'CN';
        const city = geo.city || 'BeiJing';

        const countryInfo = countries.find(x => x.cca2 === country);
        if (countryInfo) {
            const flag = countryInfo.flag;
            await redis.set(REDIS_KEYS.CURRENT_VISITOR, {country, city, flag, ...getUaInfo(request)});
        }
    }

    return NextResponse.next();
};

export const config = {
    matcher: ['/((?!_next|.*\\..*).*)']
};

export default middleware;
