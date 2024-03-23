import Cta from './sections/Cta';
import Hero from './sections/Hero';
import Offer from './sections/Offer';
import StepByStep from './sections/StepByStep';
import Header from './components/Header';
import Benefits from './sections/Benefits';
import CtaWithModal from './sections/CtaWithModal';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <StepByStep />
      <Offer />
      <Cta />
      <Benefits />
      <CtaWithModal />
      <Footer />
    </main>
  );
}
