'use client';
import React, { use, useEffect } from 'react';
import Form from './Form';

interface PopupComponentProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void; // Add an onClose callback prop to handle closing the popup
  email: string;
  setEmail: (email: string) => void;
  isDone: boolean;
  setIsDone: (done: boolean) => void;
}

const PopupComponent: React.FC<PopupComponentProps> = ({
  isOpen,
  setOpen,
  email,
  setEmail,
  isDone,
  setIsDone,
}) => {
  useEffect(() => {}, [isOpen]);
  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center">
      {/* Background overlay with backdrop blur */}
      <div className="fixed left-0 top-0 h-full w-full bg-black opacity-80 backdrop-blur-xl"></div>

      {/* Popup container */}
      <div className="relative w-96 rounded-lg bg-[#252523] p-4 shadow-lg">
        {/* Close button */}
        <button
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            setOpen(false)
          }
          className="absolute right-2 top-2 rounded-full p-2 transition duration-300 hover:bg-gray-200 hover:text-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.84 11.7793L17.2958 7.32354C17.5887 7.03065 17.5887 6.55578 17.2958 6.26288C17.0029 5.96999 16.528 5.96999 16.2351 6.26288L11.7793 10.7187L7.32354 6.26288C7.03065 5.96999 6.55578 5.96999 6.26288 6.26288C5.96999 6.55578 5.96999 7.03065 6.26288 7.32354L10.7187 11.7793L6.26294 16.2351C5.97005 16.5279 5.97005 17.0028 6.26294 17.2957C6.55584 17.5886 7.03071 17.5886 7.3236 17.2957L11.7793 12.84L16.2351 17.2957C16.5279 17.5886 17.0028 17.5886 17.2957 17.2957C17.5886 17.0028 17.5886 16.5279 17.2957 16.2351L12.84 11.7793Z"
              fill="#757575"
            />
          </svg>
        </button>

        {/* Popup content */}
        <Form
          isOpen={isOpen}
          setOpen={setOpen}
          email={email}
          setEmail={setEmail}
          isDone={isDone}
          setIsDone={setIsDone}
        />
      </div>
    </div>
  );
};

export default PopupComponent;
