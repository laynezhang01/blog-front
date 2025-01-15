import {NextResponse, NextRequest} from 'next/server';
import axios, {AxiosResponse} from 'axios';

export interface IBingRes {
    images: Image[];
    tooltips: Tooltips;
}

export interface Image {
    startdate: string;
    fullstartdate: string;
    enddate: string;
    url: string;
    urlbase: string;
    copyright: string;
    copyrightlink: string;
    title: string;
    quiz: string;
    wp: boolean;
    hsh: string;
    drk: number;
    top: number;
    bot: number;
    hs: any[];
}

export interface Tooltips {
    loading: string;
    previous: string;
    next: string;
    walle: string;
    walls: string;
}

export async function GET(req: NextRequest): Promise<NextResponse> {
    try {
        const {searchParams} = new URL(req.url);
        const format = searchParams.get('format') ?? 'js';
        const idx = searchParams.get('idx') ?? 0;
        const n = searchParams.get('n') ?? 1;
        const mkt = searchParams.get('mkt') ?? 'zh-CN';

        const response: AxiosResponse<IBingRes> = await axios.get(
            `https://cn.bing.com/HPImageArchive.aspx?format=${format}&idx=${idx}&n=${n}&mkt=${mkt}`
        );
        const data = response.data;
        const url = `https://cn.bing.com/${data.images[0].url}`;

        // 获取图片流
        const imageResponse: AxiosResponse<Buffer> = await axios.get(url, {responseType: 'arraybuffer'});

        const headers = {
            'Content-Type': imageResponse.headers['content-type'] || 'image/jpeg',
            'Cache-Control': 'public, max-age=86400'
        };

        // 返回响应
        return new NextResponse(imageResponse.data, headers as any);
    } catch (e) {
        console.error(`Error fetching Bing wallpaper: ${e}`);
        return NextResponse.json({
            error: 'Error fetching Bing wallpaper'
        });
    }
}
