export interface INavItem {
    path: string;
    title: string;
}

// const navs = ['首页', '笔记', '碎碎念', '相簿', '读书', '观影', '关于', '留言'];

export const NAVIGATION_ITEMS: INavItem[] = [
    {
        path: '/',
        title: '首页'
    },
    {
        path: '/posts',
        title: '文章'
    },
    {
        path: '/talking',
        title: '碎碎念'
    },
    {
        path: '/archives',
        title: '归档'
    },
    {
        path: '/photo',
        title: '相册'
    },
    {
        path: '/about',
        title: '关于'
    }
];
