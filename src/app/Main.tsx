import React from 'react';
import Snow from '@/app/Snow';
import Banner from '@/components/Banner';

const Main: React.FC = () => {
    return (
        <div className="mt-6 flex flex-col gap-6">
            <Banner />
            <div className="flex gap-4 max-md:flex-col-reverse">
                <aside className="flex w-[300px] flex-col gap-4">
                    <div className="rounded bg-card p-4 shadow">侧边栏1</div>
                    <div className="sticky top-16 rounded bg-card p-4 shadow">粘性定位盒子2</div>
                </aside>
                <article className="flex-auto">
                    <p>sss</p>
                    <p>sss</p>
                    <p>sss</p>
                    <p>sss</p>
                    <p>sss</p>
                    <p>sss</p>
                    <p>sss</p>
                    <p>sss</p>
                    <p>sss</p>
                    <p>sss</p>
                    <p>sss</p>
                    <p>sss</p>
                    <p>sss</p>
                    <p>sss</p>
                    <p>sss</p>
                    <p>sss</p>
                    <p>sss</p>
                    <p>sss</p>
                    <p>sss</p>
                    <p>sss</p>
                    <p>sss</p>
                    <p>sss</p>
                    <p>sss</p>
                    <p>sss</p>
                    <p>sss</p>
                    <p>sss</p>
                    <p>sss</p>
                    <p>sss</p>
                    <p>sss</p>
                    <p>sss</p>
                    <p>sss</p>
                    <p>sss</p>
                    <p>sss</p>
                    <p>sss</p>
                    <p>sss</p>
                </article>
            </div>

            <Snow />
        </div>
    );
};

export default Main;
