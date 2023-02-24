import Link from "next/link";

export default function Navbar() {
  return (
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
  );
}
