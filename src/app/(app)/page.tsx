import React from 'react';
import {NextPage} from 'next';
import {Banner} from '@/components/pages/home/banner';
import {PostList} from '@/components/Post';
import {getAllPosts} from '@/libs/post';
import {Container} from '@/components/layout/wrapper';

const HomePage: NextPage = () => {
    const posts = getAllPosts({dir: 'posts'});
    return (
        <>
            <Banner />
            <Container>
                <div className="flex h-[1000px] gap-8">
                    <div className="flex-1">
                        <PostList posts={posts.list} />
                    </div>
                    <div className="flex w-[300px] flex-col gap-8 max-lg:hidden">
                        <div className="rounded-[8px] bg-card p-8 shadow-xl">小组件1</div>
                        <div className="rounded-[8px] bg-card p-8 shadow-xl">小组件2</div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default HomePage;
