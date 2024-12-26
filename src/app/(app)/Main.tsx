import React from 'react';
import Banner from '@/components/Banner';
import PostsList from '@/components/Post/List';
import {getAllPosts} from '@/libs/post';
import {load} from 'outstatic/server';

async function Main() {
    const db = await load();
    const allPosts = await db
        .find({collection: 'posts'}, ['title', 'publishedAt', 'slug', 'coverImage', 'description', 'tags'])
        .sort({publishedAt: -1})
        .toArray();
    console.log(allPosts);
    const posts = await getAllPosts();
    return (
        <div className="flex flex-col gap-8">
            <Banner />
            <PostsList posts={posts.list} />
        </div>
    );
}

export default Main;
