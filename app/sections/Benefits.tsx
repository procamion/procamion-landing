import Title from '../components/Title';
import CircularProgressBar from '../components/CircleProgressBar/CircleProgressBar';

const Benefits = () => {
  return (
    <section className="py-16 md:py-28">
      <div className="container">
        <div className="m-auto flex flex-col items-center">
          <Title className="mb-7">Up to</Title>
          <div className="mb-8 flex items-center justify-center">
            <CircularProgressBar />
          </div>
          <div className="text-gray mb-2 text-center text-base font-medium uppercase md:text-xl">
            environmental care
          </div>
          <Title className="max-w-[950px] text-center font-bold">
            <span className="font-medium">reduction of CO2 emissions</span> into
            the atmosphere
          </Title>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
