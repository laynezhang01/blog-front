import React, {useState, useEffect} from 'react';

interface IPosition {
    x: number;
    y: number;
}

export function useScrollPosition(target?: React.RefObject<HTMLElement>) {
    const [scrollPosition, setScrollPosition] = useState<IPosition>({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const element = target?.current || window;

        const handleScroll = () => {
            if (typeof window === 'undefined') {
                return;
            }
            if (element === window) {
                setScrollPosition({
                    x: window.scrollX || 0,
                    y: window.scrollY || 0,
                });
            } else if (element instanceof HTMLElement) {
                setScrollPosition({
                    x: element.scrollLeft || 0,
                    y: element.scrollTop || 0,
                });
            }
        };

        // 初始化位置
        handleScroll();

        element.addEventListener('scroll', handleScroll, {passive: true});
        return () => {
            element.removeEventListener('scroll', handleScroll);
        };
    }, [target]);

    return scrollPosition;
}
