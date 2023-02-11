import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="hero-section-container">
      <div className="bio-wrapper">
        <h1>Hello! I'm Randy Cullins</h1>

        <h3>Frontend Developer</h3>

        <p>
          Recent graduate of Nucamp Full Stack Web and Mobile Development
          Program. I graduated with honors in the top 10% of my class for the
          Front End Development portion of my certification.
        </p>

        <div className="links">
          <Link href="/images/Resume.pdf" target="_blank">
            Resume
          </Link>

          <Link href="/contact">Contact me</Link>
        </div>
      </div>
      <div className="image-wrapper">
        <img src="/images/avatar.jpeg" alt="Me" />
      </div>
    </div>
  );
}
