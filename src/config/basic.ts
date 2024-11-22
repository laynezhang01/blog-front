export const BASIC_CONFIG = {
    avatar: 'https://f005.backblazeb2.com/file/uulinblog/avatar.jpg',
    banner: 'https://f005.backblazeb2.com/file/uulinblog/banner.webp',
    seo: {
        title: '阿林的博客',
        titleDes: '一个待业前端',
        description: '还没想好',
        url: new URL(process.env.NODE_ENV === 'production' ? 'https://linzip.com' : 'http://localhost:3000'),
        keywords: ''
    }
};
