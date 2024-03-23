import React from 'react';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Button from '../components/Button';

export default function CtaWithModal() {
  return (
    <div className="bg-amber-300">
      <div className="align-center m-auto flex max-w-[686px] flex-col items-center justify-center gap-4 p-4 py-20">
        <div className="align-center flex items-center justify-center">
          <div className="absolute">
            <svg
              width="100%"
              height="92"
              viewBox="0 0 688 92"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 91C1 91 110.76 0.997489 344 1C577.24 1.00251 687 91 687 91"
                stroke="url(#paint0_linear_228_994)"
                strokeDasharray="15 15"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_228_994"
                  x1="344"
                  y1="1"
                  x2="344"
                  y2="69"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <Title>Procamion</Title>
        </div>

        <Subtitle className="text-center">
          Оn average, the response time to the cargo card takes several hours,
          so feel free to add your cargo and probably today you will find your
          carrier
        </Subtitle>

        <div className="mt-10 flex w-full flex-col gap-4 md:flex-row">
          <Button
            // togglePopup={togglePopup}
            className="w-full border-2 border-black bg-black/0"
            level={'secondary'}
          >
            Contact us
          </Button>
        </div>
      </div>
    </div>
  );
}
