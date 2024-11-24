import React, {Suspense} from 'react';
import dayjs from 'dayjs';
import clsx from 'clsx';
import Link from 'next/link';
import {BASIC_CONFIG} from '@/config/basic';
import TotalPageViews from '@/components/Footer/TotalPageViews';
import LastVisitorInfo from '@/components/Footer/LastVisitorInfo';

async function Footer() {
    let dateStr: string | number;
    const now = dayjs().year();
    const createDate = dayjs(BASIC_CONFIG.createDate).year();
    dateStr = now === createDate ? createDate : `${createDate}-${now}`;

    return (
        <footer>
            <div
                className={clsx(
                    'container mx-auto max-w-screen-xl px-10 text-xs text-muted-foreground max-md:px-10',
                    'container flex justify-between gap-4 p-6 max-md:flex-col'
                )}
            >
                <div className="flex gap-4 max-md:justify-center">
                    <span>&copy; {dateStr}</span>
                    <span>&#9825;</span>
                    <span>
                        <Link href={BASIC_CONFIG.seo.url.toString()}>林的时光日记</Link>
                    </span>
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
        </footer>
    );
}

export default Footer;
