import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="hero-section-container">
      <div className="image-wrapper">
        <img src="/images/avatar.jpeg" alt="Me" />
      </div>

      <div className="bio-wrapper">
        <h1>Randy Cullins</h1>

        <h2>I'm A Frontend Developer</h2>

        <div className="links">
          <Link href="/images/Resume.pdf" target="_blank">
            Resume
          </Link>

          <Link href="/contact">Contact me</Link>
        </div>
      </div>
    </div>
  );
}
