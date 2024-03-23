import React, { FormEvent, useState } from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
import Button from './Button';

type Props = {
  closePopup: () => void;
};

const initialFormState = {
  name: '',
  email: '',
  message: '',
};

const ContactForm = ({ closePopup }: Props) => {
  const [formData, setFormData] = useState(initialFormState);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Send the form data to the API route
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // const responseMail = await fetch('/api/mail', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      if (response.ok) {
        // Handle success
        console.log('Form submitted successfully');
      } else {
        // Handle error
        console.log(response.status);
        console.error('Form submission failed');
      }

      setFormData(initialFormState);
      closePopup();
      setIsCompleted(true);
    } catch (error) {
      setFormData(initialFormState);
      console.error(error);
    }
  };

  return isCompleted ? (
    <div className="flex flex-col gap-4 p-8">
      <Title className="text-white">Thank you for your feedback!</Title>
      <Subtitle className={'text-[#B0B0B0]'}>
        We will contact you shortly
      </Subtitle>
    </div>
  ) : (
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
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            className="w-full rounded-xl border-2 border-gray-200 border-gray-600/30 bg-black/0 px-3 py-2 text-white focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>
        <div className="mb-4 rounded-xl">
          <input
            id="message"
            name="message"
            placeholder="Comment"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
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
  );
};

export default ContactForm;
