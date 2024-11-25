export const BASIC_CONFIG = {
    avatar: 'https://img.linzip.com/avatar.jpg',
    banner: {
        url: 'https://img.linzip.com/banner.webp',
        text: '我不害怕明天，因為我經歷過昨天，也熱愛今天 '
    },
    seo: {
        title: '林的时光日记',
        titleDes: '相聚有時，後會無期',
        description:
            '人生这趟旅途中总是在相遇，也总是在分离。以前年轻，最怕分离。可是时光荏苒，也到了而立之年，接受分离的同时也逐渐接受了自己。',
        url: new URL(process.env.NODE_ENV === 'production' ? 'https://linzip.com' : 'http://localhost:3000'),
        keywords: '林的时光日记,阿林,博客,个人记录,独立博客,blog,技术博客,前端,个人生活,nextjs,node,code'
    },
    createDate: '2024-11-20'
};
