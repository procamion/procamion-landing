'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Title from './Title';
import { Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import SwiperNav from './SwiperNav';

const slidesData = [
  {
    title: 'AI Load Matching',
    content:
      'Our algorithms speed up the matching process by pairing available shipments with suitable carriers based on cargo type, capacity, equipment, and location.',
  },
  {
    title: 'Real-time Tracking and Visibility',
    content:
      'Our algorithms speed up the matching process by pairing available shipments with suitable carriers based on cargo type, capacity, equipment, and location.',
  },
  {
    title: 'Dynamic Pricing',
    content:
      'Our algorithms speed up the matching process by pairing available shipments with suitable carriers based on cargo type, capacity, equipment, and location.',
  },
  {
    title: 'AI Automated Documentation',
    content:
      'Automated freight document generation, invoicing, and bookkeeping.',
  },
  {
    title: 'Payment Processing',
    content:
      'Our digital payment system ensures secure and efficient payment processing, minimizing administrative overhead.',
  },
  {
    title: 'Trucking Analytics',
    content:
      'Identify potential risks and security threats to shipments and take preemptive measures to prevent disruptions and ensure cargo safety.',
  },
] as const;

const swiperOptions = {
  modules: [Navigation],
  slidesPerView: 'auto',
  spaceBetween: 15,
  centeredSlides: true,
  breakpoints: {
    1072: {
      slidesPerView: 3,
      centeredSlides: false,
    },
    768: {
      slidesPerView: 2,
      centeredSlides: false,
    },
  },
} satisfies SwiperOptions;

export default function Slider() {
  return (
    <div className="relative max-w-[100vw] sm:-mx-[calc((100vw-608px)/2)] md:mx-auto md:w-[960px] md:max-w-full">
      <Swiper
        className="!px-4 !pb-20 sm:!px-[calc((100vw-608px)/2)] md:!px-0"
        {...swiperOptions}
        navigation={{
          prevEl: '.btn-prev',
          nextEl: '.btn-next',
        }}
      >
        {slidesData.map((slide) => (
          <SwiperSlide
            className="max-w-[272px] md:max-w-none"
            style={{ height: 'auto' }}
            key={slide.title}
          >
            <article className="flex h-full flex-col items-center rounded-xl border border-[#1D1D1B25] bg-white px-4 py-5">
              <Title className="text-primary mb-3 text-center text-[22px] leading-[1.2] md:mb-4 md:text-[30px]">
                {slide.title}
              </Title>
              <div className="mt-auto">
                <p className="text-center">{slide.content}</p>
              </div>
            </article>
          </SwiperSlide>
        ))}
        <SwiperNav />
      </Swiper>
    </div>
  );
}
