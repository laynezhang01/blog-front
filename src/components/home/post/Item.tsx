import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import dayjs from 'dayjs';

import BlurImage from '@/components/BlurImage';
import IconText from '@/components/IconText';
import {TMetaData} from '@/libs/post/type';
import {DAYJS_FORMAT} from '@/utils/dayjs';

import CalendarIcon from '/assets/icons/calendar.svg';
// import NearIcon from '/assets/icons/near.svg';

interface IPostItemProps {
    data: TMetaData;
}

const PostItem: React.FC<IPostItemProps> = ({data}) => {
    const {slug, coverImage, title, description} = data;

    return (
        <li className="rounded-xl">
            <Link
                className={clsx(
                    'group relative block h-full w-full cursor-pointer overflow-hidden rounded-xl border transition ease-linear',
                    'border-card-border bg-card shadow-card-shadow hover:-translate-y-2 hover:opacity-90 hover:shadow-md'
                )}
                key={slug}
                href={`/posts/${slug}`}
            >
                <article>
                    <BlurImage
                        className="absolute top-0 h-40 rounded-t-xl transition ease-linear group-hover:scale-110"
                        src={coverImage}
                    />
                    <div className="mt-40 flex flex-col gap-4 p-6">
                        <div className="flex flex-col gap-4">
                            <h2 className="truncate text-center font-medium">{title}</h2>
                            <p className="line-clamp-2 text-xs text-secondary">{description}</p>
                        </div>
                        <div className="flex justify-between text-xs text-muted">
                            <IconText icon={<CalendarIcon />} text={dayjs(data.publishedAt).format(DAYJS_FORMAT)} />
                            {/*<IconText icon={<NearIcon />} text={data.location} />*/}
                        </div>
                    </div>
                </article>
            </Link>
        </li>
    );
};

export default PostItem;
