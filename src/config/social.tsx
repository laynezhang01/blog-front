import React from 'react';
import WeiboIcon from '@/assets/svgs/icons/sina.svg';
import GithubIcon from '@/assets/svgs/icons/github.svg';
import XIcon from '@/assets/svgs/icons/x.svg';
import RssIcon from '@/assets/svgs/icons/rss.svg';
import MailIcon from '@/assets/svgs/icons/mail.svg';

export interface ISocial {
    icon: React.ReactNode;
    title: string;
    href: string;
}

export const SOCIAL_ITEMS: ISocial[] = [
    {
        icon: <WeiboIcon />,
        title: '微博',
        href: 'weibo'
    },
    {
        icon: <GithubIcon />,
        title: 'Github',
        href: 'Github'
    },
    {
        icon: <XIcon />,
        title: 'Twitter',
        href: 'Twitter'
    },
    {
        icon: <RssIcon />,
        title: 'Rss',
        href: 'Rss'
    },
    {
        icon: <MailIcon />,
        title: 'Mail',
        href: 'Mail'
    }
];
