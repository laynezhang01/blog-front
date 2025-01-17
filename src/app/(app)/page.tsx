import {NextPage} from 'next';
import React from 'react';

import {Container} from '@/components/layout/wrapper';
import {Banner} from '@/components/pages/home/banner';
import {PostList} from '@/components/pages/home/post';
import {getAllPosts} from '@/libs/post';

const HomePage: NextPage = () => {
    const posts = getAllPosts({dir: 'posts'});
    return (
        <>
            <Banner />
            <Container innerClassName="px-6">
                <PostList list={posts.list} />
            </Container>
        </>
    );
};

export default HomePage;
