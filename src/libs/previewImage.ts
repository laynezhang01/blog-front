/**
 * 将图片转为模糊base64传递给redis
 */

import {Buffer} from 'buffer';
import {getPlaiceholder} from 'plaiceholder';
import normalizeUrl from 'normalize-url';
import {redis} from '@/db/redis';

export interface IPreviewImage {
    originalWidth: number;
    originalHeight: number;
    dataURIBase64: string;
}

export const getPreviewImage = async (url: string): Promise<IPreviewImage | null> => {
    try {
        const cacheKey = normalizeUrl(url);

        // redis读取缓存 如果有直接返回结果
        try {
            const cache = (await redis.get(cacheKey)) as IPreviewImage;
            if (cache) {
                return cache;
            }
        } catch (e) {
            await Promise.reject(e);
        }
        const f = await fetch(url);
        const buffer = Buffer.from(await f.arrayBuffer());
        const result = await getPlaiceholder(buffer);
        const previewImage: IPreviewImage = {
            originalWidth: result.metadata.width,
            originalHeight: result.metadata.height,
            dataURIBase64: result.base64
        };

        // 设置redis缓存
        try {
            await redis.set(cacheKey, previewImage);
        } catch (e) {
            if (e instanceof Error) {
                await Promise.reject(e);
            }
        }

        return previewImage;
    } catch {
        return {
            originalWidth: 0,
            originalHeight: 0,
            dataURIBase64: ''
        };
    }
};
