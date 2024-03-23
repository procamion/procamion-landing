import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FooterNav from './FooterNav';

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container">
        <div className="flex flex-col items-center py-9 md:flex-row md:items-start md:justify-between md:py-12">
          <div className="mb-10 md:mb-0">
            <Image
              className="max-w-[225px] md:max-w-none"
              width={432}
              height={55}
              src="/Logo.png"
              alt="Logo"
            />
          </div>
          <div className="md:pr-10">
            <h4 className="mb-2 text-white">Procamion</h4>
            <FooterNav />
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white border-opacity-30 py-8 text-sm font-normal text-gray-100 text-opacity-70 md:flex-row md:text-base">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
            <Link href="/">Site Terms of Use</Link>
            <Link href="/">Personal data processing policy</Link>
          </div>
          <p className="opacity-50">«Procamion» © 2022–2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
