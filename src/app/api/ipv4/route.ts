import {NextResponse, NextRequest} from 'next/server';
import countryCodeToFlagEmoji from 'country-code-to-flag-emoji';

export interface IGetIpRes {
    query:       string;
    status:      string;
    country:     string;
    countryCode: string;
    regionName:  string;
    city:        string;
    isp:         string;
    org:         string;
}


export interface IpInfoRes extends IGetIpRes {
    flag: string;
}

export async function GET(req: NextRequest): Promise<NextResponse<IpInfoRes | null>> {
    const {searchParams} = new URL(req.url);
    const ip = searchParams.get('ip');
    let res: IpInfoRes | null = null;
    try {
        const c = await fetch(
            `http://ip-api.com/json/${ip}?fields=status,message,country,countryCode,regionName,city,isp,org,query&lang=zh-CN`,
            {method: 'GET'}
        );
        res = await c.json();
    }
    catch {}

    if (!res) {
        return NextResponse.json(null);
    }

    return NextResponse.json({
        ...res,
        flag: countryCodeToFlagEmoji(res.countryCode) ?? ''
    });
}
