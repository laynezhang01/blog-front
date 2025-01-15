import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import {readingTime} from 'reading-time-estimator';
import LazyImage from '@/components/features/LazyImage';
import {PostItemWrapper, FontIcon, IPostItemProps} from '@/components/pages/home/post';
import {timeFormat} from '@/utils/time';

import cls from '@/components/pages/home/post/item.module.css';

import CalendarIcon from '../../../../../public/svgs/icons/calendar.svg';
import ClockIcon from '../../../../../public/svgs/icons/clock.svg';

export const CoverItem: React.FC<IPostItemProps> = ({post}) => {
    const {data, content} = post;
    const {tags} = data;
    const tagData = tags?.slice(0, 3) ?? [];
    const readTime = readingTime(content, 200, 'cn');
    const {coverImage = 'https://img.linzip.com/banner.webp', slug, title, description} = data;

    return (
        <PostItemWrapper>
            <div className="group flex h-full flex-col">
                <div className={clsx('group relative inline-flex w-full flex-[0_0_250px] overflow-hidden')}>
                    <LazyImage
                        className="transition-all duration-300 group-hover:scale-125 group-hover:blur-sm"
                        style={{minHeight: '100%', minWidth: '100%'}}
                        src={coverImage}
                        alt={title}
                    />
                    <Link
                        href={`/posts/${slug}`}
                        className={clsx(
                            'absolute h-full translate-y-10 p-10 opacity-0 transition-all duration-300 ease-linear',
                            'group-hover:block group-hover:translate-y-0 group-hover:opacity-100'
                        )}
                    >
                        <p className="line-clamp-4 text-sm leading-7">{description}</p>
                    </Link>
                    <div className={clsx(cls.slant, cls.reverse)} />
                    <div className={cls.slant} />
                </div>
                <div className="relative flex h-full flex-col justify-between px-6 py-4">
                    <Link className="inline-flex" href={`/posts/${slug}`}>
                        <h2 className="text-lg font-medium" title={title}>
                            {title}
                        </h2>
                    </Link>
                    <div>
                        {tagData.map(tag => (
                            <span key={tag.value} className="text-xs">
                                #{tag.label}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between pb-2 text-xs">
                        <FontIcon icon={<CalendarIcon />} text={timeFormat(data.publishedAt)} />
                        <FontIcon icon={<ClockIcon />} text={`${readTime.text}阅读`} />
                    </div>
                </div>
            </div>
        </PostItemWrapper>
    );
};
