import React from 'react';
import Title from '../components/Title';
import StepCard from '../components/StepCard';
import Image from 'next/image';
import Subtitle from '../components/Subtitle';
import {
  ScreenSizeCategory,
  useScreenSizeCategory,
} from '../lib/hooks/useScreenSize';

const StepByStep = () => {
  const screenSizeCategory = useScreenSizeCategory();
  const isMobile = screenSizeCategory === ScreenSizeCategory.Mobile;
  return (
    <div className="align-center m-auto flex max-w-[1250px] flex-col items-center justify-center px-4">
      <div className="text-center text-xl text-neutral-500 ">
        A STEP-BY-STEP APPROACH
      </div>
      <Title size={'large'}>Delivery, without the hassle</Title>
      <div className="align-center relative m-auto my-20 flex h-full w-full flex-col items-center justify-center gap-8">
        <StepCard
          headline={'Shipper'}
          description={
            'Сreate a cargo card or choose a carrier that travels along the desired route'
          }
          level={'first'}
          step={1}
        />
        <StepCard
          headline={'Carrier'}
          description={
            'Сhoose a cargo to transport or add your own travel route'
          }
          level={'second'}
          step={2}
        />
        <StepCard
          headline={'Procamion'}
          description={
            'Оn average, the response time to the cargo card takes several hours, so feel free to add your cargo and probably today you will find your carrier'
          }
          level={'second'}
          step={3}
        />
        <div className="align-center flex  w-full items-center items-center justify-center justify-between gap-4 rounded-2xl border border-stone-900 border-opacity-30 bg-gradient-to-b from-white to-stone-50 p-14 md:flex-row ">
          <div className="m-auto max-w-[360px]">
            <Title className="mb-4" size={'medium'}>
              Safe transactions
            </Title>
            <Subtitle className="" size={'small'}>
              Make a contribution to the growth of the platform by leaving
              feedback about the carrier or sender. We are interested in you
              finding reliable partners for regular cooperation.
            </Subtitle>
          </div>
        </div>
        <StepCard headline={'Upcoming features'} level={'second'} step={4} />
        <div className="flex w-full items-center justify-between gap-4 rounded-2xl border border-stone-900 border-opacity-30 bg-gradient-to-b from-white to-stone-50 p-14">
          <div className="m-auto max-w-[360px]">
            <Title size={'medium'}>Convenience</Title>
            <ul className="mt-[8px] list-none">
              <li className="relative mb-2 pl-5 before:absolute before:left-0 before:top-[10px] before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-yellow-500 before:content-['']">
                <Subtitle size={'small'}>
                  Add a comment to your card if you have any restrictions in
                  order to find a more suitable partner for you
                </Subtitle>
              </li>
              <li className="relative mb-2 pl-5 before:absolute before:left-0 before:top-[10px] before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-yellow-500 before:content-['']">
                <Subtitle size={'small'}>
                  Сall up after confirmation of the response to discuss all the
                  details of transportation
                </Subtitle>
              </li>
            </ul>
          </div>
        </div>
        {isMobile ? (
          <div className="mx-auto flex w-full items-center justify-center bg-[url('/starsMobile.svg')] bg-top bg-no-repeat pt-8">
            <StepCard
              headline={'Finish'}
              description={'We delivered everything! '}
              level={'first'}
              step={2}
            />
          </div>
        ) : (
          <div className="mx-auto flex w-full items-center justify-center bg-[url('/starsDesktop.svg')] bg-center bg-no-repeat">
            <StepCard
              headline={'Finish'}
              description={'We delivered everything! '}
              level={'first'}
              step={2}
            />
          </div>
        )}

        <div className="absolute inset-0 -z-40 m-auto flex h-[77%] w-[2px] items-center justify-center border-2 border-dashed border-orange-500 md:h-[100%]"></div>
      </div>
    </div>
  );
};

export default StepByStep;
