'use client';
import { useState } from 'react';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Button from '../components/Button';
import CtaLine from '../icons/CtaLine';
import Popup from '../components/Popup';

export default function CtaWithModal() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section
      id="contact"
      className="bg-yellow relative pb-16 pt-20 md:pb-20 md:pt-24"
    >
      <div className="container">
        <div className="align-center m-auto flex max-w-[680px] flex-col items-center gap-3 md:gap-4">
          <div className="align-center flex items-center justify-center">
            <div className="pointer-events-none absolute left-1/2 top-9 w-full -translate-x-1/2">
              <CtaLine />
            </div>
            <Title>Procamion</Title>
          </div>

          <Subtitle className="text-center text-base md:text-[22px]">
            Connecting continents. Simplifying shipments.
          </Subtitle>

          <Button
            onClick={() => setIsPopupOpen(true)}
            className="mt-7 w-full max-w-[200px] rounded-lg border border-black p-2 text-lg font-bold md:mt-12 md:max-w-[280px] md:p-4 md:text-[22px]"
            level={'secondary'}
          >
            Contact us
          </Button>
          {isPopupOpen && <Popup closePopup={() => setIsPopupOpen(false)} />}
        </div>
      </div>
    </section>
  );
}
