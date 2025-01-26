import React from 'react';

// import {timeFormat} from '@/utils/time';
import { MDXBody } from '@/components/features';
import { TPost } from '@/libs/post/type';

// import VisibilityIcon from '/assets/icons/visibility.svg';
// import CalendarIcon from '/assets/icons/calendar.svg';
// import TextIcon from '/assets/icons/text.svg';
// import ScheduleIcon from '/assets/icons/schedule.svg';
// // import NearIcon from '/assets/icons/near.svg';
// // import ThumbIcon from '/assets/icons/thumb.svg';
// import {readingTime} from 'reading-time-estimator';
// import IconText from '@/components/IconText';

export interface IPostContentProps {
  data: TPost;
  views?: number;
  className?: string;
}

export const PostContent: React.FC<IPostContentProps> = (props) => {
  // const {data, views, ...rest} = props;
  const { data } = props;
  // const readTime = readingTime(data?.content ?? '', 200, 'cn');

  return (
    <article>
      <MDXBody source={data?.content ?? ''} />
      {/*<div className="mb-6 flex flex-col gap-6 pb-6 shadow-sm">*/}
      {/*    <h1 className="mt-6 text-xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">*/}
      {/*        {data?.data.title}*/}
      {/*    </h1>*/}
      {/*    <div className="flex gap-6 text-sm text-zinc-800/80 dark:text-zinc-200/70">*/}
      {/*        <IconText*/}
      {/*            icon={<CalendarIcon />}*/}
      {/*            text={`发布于：${data?.data.publishedAt && timeFormat(data.data.publishedAt)}`}*/}
      {/*        />*/}
      {/*        {views && <IconText icon={<VisibilityIcon />} text={`发布于：${views}次阅读`} />}*/}
      {/*        /!*<span>*!/*/}
      {/*        /!*    <ThumbIcon />*!/*/}
      {/*        /!*    没写呢*!/*/}
      {/*        /!*</span>*!/*/}
      {/*        <IconText icon={<TextIcon />} text={`${readTime.words}字`} />*/}
      {/*        <IconText icon={<ScheduleIcon />} text={readTime.text} />*/}
      {/*        /!*<IconText icon={<NearIcon />} text={data?.data.location} />*!/*/}
      {/*    </div>*/}
      {/*</div>*/}
      {/*<div className="text-zinc-900/90 dark:text-zinc-100/70">*/}
      {/*    <MDXBody source={data?.content ?? ''} />*/}
      {/*</div>*/}
    </article>
  );
};
