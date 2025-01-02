import NotFound from 'next/dist/client/components/not-found-error';
import type {Metadata} from 'next';
import {getPostBySlug} from '@/libs/post';
import PostContent from '@/components/Post/Content';
// import Comment from '@/components/Comment';
import Toc from '@/components/Post/Toc';
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
        <div className="container mx-auto max-w-screen-xl">
            <div className="flex flex-row gap-10 max-md:gap-0">
                <PostContent className="flex-1" data={post} views={views as number | undefined} />
                {post.headings.length > 0 && (
                    <div>
                        <Toc className="sticky top-20 w-[260px] max-md:hidden" headings={post.headings} />
                    </div>
                )}
            </div>
            {/*<Comment />*/}
        </div>
    );
}
