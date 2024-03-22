'use client';
import Image from 'next/image';
import Link from 'next/link';

const Menu = () => {
  return (
    <header className="fixed left-0 top-0 z-50 h-[54px] w-full rounded-b-xl bg-black md:h-[100px]">
      <div className="container h-full">
        <div className="flex h-full items-center justify-between">
          <div className="h-[28px] w-[151px] text-xl font-bold text-white md:h-[50px] md:w-[273px]">
            <Link href="/" className="inline-block">
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
      </div>
    </header>
  );
};

export default Menu;
