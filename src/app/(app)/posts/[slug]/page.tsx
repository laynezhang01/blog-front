import NotFound from 'next/dist/client/components/not-found-error';
import type {Metadata} from 'next';
import {getPostBySlug} from '@/libs/post';
import {PostContent} from '@/components/Post';
import {CommonWrapper} from '@/components/layout/wrapper';
// import {Comment} from '@/components/Comment';
import {Toc} from '@/components/Post/Toc';
import {redis} from '@/db/redis';
import {BASIC_CONFIG} from '@/config/basic';
import {REDIS_KEYS} from '@/config/redisKeys';

type TParams = Promise<{slug: string}>;

export async function generateMetadata(props: {params: TParams}): Promise<Metadata | undefined> {
    const {slug} = await props.params;
    let post = await getPostBySlug('posts', slug);
    if (!post) {
        return;
    }
    return {
        title: `${post.data.title} - ${BASIC_CONFIG.seo.title}`,
        keywords: post.data.tags.map(item => item.label) ?? ''
    };
}

export default async function PostPage(props: {params: TParams}) {
    const {slug} = await props.params;
    let post = await getPostBySlug('posts', slug);

    const views =
        process.env.NODE_ENV === 'production'
            ? await redis.incr(`${REDIS_KEYS.POST_VIEWS_PREFIX}-${slug}`)
            : await redis.get(`${REDIS_KEYS.POST_VIEWS_PREFIX}-${slug}`);

    // const res = await fetch(`${url}/api/reactions?id=${params.slug}`);

    // console.log(await res.json());

    if (!post) {
        return NotFound();
    }

    return (
        <CommonWrapper>
            <div className="flex flex-row gap-20">
                <div className="w-[300px] max-lg:hidden">
                    <Toc className="sticky top-20 max-md:hidden" headings={post.headings} />
                </div>
                <div className="flex-1">
                    <PostContent data={post} views={views as number | undefined} />
                    {/*<Comment />*/}
                </div>
            </div>
        </CommonWrapper>
    );
}
