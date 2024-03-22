'use client';

import React, { useState } from 'react';
import Title from './Title';

type FAQItem = {
  question: string;
  answer: string;
  isOpen: boolean; // Добавляем состояние для открытия/закрытия
};

const initialFAQItems: FAQItem[] = [
  {
    question: 'What is Next.js?',
    answer: 'Next.js is a React framework for building web applications.',
    isOpen: false, // Начальное состояние: закрыто
  },
  {
    question: 'How do I create a new Next.js project?',
    answer:
      'You can create a new Next.js project using the "create-next-app" command.',
    isOpen: false, // Начальное состояние: закрыто
  },
  // Добавьте больше элементов FAQ по мере необходимости
];

const FaqComponent: React.FC = () => {
  const [faqItems, setFaqItems] = useState<FAQItem[]>(initialFAQItems);

  // Функция для обновления состояния открытия/закрытия элемента FAQ
  const toggleFAQItem = (index: number) => {
    const updatedFAQItems = [...faqItems];
    updatedFAQItems[index].isOpen = !updatedFAQItems[index].isOpen;
    setFaqItems(updatedFAQItems);
  };

  const icon = (isOpen: Boolean) => {
    if (!isOpen) {
      return (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 3.5L12 21.5M21 12.5L3 12.5"
            stroke="#757575"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      );
    } else {
      return (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="25" fill="#323232" />
          <g id="Main / Desktop">
            <rect
              width="1440"
              height="7614"
              transform="translate(-1156 -6049)"
              fill="white"
            />
            <g id="FAQ Block">
              <rect
                width="1440"
                height="1108"
                transform="translate(-1156 -303)"
                fill="white"
              />
              <g id="Frame 33951">
                <g id="Accordion Group">
                  <g id="Accordion Row">
                    <rect
                      x="-916"
                      y="-25"
                      width="960"
                      height="195"
                      rx="15"
                      fill="#F4F4F4"
                    />
                    <g id="Container">
                      <g id="Icons 24 / Minus">
                        <path
                          id="Vector"
                          d="M21 12.5L3 12.5"
                          stroke="#757575"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      );
    }
  };

  return (
    <div className="mx-auto  w-full max-w-[920px] p-4">
      <ul className="w-full">
        {faqItems.map((item, index) => (
          <li
            onClick={() => toggleFAQItem(index)}
            key={index}
            className="mb-4 w-full  cursor-pointer rounded-xl bg-zinc-100 p-4"
          >
            <div className="align-center flex flex-row items-center justify-between">
              <Title>{item.question}</Title>
              {icon(item.isOpen)}{' '}
            </div>
            {item.isOpen && <p className="mt-2">{item.answer}</p>}{' '}
            {/* Показываем ответ, если элемент открыт */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FaqComponent;
