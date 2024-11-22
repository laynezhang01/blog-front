export interface INavItem {
    href: string;
    title: string;
}

export const NAVIGATION_ITEMS: INavItem[] = [
    {
        href: '/',
        title: '首页'
    },
    {
        href: '/about',
        title: '关于'
    }
];
