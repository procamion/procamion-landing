'use client';

import Button from '@/app/components/Button';
import Subtitle from '@/app/components/Subtitle';
import React, { useState } from 'react';

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
        <Subtitle className="font-medium text-white">Request a demo</Subtitle>
        <div className="flex w-full flex-col gap-4 border-0 md:flex-row">
          <form
            className="flex w-full flex-col items-stretch gap-3 border-0 md:flex-row"
            onSubmit={handleSubmit}
          >
            <input
              className="w-full max-w-[520px] rounded-xl border-2 border-gray-200 px-4 py-3 text-lg"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              type="submit"
              className="color-white bg-primary w-[200px] max-w-[400px] flex-shrink-0 rounded p-4 text-[20px] text-white hover:opacity-90"
              level="primary"
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroForm;
