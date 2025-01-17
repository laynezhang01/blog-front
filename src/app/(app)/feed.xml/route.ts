import RSS from 'rss';
import {ItemOptions} from 'rss';

import {BASIC_CONFIG} from '@/config/basic';
import {getAllPosts} from '@/libs/post';

const {seo, avatar} = BASIC_CONFIG;

export const revalidate = 360; // 1 hour

export async function GET() {
    const feed = new RSS({
        title: seo.title,
        description: seo.description,
        /* eslint-disable camelcase */
        site_url: seo.url.href,
        feed_url: `${seo.url.href}feed.xml`,
        image_url: avatar,
        /* eslint-disable camelcase */
        language: 'zh-CN',
        generator: 'NodeJS',
    });

    const data = await getAllPosts({dir: 'posts'});
    if (!data) {
        return new Response('Not found', {status: 404});
    }

    data.list.forEach(({data}) => {
        feed.item({
            title: data.title,
            guid: data.slug,
            url: `${seo.url.href}posts/${data.slug}`,
            description: data.description,
            date: new Date(data.publishedAt),
            enclosure: {
                url: data.coverImage ?? '',
            },
        } as ItemOptions);
    });

    return new Response(feed.xml(), {
        headers: {
            'content-type': 'application/xml',
        },
    });
}
