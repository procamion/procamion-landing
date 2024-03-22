import React from 'react';
import Title from '../components/Title';
import StepCard from '../components/StepCard';
import StarsMobile from '../icons/StarsMobile';
import StarsDesktop from '../icons/StarsDesktop';

const StepByStep = () => {
  return (
    <section className="py-16 md:py-20 md:pb-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="text-gray text-center text-base uppercase md:text-xl">
            A STEP-BY-STEP APPROACH
          </div>
          <Title className="mb-12 text-[26px] md:mb-20 md:text-[45px]">
            Trucking without hassle
          </Title>
          <div className="align-center relative m-auto flex h-full w-full flex-col items-center justify-center gap-10 overflow-hidden md:gap-16">
            <svg
              width="2"
              height="2500"
              viewBox="0 0 2 2500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-1/2 top-0 -z-10 h-full -translate-x-1/2"
            >
              <line
                x1="1"
                y1="0"
                x2="0"
                y2="2500"
                stroke="#F59929"
                strokeWidth="2"
                strokeDasharray="8 8"
              />
            </svg>
            <StepCard
              headline="Sign up"
              level="first"
              description="Register a new account"
              step={1}
            />
            <StepCard
              headline="Post"
              description="Simply create a new listing whenever you have cargo or an empty truck"
              level="second"
              step={2}
            />
            <StepCard
              headline="Explore"
              description="Browse through the available options of recent ads"
              level="second"
              step={3}
            />
            <StepCard
              headline="Match"
              description="Let our AI algorithms find the right carrier for the cargo"
              level="second"
              step={4}
            />
            <StepCard
              headline="Manage"
              description="Utilize our AI Automated Documentation System for invoicing and regulatory documentation"
              level="second"
              step={5}
            />
            <StepCard
              headline="Monitor"
              description="Easily handle your orders, view statistics, and track your cargo — all from your dashboard"
              level="second"
              step={6}
            />
            <StepCard headline="Upcoming features" level="second" step={7} />
            <StepCard
              headline="Complete"
              description="Secure online payment"
              level="second"
              step={6}
            />
            <div className="relative mx-auto flex items-center justify-center bg-center bg-no-repeat pt-10 md:bg-[url('/starsDesktop.svg')] md:p-0">
              <StarsMobile />
              <StarsDesktop />
              <StepCard
                headline="Cargo delivered"
                description="To avoid empty miles, the truck can announce its availability for the return trip."
                level={'first'}
                step={2}
              />
            </div>

            {/* <div className="absolute inset-0 -z-40 m-auto flex h-[77%] w-[2px] items-center justify-center border border-dashed border-orange-500 md:h-[100%]"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepByStep;
