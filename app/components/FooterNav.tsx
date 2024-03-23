'use client';
import Link from 'next/link';

export default function FooterNav() {
  function scroll(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    const target = e.target as HTMLAnchorElement;

    const scrollTarget = document.querySelector(`#${target.dataset?.scroll}`);

    if (scrollTarget) {
      const scroll =
        scrollTarget.getBoundingClientRect().top + window.scrollY - 100;

      console.log(scroll);

      window.scrollTo({
        top: scroll,
        behavior: 'smooth',
      });
    }
  }

  return (
    <ul className="flex flex-col items-center gap-1 text-gray-500 md:items-start">
      <Link href="#hero" data-scroll="hero" onClick={(e) => scroll(e)}>
        Home
      </Link>
      <Link
        href="#advantages"
        data-scroll="advantages"
        onClick={(e) => scroll(e)}
      >
        Advantages
      </Link>
      <Link href="#contact" data-scroll="contact" onClick={(e) => scroll(e)}>
        Contact us
      </Link>
    </ul>
  );
}
