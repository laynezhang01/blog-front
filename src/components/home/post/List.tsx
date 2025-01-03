import React from 'react';
import {IMDFile} from '@/libs/post/type';
import PostItem from '@/components/home/post/Item';

export interface IPostListProps {
    posts: IMDFile[];
}

const PostList: React.FC<IPostListProps> = ({posts}) => {
    return (
        <ul className="grid grid-cols-3 gap-10 max-lg:grid-cols-2 max-md:grid-cols-1">
            {posts.map(item => (
                <PostItem key={item.data.slug} data={item.data} />
            ))}
        </ul>
    );
};

export default PostList;
