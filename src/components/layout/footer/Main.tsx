import React, {Suspense} from 'react';
import dayjs from 'dayjs';
import Link from 'next/link';
import {BASIC_CONFIG} from '@/config/basic';
import TotalPageViews from '@/components/layout/footer/TotalPageViews';
import LastVisitorInfo from '@/components/layout/footer/LastVisitorInfo';
import {Container} from '@/components/layout/wrapper';
import {SOCIAL_ITEMS} from '@/config/social';
import {Social} from '@/components/layout/footer/Social';

export async function Footer() {
    let dateStr: string | number;
    const now = dayjs().year();
    const createDate = dayjs(BASIC_CONFIG.createDate).year();
    dateStr = now === createDate ? createDate : `${createDate}-${now}`;

    return (
        <footer className="bg-white text-xs text-secondary">
            <div className="flex h-20 items-center justify-center gap-8 shadow-sm">
                {SOCIAL_ITEMS.map(social => (
                    <Social key={social.href} icon={social.icon} title={social.title} href={social.href} />
                ))}
            </div>
            <Container innerClassName="flex flex-col gap-10 py-10">
                <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                        Tags：
                        <div className="flex flex-wrap gap-3">
                            <span># nextjs</span>
                            <span># 日记</span>
                            <span># 旅行</span>
                            <span># 摄影</span>
                            <span># 前端</span>
                            <span># react</span>
                            <span># e2e</span>
                            <span># note</span>
                            <span># nextjs</span>
                            <span># 日记</span>
                            <span># 旅行</span>
                            <span># 摄影</span>
                            <span># 前端</span>
                            <span># react</span>
                            <span># e2e</span>
                            <span># note</span>
                        </div>
                    </div>
                    <div className="flex gap-4 max-md:justify-center">
                        <Suspense>
                            <TotalPageViews />
                        </Suspense>
                        <Suspense>
                            <LastVisitorInfo />
                        </Suspense>
                    </div>
                </div>
                <div className="flex gap-2 max-md:justify-center">
                    <span>&copy; {dateStr}</span>
                    <span>&#9825;</span>
                    <span>
                        <Link href={BASIC_CONFIG.seo.url.toString()}>林的时光日记</Link>
                    </span>
                </div>
            </Container>
        </footer>
    );
}
