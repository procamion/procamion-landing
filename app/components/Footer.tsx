import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black px-4 py-6">
      <div className="container mx-auto mb-4 flex flex-col justify-between md:flex-row">
        {/* Logo */}
        <div className="mb-4 w-full md:mb-0 md:w-1/2">
          <Image
            width={300}
            height={200}
            src="/Logo.png" // Replace with your logo path
            alt="Logo"
          />
        </div>

        {/* Columns for links */}
        <div className="w-full md:flex md:w-1/2 md:justify-end">
          {/* Column 1 */}
          <div className="mb-4 w-full md:mb-0 md:w-1/3">
            <h4 className="mb-2 text-white">Shipper & Carrier</h4>
            <ul className="flex flex-col gap-1 text-gray-500">
              <Link href="#advantages">Advantages</Link>
              <Link href="#numbers">Numbers</Link>
              <Link href="#faq">FAQ</Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="align-center flex w-full items-center justify-center border-t-2 border-gray-900 p-4 text-gray-600 md:justify-end">
        <p>«Procamion» © 2022–2023 </p>
      </div>
    </footer>
  );
};

export default Footer;
