import React, { PropsWithChildren } from 'react';

export const CommonWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="container m-auto flex justify-center">
      <div className="max-w-[1200px] max-lg:px-8">{children}</div>
    </div>
  );
};
