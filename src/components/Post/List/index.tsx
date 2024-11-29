import React from 'react';
import PostItem from '@/components/Post/List/Item';
import type {IParseMDFile} from '@/libs/post';

export interface IPostListProps {
    posts: IParseMDFile[];
}

const PostsList: React.FC<IPostListProps> = ({posts}) => {
    return (
        <ul className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
            {posts.map(item => (
                <PostItem key={item.slug} data={item.data} slug={item.slug} />
            ))}
        </ul>
    );
};

export default PostsList;
