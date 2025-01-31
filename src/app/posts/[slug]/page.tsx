import type { Metadata } from 'next';
import NotFound from 'next/dist/client/components/not-found-error';

import { CommonWrapper } from '@/components/layout/wrapper';
import { PostContent } from '@/components/Post';
// import {Comment} from '@/components/Comment';
import { Toc } from '@/components/Post/Toc';
import config from '@/config/basic.json';
import { REDIS_KEYS } from '@/config/redisKeys';
import { redis } from '@/db/redis';
import { getPostBySlug } from '@/libs/post';

type TParams = Promise<{ slug: string }>;

export async function generateMetadata(props: { params: TParams }): Promise<Metadata | undefined> {
  const { slug } = await props.params;
  const post = await getPostBySlug('posts', slug);
  if (!post) {
    return;
  }
  return {
    title: `${post.data.title} - ${config.seo.title}`,
    keywords: post.data.tags.map((item) => item.label) ?? '',
  };
}

export default async function PostPage(props: { params: TParams }) {
  const { slug } = await props.params;
  const post = await getPostBySlug('posts', slug);

  let views: number | null = 0;

  try {
    if (process.env.NODE_ENV === 'production') {
      views = await redis.incr(`${REDIS_KEYS.POST_VIEWS_PREFIX}-${slug}`);
    }
  } catch (e) {
    console.log(e);
  }

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
        <div className="flex-1 overflow-hidden">
          <PostContent data={post} views={views as number | undefined} />
          {/*<Comment />*/}
        </div>
      </div>
    </CommonWrapper>
  );
}
