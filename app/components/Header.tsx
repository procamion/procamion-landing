'use client';
import Image from 'next/image';
import Link from 'next/link';

const Menu = () => {
  return (
    <header className="fixed left-0 top-0 z-50 h-[100px] w-full rounded-b-xl bg-black">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="text-xl font-bold text-white">
          <Link href="/">
            <Image src="/Logo.png" width={273} height={50} alt="Logo" />
          </Link>
        </div>
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
    </header>
  );
};

export default Menu;
