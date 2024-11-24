import {type NextRequest, userAgent} from 'next/server';
import {geolocation} from '@vercel/functions';

export interface IVisitorInfo {
    browserName?: string;
    browserVersion?: string;
    os?: string;
    osVersion?: string;
    country?: string;
    city?: string;
    flag?: string;
}

export function getVisitorInfo(request: Request | NextRequest): IVisitorInfo | null {
    const ua = userAgent(request);
    const location = geolocation(request);

    return {
        browserName: ua.browser.name,
        browserVersion: ua.browser.version,
        os: ua.os.name,
        osVersion: ua.os.version,
        flag: location.flag,
        city: location.city,
        country: location.country
    };
}
