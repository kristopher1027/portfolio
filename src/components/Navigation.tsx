import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["About", "#about"],
  ["Passion", "#focus"],
  ["Experience", "#experience"],
  ["Work", "#projects"],
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 24);
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <nav aria-label="Main navigation" className="nav-shell">
        <a className="brand-mark" href="#home" onClick={closeMenu} aria-label="Christopher Okoh, home">
          <span className="brand-monogram">CO</span>
          <span>CHRISTOPHER <b>OKOH</b></span>
        </a>

        <div className="desktop-nav">
          {links.map(([label, href]) => <a key={href} className="nav-link" href={href}>{label}</a>)}
          <a className="nav-link" href="#contact">Contact</a>
        </div>

        <a className="nav-contact" href="#contact">Let’s talk <ArrowUpRight size={14} aria-hidden="true" /></a>
        <button
          type="button"
          className="mobile-menu-trigger"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {open && (
        <div className="mobile-nav">
          {links.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}<ArrowUpRight size={15} aria-hidden="true" /></a>)}
          <a href="#contact" onClick={closeMenu}>Contact<ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
      )}
    </header>
  );
};

export default Navigation;
