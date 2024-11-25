import React, {type ComponentProps} from 'react';
import {timeFormat} from '@/utils/time';
import MDXBody from '@/components/Mdx';
import {ISlugPostData} from '@/libs/posts';

import VisibilityIcon from '/assets/icons/visibility.svg';
import CalendarIcon from '/assets/icons/calendar.svg';
import TextIcon from '/assets/icons/text.svg';
import ScheduleIcon from '/assets/icons/schedule.svg';
import NearIcon from '/assets/icons/near.svg';
// import ThumbIcon from '/assets/icons/thumb.svg';
import {readingTime} from 'reading-time-estimator';

export interface IPostContentProps {
    data: ISlugPostData;
    views?: number;
}

interface IHeadItemProps {
    icon?: React.ReactNode;
    text: string;
}

const HeadItem: React.FC<IHeadItemProps> = ({icon, text}) => {
    return (
        <div className="flex items-center justify-center gap-2">
            {icon && icon}
            {text}
        </div>
    );
};

export default function PostContent(props: IPostContentProps & ComponentProps<'article'>) {
    const {data, views, ...rest} = props;
    const readTime = readingTime(data?.content ?? '', 200, 'cn');

    return (
        <article id="post" {...rest}>
            <div className="mb-6 flex flex-col gap-6 pb-6 shadow-sm">
                <h1 className="mt-6 text-3xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                    {data?.data.title}
                </h1>
                <div className="flex gap-6 text-sm text-zinc-800/80 dark:text-zinc-200/70">
                    <HeadItem
                        icon={<CalendarIcon />}
                        text={`发布于：${data?.data.createdAt && timeFormat(data.data.createdAt)}`}
                    />
                    {views && <HeadItem icon={<VisibilityIcon />} text={`发布于：${views}次阅读`} />}
                    {/*<span>*/}
                    {/*    <ThumbIcon />*/}
                    {/*    没写呢*/}
                    {/*</span>*/}
                    <HeadItem icon={<TextIcon />} text={`${readTime.words}字`} />
                    <HeadItem icon={<ScheduleIcon />} text={readTime.text} />
                    <HeadItem icon={<NearIcon />} text={`${data.data.province} . ${data.data.city}`} />
                </div>
            </div>
            <div className="text-zinc-900/90 dark:text-zinc-100/70">
                <MDXBody source={data?.content ?? ''} />
            </div>
        </article>
    );
}
