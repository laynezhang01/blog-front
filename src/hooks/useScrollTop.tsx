/**
 * @file 获取滚动高度
 * @return scrollTop
 */

import {useEffect, useState} from 'react';
import throttle from 'lodash.throttle';

const useScrollTop = () => {
    const [scrollTop, setScrollTop] = useState<number>(0);

    useEffect(
        () => {
            const onScroll = throttle(() => {
                setScrollTop(window.scrollY);
            }, 500);

            document.addEventListener('scroll', onScroll);
            return () => {
                document.removeEventListener('scroll', onScroll);
            };
        },
        []
    );

    return [scrollTop];
}

export default useScrollTop;
