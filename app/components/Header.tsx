'use client';
import Image from 'next/image';
import Link from 'next/link';

const Menu = () => {
  return (
    <header className="fixed left-0 top-0 z-50 h-[54px] w-full rounded-b-xl bg-black md:h-[100px]">
      <div className="container h-full">
        <div className="flex h-full items-center justify-between">
          <Link href="/" className="inline-block">
            <Image
              src="/Logo.png"
              className="max-w-[151px] md:max-w-none"
              width={273}
              height={50}
              alt="Logo"
            />
          </Link>
          <button className="align-center flex flex-row items-center justify-center gap-2 text-white">
            <Image
              className="rounded-full"
              width={24}
              height={24}
              src={'/en.jpg'}
              alt={'en'}
            />
            EN
          </button>
        </div>
      </div>
    </header>
  );
};

export default Menu;
