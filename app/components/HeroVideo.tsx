export default function HeroVideo() {
  return (
    <div className="pointer-events-none absolute left-0 top-0 h-full w-full">
      <video
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        className="h-full w-full object-cover"
      >
        <source src="/video/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-40" />
    </div>
  );
}
