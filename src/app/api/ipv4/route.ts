import {NextResponse, NextRequest} from 'next/server';
import countryCodeToFlagEmoji from 'country-code-to-flag-emoji';

interface Ipv4Res {
    reqid: string;
    code: number;
    data: Record<string, Info>;
}

interface Info {
    area_code: string;
    city: string;
    city_id: number;
    continent: string;
    continent_code: string;
    country_id: number;
    isp: string;
    latitude: number;
    longitude: number;
    nation: string;
    nation_code: string;
    province: string;
    province_id: number;
    subdivision_1_iso_code: string;
    subdivision_1_name: string;
    subdivision_2_iso_code: string;
    subdivision_2_name: string;
    time_zone: string;
}

export interface IpInfoRes extends Info {
    flag: string;
}

export async function GET(req: NextRequest): Promise<NextResponse<IpInfoRes>> {
    const {searchParams} = new URL(req.url);
    const ip = searchParams.get('ip');
    const res = await fetch(`https://webapi-pc.meitu.com/common/ip_location?ip=${ip}`, {method: 'GET'});
    const {data}: Ipv4Res = await res.json();
    const resKey = Object.keys(data)[0];

    return NextResponse.json({
        ...data[resKey],
        flag: countryCodeToFlagEmoji(data[resKey].nation_code)
    });
}
