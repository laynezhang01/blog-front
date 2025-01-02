import React from 'react';
import Banner from '@/components/Banner';
import PostsList from '@/components/home/post/List';
import {getAllPosts} from '@/libs/post';
import {NextPage} from 'next';

const HomePage: NextPage = () => {
    const posts = getAllPosts({dir: 'posts'});
    return (
        <div className="m-auto max-w-[1140px]">
            <div className="flex flex-col gap-8">
                <Banner />
                <PostsList posts={posts.list} />
            </div>
        </div>
    );
};

export default HomePage;
