import React from 'react';
import clsx from 'clsx';
import {PostItem} from '@/components/Post';
import {IMDFile} from '@/libs/post/type';

export interface IPostListProps {
    posts: IMDFile[];
}

export const PostList: React.FC<IPostListProps> = ({posts}) => {
    return (
        <ul className="flex flex-col gap-8">
            {posts.map(item => (
                <li
                    key={item.data.slug}
                    className={clsx(
                        'relative after:absolute after:inset-0 after:opacity-20 after:shadow-[0_0px_20px_0px_rgba(0,0,0,0.7)]',
                        'after:-z-10 after:rounded-[6px] dark:after:shadow-[0_0px_20px_0px_rgba(74,74,74,0.7)]'
                    )}
                >
                    <PostItem data={item.data} content={item.content} />
                </li>
            ))}
        </ul>
    );
};
