import React from 'react';
import {getAllBlogPosts} from '@/libs/posts';
import Link from 'next/link';

const PostList: React.FC = () => {
    const posts = getAllBlogPosts();

    return (
        <div>
            {posts.list.map(item => (
                <Link key={item.slug} href={`/posts/${item.slug}`}>
                    <h2>{item.data.title}</h2>
                    <span>{item.data.tags}</span>
                </Link>
            ))}
        </div>
    );
};

export default PostList;
