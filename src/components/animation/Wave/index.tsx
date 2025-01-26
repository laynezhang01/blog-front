import clsx from 'clsx';
import React from 'react';

import cls from './wave.module.css';

export interface IWaveProps {
  className?: string;
}

export const Wave: React.FC<IWaveProps> = ({ className }) => {
  return (
    <div className={clsx(className, 'absolute inset-0')}>
      <svg
        className="absolute bottom-0 -mb-[7px] h-[15vh] max-h-[150px] min-h-[100px] w-full"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g>
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
            className={`${cls.parallaxUse} ${cls.parallaxUse1}`}
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            className={`${cls.parallaxUse} ${cls.parallaxUse2}`}
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            className={`${cls.parallaxUse} ${cls.parallaxUse3}`}
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="7"
            className={`${cls.parallaxUse} ${cls.parallaxUse4}`}
          />
        </g>
      </svg>
    </div>
  );
};
