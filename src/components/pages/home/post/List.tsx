import React from 'react';
import {PostItem} from '@/components/pages/home/post';
import {IMDFile} from '@/libs/post/type';
export interface IPostListProps {
    list: IMDFile[];
}

export const PostList: React.FC<IPostListProps> = ({list}) => {
    return (
        <ul className="grid grid-cols-1 gap-6 py-20 md:grid-cols-2 lg:grid-cols-3">
            {list.map(post => (
                <li className="col-span-1" key={post.data.slug}>
                    <PostItem post={post} />
                </li>
            ))}
        </ul>
    );
};
