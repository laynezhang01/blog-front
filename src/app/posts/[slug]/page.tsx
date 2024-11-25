import NotFound from 'next/dist/client/components/not-found-error';
import type {Metadata} from 'next';
import {getBlogPostBySlug} from '@/libs/posts';
import PostContent from '@/components/Post/Content';
import Comment from '@/components/Comment';
import {redis} from '@/db/redis';
import {BASIC_CONFIG} from '@/config/basic';
import {REDIS_KEYS} from '@/config/redisKeys';

type TParams = Promise<{slug: string}>;

export async function generateMetadata(props: {params: TParams}): Promise<Metadata | undefined> {
    const {slug} = await props.params;
    let article = getBlogPostBySlug(slug);
    if (!article) {
        return;
    }
    return {
        title: `${article.data.title} - ${BASIC_CONFIG.seo.title}`,
        keywords: article.data.tags ?? ''
    };
}

export default async function PostPage(props: {params: TParams}) {
    const {slug} = await props.params;
    let article = await getBlogPostBySlug(slug);

    const views =
        process.env.NODE_ENV === 'production'
            ? await redis.incr(`${REDIS_KEYS.POST_VIEWS_PREFIX}-${slug}`)
            : await redis.get(`${REDIS_KEYS.POST_VIEWS_PREFIX}-${slug}`);

    // const res = await fetch(`${url}/api/reactions?id=${params.slug}`);

    // console.log(await res.json());

    if (!article) {
        return NotFound();
    }

    return (
        <div className="flex flex-col gap-20">
            <PostContent data={article} views={views as number | undefined} />
            <Comment />
        </div>
    );
}
