import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import { readingTime } from 'reading-time-estimator';

import { FontIcon } from '@/components/pages/home/post/FontIcon';
import { IPostItemProps } from '@/components/pages/home/post/Item';
import { PostItemWrapper } from '@/components/pages/home/post/Wrapper';
import CalendarIcon from '@/public/svgs/icons/calendar.svg';
import ClockIcon from '@/public/svgs/icons/clock.svg';
import { timeFormat } from '@/utils/time';

export const NoCoverItem: React.FC<IPostItemProps> = ({ post }) => {
  const { data, content } = post;
  const { slug, title, description } = data;
  const readTime = readingTime(content, 200, 'cn');

  return (
    <PostItemWrapper
      className={clsx(
        'before:bg-[url("/images/bg-pattern.png")] before:content-[""]',
        'before:absolute before:-left-[50%] before:-top-[100%] before:w-[200%] before:bg-[length:214px_428px]',
        'before:h-[400%] before:rotate-[13deg] before:opacity-70'
      )}
    >
      <div className="relative px-6 py-10">
        <Link className="inline-flex flex-col" href={`/posts/${slug}`}>
          <h2 className="text-lg font-medium" title={title}>
            {title}
          </h2>
          <p className="line-clamp-4 text-sm leading-7">{description}</p>
        </Link>
        <div className="flex justify-between pb-2 text-xs">
          <FontIcon icon={<CalendarIcon />} text={timeFormat(data.publishedAt)} />
          <FontIcon icon={<ClockIcon />} text={`${readTime.text}阅读`} />
        </div>
      </div>
    </PostItemWrapper>
  );
};
