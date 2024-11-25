import React from 'react';
import Snow from '@/app/Snow';
import Banner from '@/components/Banner';
import PostList from '@/components/PostList';

const Main: React.FC = () => {
    return (
        <div className="flex flex-col gap-8">
            <Banner />
            <div className="flex gap-4 max-md:flex-col-reverse">
                <aside className="flex w-[300px] flex-col gap-4 max-md:hidden">
                    <div className="rounded bg-card p-4 shadow">小组件1</div>
                    <div className="sticky top-16 rounded bg-card p-4 shadow">小组件2</div>
                </aside>
                <div className="flex-auto">
                    <PostList />
                </div>
            </div>

            <Snow />
        </div>
    );
};

export default Main;
