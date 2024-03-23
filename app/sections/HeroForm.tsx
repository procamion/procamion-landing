'use client';

import Button from '@/app/components/Button';
import Subtitle from '@/app/components/Subtitle';
import React, { useState } from 'react';
import SubmitButton from '../components/SubmitButton';

const HeroForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Send the form data to the API route
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
      } else {
        console.error('Form submission failed');
      }

      setEmail('');
    } catch (error) {
      setEmail('');

      console.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="mt-4 flex flex-col gap-3">
        <Subtitle className="font-normal text-white">Request a demo</Subtitle>
        <div className="flex w-full flex-col gap-4 border-0 md:flex-row">
          <form
            className="flex w-full flex-col items-stretch gap-3 border-0 md:flex-row"
            onSubmit={handleSubmit}
          >
            <input
              className="w-full rounded-lg border border-black px-4 py-2 text-lg outline-none md:max-w-[520px] md:rounded-xl md:py-3"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <SubmitButton />
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroForm;
