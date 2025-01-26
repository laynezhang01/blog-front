import { v4 as uuidv4 } from 'uuid';

export interface INavigationItem {
  title: string;
  href?: string;
  subItems?: INavigationItem[];
}

export interface INavigationItemWithKey extends Omit<INavigationItem, 'subItems'> {
  key: string;
  subItems: INavigationItemWithKey[];
}

export const NAVIGATION_ITEMS: INavigationItem[] = [
  {
    href: '/posts',
    title: '文章',
    subItems: [
      {
        href: '/posts/category',
        title: '分类',
      },
      {
        href: '/posts/tags',
        title: '标签',
      },
      {
        href: '/posts/archives',
        title: '归档',
      },
    ],
  },
  {
    href: '/diary',
    title: '动态',
  },
  {
    href: '/comment',
    title: '留言',
  },
  {
    title: '聚合',
    subItems: [
      {
        href: '/photos',
        title: '图记',
      },
      {
        href: '/books',
        title: '阅读',
      },
      {
        href: '/movies',
        title: '观影',
      },
    ],
  },
  {
    href: '/about',
    title: '关于',
  },
];

const addKeys = (items: INavigationItem[]): INavigationItemWithKey[] => {
  return items.map((item) => {
    // 为当前项添加 key
    const newItem = {
      ...item,
      key: uuidv4(), // 使用 uuid 生成唯一 key
    };

    // 递归处理子项
    if (item.subItems) {
      newItem.subItems = addKeys(item.subItems);
    }

    return newItem;
  });
};

// 处理 NAVIGATION_ITEMS，添加 key
export const NAVIGATION_ITEMS_WITH_KEYS: INavigationItemWithKey[] = addKeys(NAVIGATION_ITEMS);
