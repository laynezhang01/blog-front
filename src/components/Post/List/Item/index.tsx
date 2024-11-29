import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import BlurImage from '@/components/BlurImage';
import IconText from '@/components/IconText';
import dayjs, {DAYJS_FORMAT} from '@/utils/dayjs';
import type {IParseMDFileMetaData} from '@/libs/post';
import CalendarIcon from '/assets/icons/calendar.svg';
import NearIcon from '/assets/icons/near.svg';

interface IPostItemProps {
    slug: string;
    data: IParseMDFileMetaData;
}

const PostItem: React.FC<IPostItemProps> = props => {
    const {slug, data} = props;
    const {title, cover, summary} = data;

    return (
        <li>
            <Link
                className={clsx(
                    'relative block h-full w-full cursor-pointer overflow-hidden rounded-xl border',
                    'transition ease-linear hover:-translate-y-2 hover:opacity-90 hover:shadow-md'
                )}
                key={slug}
                href={`/blog/${slug}`}
            >
                <BlurImage className="absolute inset-x-0 top-0 h-44 object-cover object-center" src={cover} />
                <div className="mt-44 flex flex-col gap-4 p-6">
                    <div className="flex flex-col gap-4">
                        <h2 className="truncate text-center font-medium">{title}</h2>
                        <p className="line-clamp-2 text-xs">{summary}</p>
                    </div>
                    <div className="flex justify-between text-xs">
                        <IconText icon={<CalendarIcon />} text={dayjs(data.createdAt).format(DAYJS_FORMAT)} />
                        <IconText icon={<NearIcon />} text={data.location} />
                    </div>
                </div>
            </Link>
        </li>
    );
};

export default PostItem;
