import React from 'react';

interface TabProps {
  childrenIco: React.ReactNode;
  childrenText: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({
  childrenIco,
  childrenText,
  isActive,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`align-center flex w-full cursor-pointer flex-row items-center justify-center gap-2 rounded-xl px-2 py-1 md:w-fit md:px-4 md:py-2 ${
        isActive ? 'bg-black text-white' : 'bg-black/0 text-black'
      }`}
    >
      {childrenIco}
      <p className="text-[14px] md:text-sm">{childrenText}</p>
    </div>
  );
};

export default Tab;
