import HeroVideo from '../components/HeroVideo';
import Subtitle from '../components/Subtitle';
import Title from '../components/Title';
import Freight from '../icons/Freight';
import HeroForm from './HeroForm';

const Heading = () => {
  return (
    <section
      id="hero"
      className="relative m-auto bg-black pb-20 pt-28 md:pb-[100px] md:pt-[200px]"
    >
      <HeroVideo />
      <div className="container relative">
        <div className="align-center relative mb-8 flex flex-col items-center justify-between md:mb-16 md:flex-row">
          <div className="flex max-w-[750px] flex-col gap-8 md:gap-14">
            <Title className="text-4xl leading-tight text-white md:text-7xl">
              <span className="text-primary">
                AI-driven{' '}
                <span className="relative inline-block">
                  freight
                  <Freight />
                </span>
                <br />
                platform
              </span>{' '}
              connecting <br />
              Europe and Africa
            </Title>
            <Subtitle className="max-w-[720px] text-white">
              Shippers and carriers can now easily find each other, connect, and
              coordinate the transport of&nbsp;fresh cargo between Europe and
              Africa
            </Subtitle>
          </div>
        </div>
        <HeroForm />
      </div>
    </section>
  );
};

export default Heading;
