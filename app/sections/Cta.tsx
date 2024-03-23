'use client';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Button from '../components/Button';
import { useState } from 'react';
import SubmitButton from '../components/SubmitButton';

const Cta = () => {
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
    <section className="bg-black py-16 md:py-20">
      <div className="container">
        <div className="flex justify-center">
          <div className="max-w-[960px]">
            <Title className="mb-4 text-center text-white md:mb-5">
              Our mission: to provide smart transportation solutions between
              Europe and Africa
            </Title>
            <Subtitle className="mb-6 text-center font-medium text-gray-100 md:mb-14">
              Still have questions? Drop your email for further assistance!
            </Subtitle>
            <form
              className="m-auto flex w-full max-w-[610px] flex-col items-stretch gap-5 md:flex-row md:gap-2.5"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="bg-dark w-full rounded-lg border border-white border-opacity-20 px-3 py-2 text-lg text-white outline-none md:rounded-xl"
              />
              <SubmitButton />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
