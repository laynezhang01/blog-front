import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import LazyImage from '@/components/features/LazyImage';
import {IMDFile} from '@/libs/post/type';
import cls from './item.module.css';
export interface IPostItemProps {
    post: IMDFile;
}

export const PostItem: React.FC<IPostItemProps> = ({post}) => {
    const {data} = post;
    const {coverImage = 'https://img.linzip.com/banner.webp', slug, title, description} = data;

    return (
        <div className="group relative overflow-hidden rounded-[4px] bg-card shadow-md hover:shadow-xl">
            <Link
                href={`/posts/${slug}`}
                className={clsx('group relative inline-flex h-[250px] w-full overflow-hidden')}
            >
                <LazyImage
                    className="transition-all duration-300 group-hover:scale-125"
                    style={{minHeight: '100%', minWidth: '100%'}}
                    src={coverImage}
                    alt={title}
                />
                <div className="items-top absolute inset-0 flex bg-black/20 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    <div className="p-10 text-white">
                        <p className="line-clamp-4 text-sm leading-7">{description}</p>
                    </div>
                </div>
            </Link>
            <div className={clsx(cls.slant, cls.reverse)} />
            <div className={cls.slant} />
            <div className="relative h-[130px] bg-card px-[20px] pb-[40px] pt-[10px]">
                <h2>{title}</h2>
            </div>
        </div>
    );
};
