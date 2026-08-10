

import Link from "next/link";

export default function Navbar(){

return(
    <nav className="navbar">

      <div className="logo">
        <Link href="/" aria-label="Cash Loans Experts Home">
          <img
  src="/images/clex_logo.png" 
  alt="logo"
  style={{ height: "40px", width: "auto" }}
/>
        </Link>
      </div>

      <div className="nav-links">

        <Link href="/">Home</Link>

        <Link href="/faq">
          FAQ
        </Link>

        <Link href="/partners">
          Partners
        </Link>

        <Link href="/contact">
          Contact
        </Link>

      </div>

      <a
        href="tel:+18888121076"
        className="call-button"
      >
        Call Us Now
      </a>

    </nav>

  );

  
}