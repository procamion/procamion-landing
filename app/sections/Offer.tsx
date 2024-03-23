import React from 'react';
import Title from '../components/Title';
import Button from '../components/Button';

const Offer = () => {
  return (
    <div id="advantages" className="w-full bg-[#F5F5F5] py-16">
      <div className="container">
        <div className="align-center m-auto flex max-w-[1250px] flex-col items-center justify-center gap-7 lg:gap-16">
          <Title className="text-center text-[26px] font-bold lg:text-[45px]">
            Enhance your transportation experience
          </Title>
          <div className="align-center flex flex-col items-center justify-between gap-6 md:flex-row md:items-stretch lg:gap-10">
            <div className="inline-flex w-full max-w-[360px] flex-1 flex-col gap-4 rounded-2xl border border-stone-900 border-opacity-30 bg-white px-4 py-6 lg:min-w-[410px] lg:px-6 lg:py-8">
              <Title className="text-center text-[22px] lg:text-[30px]">
                If you are the <span className="text-amber-300">Shipper</span>
              </Title>
              <ul className="list-disc pl-6">
                <li>Any type of loading: FTL or LTL</li>
                <li>Fast search for a carrier</li>
                <li>Dynamic Pricing</li>
                <li>Automated Documentation</li>
                <li>Real-Time Tracking</li>
              </ul>
            </div>
            <div className="flex items-center">
              <p className="text-center text-2xl font-medium text-neutral-500 lg:text-3xl">
                OR
              </p>
            </div>
            <div className="inline-flex w-full max-w-[360px] flex-1 flex-col gap-4 rounded-2xl border border-stone-900 border-opacity-30 bg-white px-4 py-6 lg:min-w-[410px] lg:px-6 lg:py-8">
              <Title className="text-center text-[22px] lg:text-[30px]">
                If you are the <span className="text-orange-400">Carrier</span>
              </Title>
              <ul className="list-disc pl-6">
                <li>Access to a broader freight exchange market</li>
                <li>Efficient load matching</li>
                <li>Reduced empty miles</li>
                <li>Insured payment</li>
                <li>Latest Road and Weather Updates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
