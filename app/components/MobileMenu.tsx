'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="z-40 mr-4 flex h-[48px] w-[48px] lg:hidden">
      <button
        className="absolute z-50 p-2 text-white focus:outline-none"
        onClick={toggleMenu}
      >
        {!isOpen && (
          <div>
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.5 16.5H33.5" stroke="white" strokeLinecap="round" />
              <path d="M10.5 22.5H33.5" stroke="white" strokeLinecap="round" />
              <path d="M13 28.5H31" stroke="white" strokeLinecap="round" />
            </svg>
          </div>
        )}
      </button>
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="absolute left-0 top-0 h-screen w-full bg-black/30 backdrop-blur-lg"
        >
          <div className="absolute right-0 top-8 m-4 flex h-fit w-fit flex-col items-center rounded-xl bg-[#1D1D1B] px-8 py-4">
            <nav className="flex flex-col space-y-4 text-white">
              <Link href="#advantages">Advantages</Link>
              <Link href="#numbers">Numbers</Link>
              <Link href="#faq">FAQ</Link>
              <div className="text-white/30">Language (En)</div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
