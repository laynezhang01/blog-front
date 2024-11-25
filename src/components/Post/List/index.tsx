import React from 'react';
import {getAllBlogPosts} from '@/libs/posts';
import PostItem from '@/components/Post/List/Item';

const PostList: React.FC = () => {
    const posts = getAllBlogPosts();

    return (
        <ul>
            {posts.list.map(item => (
                <PostItem key={item.slug} data={item.data} slug={item.slug} />
            ))}
        </ul>
    );
};

export default PostList;
