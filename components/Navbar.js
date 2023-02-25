import Link from "next/link";
import Head from "next/head";

export default function Navbar() {
  return (
    <>
      <Head>
        <title>Randy Cullins</title>
        <meta property="og:title" content="Randy Cullins" key="desc" />
        <meta
          name="description"
          content="Hello, I’m Randy! I'm a frontend developer"
          key="desc"
        />
        <meta
          property="og:description"
          content="Hello, I’m Randy! I'm a frontend developer"
        />
        <meta property="og:image" content="/images/avatar.jpeg" />
      </Head>

      <div className="navbar-container">
        <div className="logo-wrapper">
          <Link href="/">RANDY CULLINS</Link>
        </div>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </>
  );
}
