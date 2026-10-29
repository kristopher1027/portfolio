import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["About", "#about"],
  ["Focus", "#focus"],
  ["Experience", "#experience"],
  ["Work", "#projects"],
];

const sectionIds = ["home", "about", "focus", "experience", "projects", "contact"];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateScrollState = () => {
      setScrolled(window.scrollY > 24);
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
      document.documentElement.style.setProperty("--scroll-progress", String(progress));
    };
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: "-22% 0px -62% 0px", threshold: [0, 0.1, 0.25, 0.5] });
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuTriggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <nav aria-label="Main navigation" className="nav-shell">
        <a className="brand-mark" href="#home" onClick={closeMenu} aria-label="Christopher Okoh, home">
          <span className="brand-monogram">CO</span>
          <span>CHRISTOPHER <b>OKOH</b></span>
        </a>

        <div className="desktop-nav">
          {links.map(([label, href]) => (
            <a key={href} className="nav-link" href={href} aria-current={activeSection === href.slice(1) ? "location" : undefined}>{label}</a>
          ))}
          <a className="nav-link" href="#contact" aria-current={activeSection === "contact" ? "location" : undefined}>Contact</a>
        </div>

        <a className="nav-contact" href="#contact">Let’s talk <ArrowUpRight size={14} aria-hidden="true" /></a>
        <button
          type="button"
          ref={menuTriggerRef}
          className="mobile-menu-trigger"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>
      </nav>
      <span className="scroll-progress" aria-hidden="true" />

      <nav
        id="mobile-navigation"
        aria-label="Mobile main navigation"
        aria-hidden={!open}
        className={`mobile-nav ${open ? "is-open" : ""}`}
      >
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={closeMenu} aria-current={activeSection === href.slice(1) ? "location" : undefined}>{label}<ArrowUpRight size={15} aria-hidden="true" /></a>
        ))}
        <a href="#contact" onClick={closeMenu} aria-current={activeSection === "contact" ? "location" : undefined}>Contact<ArrowUpRight size={15} aria-hidden="true" /></a>
      </nav>
    </header>
  );
};

export default Navigation;
