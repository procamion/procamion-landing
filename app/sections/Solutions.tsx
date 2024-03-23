import Slider from '../components/Slider';
import Title from '../components/Title';

export default function Solutions() {
  return (
    <section className="bg-[#F5F5F5] py-20">
      <div className="container">
        <div className="flex flex-col items-center">
          <Title className="text-primary mb-8 text-center md:mb-16">
            Innovative Freight Transport Solutions
          </Title>
          <Slider />
        </div>
      </div>
    </section>
  );
}
