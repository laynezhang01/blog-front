import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import dayjs from 'dayjs';

import IconText from '@/components/IconText';
import Tag from '@/components/Tag';
import LazyImage from '@/components/LazyImage';
import {TMetaData} from '@/libs/post/type';
import {DAYJS_FORMAT} from '@/utils/dayjs';

import CalendarIcon from '/assets/icons/calendar.svg';

// import NearIcon from '/assets/icons/near.svg';

interface IPostItemProps {
    data: TMetaData;
}

const PostItem: React.FC<IPostItemProps> = ({data}) => {
    const {slug, coverImage, title, description, tags} = data;
    const tagData = tags?.slice(0, 3) ?? [];

    return (
        <li
            className={clsx(
                'relative after:absolute after:inset-0 after:opacity-20 after:shadow-[0_0px_20px_0px_rgba(0,0,0,0.7)]',
                'after:-z-10 after:rounded-[6px] dark:after:shadow-[0_0px_20px_0px_rgba(74,74,74,0.7)]'
            )}
        >
            <article
                className={clsx(
                    'relative h-full overflow-hidden rounded-[6px]',
                    !coverImage &&
                        clsx(
                            'after:bg-[url("/images/bg-pattern.png")] after:content-[""]',
                            'after:absolute after:-left-[50%] after:-top-[100%] after:w-[200%] after:bg-[length:214px_428px]',
                            'after:-z-10 after:h-[400%] after:rotate-[13deg] after:opacity-70'
                        )
                )}
            >
                {coverImage && (
                    <div className="h-60 overflow-hidden">
                        <Link key={slug} href={`/posts/${slug}`}>
                            <LazyImage
                                className="h-full w-full transition ease-linear hover:scale-110"
                                src={coverImage}
                                height={500}
                                width={500}
                                alt={title}
                                sizes="(max-width: 800px) 100vw, 780px"
                            />
                        </Link>
                    </div>
                )}
                <div className="flex flex-col gap-4 p-6">
                    <div className="flex flex-col gap-4">
                        <Link key={slug} href={`/posts/${slug}`}>
                            <h2 className="truncate text-center text-xl font-medium">{title}</h2>
                        </Link>
                        <p className="line-clamp-2 text-sm text-secondary">{description}</p>
                    </div>
                    {tagData.length > 0 && (
                        <div className="text-right">
                            {tagData.map(tag => (
                                <Tag key={tag.value} value={tag.value} />
                            ))}
                        </div>
                    )}
                    <div className="flex justify-between text-xs text-muted">
                        <IconText icon={<CalendarIcon />} text={dayjs(data.publishedAt).format(DAYJS_FORMAT)} />
                        {/*<IconText icon={<NearIcon />} text={data.location} />*/}
                    </div>
                </div>
            </article>
        </li>
    );
};

export default PostItem;
