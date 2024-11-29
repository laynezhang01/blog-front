import React from 'react';
import Snow from '@/app/Snow';
import Banner from '@/components/Banner';
import PostsList from '@/components/Post/List';
import {getAllPosts} from '@/libs/post';

async function Main() {
    const posts = await getAllPosts();
    return (
        <div className="flex flex-col gap-8">
            <Banner />
            <PostsList posts={posts.list} />
            <Snow />
        </div>
    );
}

export default Main;
