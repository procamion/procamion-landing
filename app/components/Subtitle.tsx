import React from 'react';
import { twMerge } from 'tailwind-merge';

interface SubtitleProps {
  children: React.ReactNode;
  className?: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ children, className }) => {
  return (
    <h3 className={twMerge('text-lg font-normal md:text-[22px]', className)}>
      {children}
    </h3>
  );
};

export default Subtitle;
