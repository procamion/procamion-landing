import HeroVideo from '../components/HeroVideo';
import Subtitle from '../components/Subtitle';
import Title from '../components/Title';
import HeroForm from './HeroForm';
import HeadingForm from './HeroForm';

const Heading = () => {
  return (
    <section className="relative m-auto my-20 bg-black pb-[100px] pt-[200px]">
      <HeroVideo />
      <div className="container relative">
        <div className="align-center relative mb-16 flex flex-col items-center justify-between md:flex-row">
          <div className="flex max-w-[750px] flex-col gap-14">
            <Title className="text-4xl leading-relaxed text-white md:text-7xl">
              <span className="text-primary">
                AI-driven <span className="relative inline-block">freight</span>{' '}
                platform
              </span>{' '}
              connecting Europe and Africa
            </Title>
            <Subtitle className="max-w-[720px] text-white">
              Shippers and carriers can now easily find each other, connect, and
              coordinate the transport of&nbsp;fresh cargo between Europe and
              Africa.
            </Subtitle>
          </div>
        </div>
        <HeroForm />
      </div>
    </section>
  );
};

export default Heading;
