'use client';
import SwiperArrow from '../icons/SwiperArrow';

export default function SwiperNav() {
  return (
    <div className="absolute bottom-0 left-1/2 z-10 flex -translate-x-1/2 items-center justify-center gap-5">
      <button
        className={`btn-prev grid h-14 w-14 rotate-180 place-items-center`}
      >
        <SwiperArrow />
      </button>
      <button
        className={`btn-next grid h-14 w-14 -translate-y-px place-items-center`}
      >
        <SwiperArrow />
      </button>
    </div>
  );
}
