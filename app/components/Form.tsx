import React, { FormEvent, useState } from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
import Button from './Button';

interface ContactFormProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void; // Add an onClose callback prop to handle closing the popup
  email: string;
  setEmail: (email: string) => void;
  isDone: boolean;
  setIsDone: (done: boolean) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  isOpen,
  setOpen,
  email,
  setEmail,
  isDone,
  setIsDone,
}) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create a JavaScript object containing the form data
    const formData = {
      email,
      name,
      message,
    };

    try {
      // Send the form data to the API route
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success
        console.log('Form submitted successfully');
      } else {
        // Handle error
        console.error('Form submission failed');
      }

      setName('');
      setEmail('');
      setMessage('');
      setOpen(false);
    } catch (error) {
      setName('');
      setEmail('');
      setMessage('');
      console.error(error);
    }

    try {
      // Send the form data to the API route
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success
        console.log('Form submitted successfully');
      } else {
        // Handle error
        console.error('Form submission failed');
      }

      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setName('');
      setEmail('');
      setMessage('');

      console.error(error);
    }
  };

  return isDone === false ? (
    <div className="align-center flex flex-col items-center justify-center gap-4">
      <Title className="text-white">Contact us</Title>
      <Subtitle className={'text-center text-[#B0B0B0]'}>
        Fill out this simple form <br /> for feedback
      </Subtitle>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="mb-4 rounded-xl">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded-xl border-2 border-gray-200 border-gray-600/30 bg-black/0 px-3 py-2 text-white focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>
        <div className="mb-4 rounded-xl">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-xl border-2 border-gray-200 border-gray-600/30 bg-black/0 px-3 py-2 text-white focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>
        <div className="mb-4 rounded-xl">
          <input
            id="message"
            name="message"
            placeholder="Comment"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full rounded-xl border-2 border-gray-200 border-gray-600/30 bg-black/0 px-3 py-2 text-white focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>
        <div>
          <Button
            className="color-white w-full bg-gradient-to-b from-orange-400 to-amber-500 text-white hover:opacity-90"
            level={'primary'}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  ) : (
    <div className="flex flex-col gap-4 p-8">
      <Title className="text-white">Thank you for your feedback!</Title>
      <Subtitle className={'text-[#B0B0B0]'}>
        We will contact you shortly
      </Subtitle>
    </div>
  );
};

export default ContactForm;
