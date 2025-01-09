import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import {readingTime} from 'reading-time-estimator';

import {IconText} from '@/components/IconText';
import {Tag} from '@/components/Tag';
import LazyImage from '../../features/LazyImage';

import {TMetaData} from '@/libs/post/type';
import {timeFormat} from '@/utils/time';

import CalendarIcon from '/assets/icons/calendar.svg';
import ScheduleIcon from '/assets/icons/schedule.svg';
// import NearIcon from '/assets/icons/near.svg';

interface IPostItemProps {
    data: TMetaData;
    content: string;
}

export const PostItem: React.FC<IPostItemProps> = ({data, content}) => {
    const {slug, coverImage, title, description, tags} = data;
    const tagData = tags?.slice(0, 3) ?? [];
    const readTime = readingTime(content, 200, 'cn');

    return (
        <article
            className={clsx(
                'relative flex h-full flex-col overflow-hidden rounded-[6px]',
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
            <div className="flex flex-1 flex-col justify-between gap-4 p-6">
                <div className="flex flex-col gap-4">
                    <Link key={slug} href={`/posts/${slug}`}>
                        <h2 className="truncate text-center text-xl font-medium">{title}</h2>
                    </Link>
                    {tagData.length > 0 && (
                        <div className="flex justify-center">
                            {tagData.map(tag => (
                                <Tag key={tag.value} value={tag.value} />
                            ))}
                        </div>
                    )}
                    <p className="line-clamp-2 text-sm text-secondary">{description}</p>
                </div>
                <div className="flex justify-between text-xs text-muted">
                    <IconText icon={<CalendarIcon />} text={timeFormat(data.publishedAt)} />
                    <IconText icon={<ScheduleIcon />} text={`${readTime.text}阅读`} />
                    {/*<IconText icon={<NearIcon />} text={data.location} />*/}
                </div>
            </div>
        </article>
    );
};
