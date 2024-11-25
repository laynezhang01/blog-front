import {type NextRequest, userAgent} from 'next/server';
import {geolocation, ipAddress} from '@vercel/functions';
import {BASIC_CONFIG} from '@/config/basic';
import {IpInfoRes} from '@/app/api/ipv4/route';

export interface IVisitorInfo {
    browserName?: string;
    browserVersion?: string;
    os?: string;
    osVersion?: string;
    country?: string;
    city?: string;
    flag?: string;
}

const fetchIpInfo = async (ip: string = ''): Promise<IpInfoRes> => {
    const res = await fetch(`${BASIC_CONFIG.seo.url}/api/ipv4?ip=${ip}`, {method: 'GET'});
    return res.json();
};

export async function getVisitorInfo(request: Request | NextRequest): Promise<IVisitorInfo> {
    const ua = userAgent(request);
    const location = geolocation(request);
    const ip = ipAddress(request);
    const ipInfo = await fetchIpInfo(ip).catch(() => {});
    if (ip && ipInfo) {
        return {
            browserName: ua.browser.name,
            browserVersion: ua.browser.version,
            os: ua.os.name,
            osVersion: ua.os.version,
            flag: ipInfo.flag,
            city: ipInfo.city,
            country: ipInfo.country
        };
    }

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
