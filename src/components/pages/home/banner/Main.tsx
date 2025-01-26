import clsx from 'clsx';
import NextImage from 'next/image';
import Link from 'next/link';
import React from 'react';

import { AnimatedSession } from '@/components/layout/AnimatedSessions';
import { Container } from '@/components/layout/wrapper';
import config from '@/config/basic.json';

import cls from './main.module.css';

export const Banner: React.FC = () => {
  return (
    <div
      className={clsx('relative flex h-[500px] flex-col items-center justify-between bg-banner-bg')}
      // style={{backgroundImage: `url(/api/bing)`}}
    >
      <div
        className={clsx(
          cls.halo,
          'absolute -top-[360px] right-0 h-[800px] overflow-hidden rounded-full blur-[150px]',
          'w-[800px]'
        )}
      />
      <Container
        innerClassName={clsx(
          'relative flex-1 flex items-center justify-center h-[85%] flex-col gap-6 transition-all duration-300',
          'max-md:flex-col max-md:gap-4 text-white'
        )}
      >
        <AnimatedSession className="flex flex-col items-center justify-center gap-6">
          <Link className="relative mb-4" href="/">
            <NextImage
              src={config.basic.avatar}
              alt="avatar"
              width={100}
              height={100}
              className={clsx(
                'h-28 w-28 rounded-full border-[0.35rem] border-white object-cover shadow-xl',
                'transition ease-linear hover:scale-110'
              )}
            />
            <span className="absolute bottom-0 right-0 text-2xl hover:rotate-2 md:text-4xl">
              👋
            </span>
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-4 text-[16px] md:flex-row md:text-[20px]">
            <span>
              Hi, I&apos;m
              <span className="ml-2 font-bold">Layne Zhang.</span>
            </span>
            <span>一名Web前端开发工程师</span>
          </div>
          <p className="text-[12px] md:text-[14px]">业余摄影爱好者, 肥宅, 熬夜🏆.</p>
        </AnimatedSession>
      </Container>
    </div>
  );
};
