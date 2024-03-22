import { twMerge } from 'tailwind-merge';

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ children, className }) => {
  return (
    <h2
      className={twMerge(
        'text-[45px] font-medium leading-tight text-black',
        className
      )}
    >
      {children}
    </h2>
  );
};

export default Title;
