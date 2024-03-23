'use client';
import Benefits from './sections/Benefits';
import Cta from './sections/Cta';
import Faq from './sections/Faq';
import Hero from './sections/Hero';
import Offer from './sections/Offer';
import StepByStep from './sections/StepByStep';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isDone, setIsDone] = useState(false);

  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <StepByStep />
      <Offer />
      <Cta />
      <Benefits />
      <Faq />
      <Footer />
    </main>
  );
}
