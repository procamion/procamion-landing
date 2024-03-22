import React from 'react';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Input from '../components/Input';
import Button from '../components/Button';

interface CtaProps {
  type: 'black' | 'yellow';
  isOpen: boolean;
  togglePopup: (isOpen: boolean) => void; // Add an onClose callback prop to handle closing the popup
  email: string;
  setEmail: (email: string) => void;
  isDone: boolean;
  setIsDone: (done: boolean) => void;
}

const Cta: React.FC<CtaProps> = ({
  type,
  togglePopup,
  email,
  setEmail,
  isDone,
  setIsDone,
}) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create a JavaScript object containing the form data
    const formData = {
      email,
    };

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
      setEmail('');
    } catch (error) {
      setEmail('');
      console.error(error);
    }
  };

  if (type === 'black') {
    return (
      <div className="bg-black">
        <div className="align-center m-auto flex max-w-[1250px] flex-col items-center justify-center gap-4 p-4 py-20">
          <Title className="text-white">
            Global mission: available
            <br /> sustainble transportation
          </Title>
          <Subtitle className="text-zinc-400">
            Doubts remain? just look at these numbers..
          </Subtitle>

          <form
            className="m-auto flex w-full max-w-[500px] flex-row gap-4"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full rounded-xl border-2 border-gray-200 border-gray-600/30 bg-black/0 px-3 py-2 text-white focus:border-blue-300 focus:outline-none focus:ring"
            />
            <Button
              type="submit"
              className="color-white w-full bg-gradient-to-b from-orange-400 to-amber-500 text-white hover:opacity-90"
              level={'primary'}
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-amber-300">
        <div className="align-center m-auto flex max-w-[686px] flex-col items-center justify-center gap-4 p-4 py-20">
          <div className="align-center flex items-center justify-center">
            <div className="absolute">
              <svg
                width="100%"
                height="92"
                viewBox="0 0 688 92"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 91C1 91 110.76 0.997489 344 1C577.24 1.00251 687 91 687 91"
                  stroke="url(#paint0_linear_228_994)"
                  strokeDasharray="15 15"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_228_994"
                    x1="344"
                    y1="1"
                    x2="344"
                    y2="69"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop />
                    <stop offset="1" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <Title>Procamion</Title>
          </div>

          <Subtitle className="text-center">
            Оn average, the response time to the cargo card takes several hours,
            so feel free to add your cargo and probably today you will find your
            carrier
          </Subtitle>

          <div className="mt-10 flex w-full flex-col gap-4 md:flex-row">
            <Button
              togglePopup={togglePopup}
              className="w-full border-2 border-black bg-black/0"
              level={'secondary'}
            >
              Contact us
            </Button>
          </div>
        </div>
      </div>
    );
  }
};

export default Cta;
