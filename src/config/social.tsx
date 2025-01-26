import React from 'react';

import GithubIcon from '@/public/svgs/icons/github.svg';
import MailIcon from '@/public/svgs/icons/mail.svg';
import RssIcon from '@/public/svgs/icons/rss.svg';
import WeiboIcon from '@/public/svgs/icons/sina.svg';
import XIcon from '@/public/svgs/icons/x.svg';

export interface ISocial {
  icon: React.ReactNode;
  title: string;
  href: string;
}

export const SOCIAL_ITEMS: ISocial[] = [
  {
    icon: <WeiboIcon />,
    title: '微博',
    href: 'weibo',
  },
  {
    icon: <GithubIcon />,
    title: 'Github',
    href: 'Github',
  },
  {
    icon: <XIcon />,
    title: 'Twitter',
    href: 'Twitter',
  },
  {
    icon: <RssIcon />,
    title: 'Rss',
    href: 'Rss',
  },
  {
    icon: <MailIcon />,
    title: 'Mail',
    href: 'Mail',
  },
];
