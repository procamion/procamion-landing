import Title from '../components/Title';

export default function Video() {
  return (
    <section className="bg-[#F5F5F5] py-14 md:py-20">
      <div className="container">
        <div className="flex flex-col items-center">
          <Title className="mb-5 md:mb-8">More about Procamion</Title>
          <video
            className="aspect-video w-full max-w-[960px] rounded-lg"
            controls={true}
          >
            <source src="/video/tutorial.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
