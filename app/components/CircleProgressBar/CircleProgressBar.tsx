'use client';
import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useInView } from 'react-intersection-observer';
import 'react-circular-progressbar/dist/styles.css';
import './styles.css';
import useMediaQuery from '@/app/lib/hooks/useMediaQuery';

const AnimatedCircularProgressBar = () => {
  const [value, setValue] = useState(0);
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const isMobile = useMediaQuery('(max-width: 767px)');

  useEffect(() => {
    if (inView) {
      setValue(50);
    }
  }, [inView]);

  return (
    <div
      ref={inViewRef}
      className={`relative flex rounded-full border border-[#1D1D1B4D] bg-[#FFF7F0] [&_text]:translate-y-0.5 [&_text]:font-bold ${isMobile && 'max-w-[280px]'}`}
    >
      <div
        className={`absolute left-1/2 top-1/2 ${isMobile ? 'h-[calc(100%-39px)] w-[calc(100%-39px)] ' : 'h-[calc(100%-42px)] w-[calc(100%-42px)]'} -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1D1D1B4D]`}
      />
      <CircularProgressbar
        styles={buildStyles({
          pathTransitionDuration: 0.5,
          textColor: '#000000',
          textSize: isMobile ? '20px' : '28px',
          pathColor: `#F89C2C`,
          trailColor: '#FFFDF4',
          backgroundColor: '#3e98c7',
        })}
        strokeWidth={7}
        backgroundPadding={3}
        value={value}
        text={`-50%`}
      />
    </div>
  );
};

export default AnimatedCircularProgressBar;
