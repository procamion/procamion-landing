import React from 'react';
import { twMerge } from 'tailwind-merge';

interface SubtitleProps {
  children: React.ReactNode;
  className?: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ children, className }) => {
  return (
    <h3 className={twMerge('text-[22px] font-normal', className)}>
      {children}
    </h3>
  );
};

export default Subtitle;
