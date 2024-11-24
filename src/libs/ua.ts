import {type NextRequest, userAgent} from 'next/server';

export interface IUaInfo {
    browserName: string;
    browserVersion: string;
    os: string;
    osVersion: string;
}

export function getUaInfo(request: Request | NextRequest): IUaInfo | null {
    const ua = userAgent(request);
    if (!ua) {
        return null;
    }
    return {
        browserName: ua.browser.name ?? '',
        browserVersion: ua.browser.version ?? '',
        os: ua.os.name ?? '',
        osVersion: ua.os.version ?? ''
    };
}
