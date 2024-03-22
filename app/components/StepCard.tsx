import React from 'react';
import Title from './Title';

interface StepCardProps {
  headline: React.ReactNode;
  description?: React.ReactNode;
  level: 'first' | 'second';
  step: number;
}

const StepCard: React.FC<StepCardProps> = ({
  step,
  level,
  headline,
  description,
}) => {
  return (
    // Card with stack positioning and flexbox, circle on the top, rounded square on the bottom
    <div className="w-full md:w-fit">
      <div className="relative z-10 flex items-center justify-center">
        {level === 'first' ? (
          <div
            className="relative flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-gradient-to-b from-orange-400 to-amber-500 text-xl font-bold text-white"
            aria-label={`Step ${step === 1 ? 'A' : 'B'}`}
          >
            {step === 1 ? 'A' : 'B'}
          </div>
        ) : (
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gradient-to-b from-amber-300 to-amber-400 text-xl font-bold text-white"
            aria-label={`Step ${step}`}
          >
            {step}
          </div>
        )}
      </div>
      <div className="-mt-[20px] inline-flex w-full flex-col items-center justify-center gap-3.5 rounded-lg border border-stone-900 border-opacity-30 bg-gradient-to-bl from-orange-50 to-stone-50 px-5 pb-5 pt-10 md:w-[312px]">
        <div className="inline-flex items-center justify-center gap-3.5">
          <Title size="medium" className="text-center">
            {headline}
          </Title>
        </div>
        <div className="self-stretch text-center text-base font-normal leading-normal text-black">
          {description}
        </div>
      </div>
    </div>
  );
};

export default StepCard;
