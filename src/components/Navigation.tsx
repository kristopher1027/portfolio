import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";

const links = [
  ["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"],
  ["Approach", "#approach"], ["GitHub", "#github"], ["Contact", "#contact"],
];
const sectionIds = ["home", "about", "skills", "projects", "approach", "github", "contact"];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const menuTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let saved: string | null = null;
    try { saved = localStorage.getItem("portfolio-theme"); } catch { /* Storage can be unavailable. */ }
    const initial = saved === "light" || saved === "dark" ? saved :
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("portfolio-theme", next); } catch { /* Keep the in-memory preference. */ }
  };

  useEffect(() => {
    const updateScrollState = () => {
      setScrolled(window.scrollY > 24);
      const height = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty("--scroll-progress", String(height > 0 ? window.scrollY / height : 0));
    };
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    const sections = sectionIds.map(id => document.getElementById(id)).filter((item): item is HTMLElement => Boolean(item));
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio-a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: "-22% 0px -62% 0px", threshold: [0, .1, .25, .5] });
    sections.forEach(section => observer.observe(section));
    return () => { window.removeEventListener("scroll", updateScrollState); observer.disconnect(); };
  }, []);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); menuTriggerRef.current?.focus(); } };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  const closeMenu = () => setOpen(false);
  const navLinks = links.map(([label, href]) => <a key={href} className="nav-link" href={href} onClick={closeMenu} aria-current={activeSection === href.slice(1) ? "location" : undefined}>{label}</a>);

  return <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
    <nav aria-label="Main navigation" className="nav-shell">
      <a className="brand-mark" href="#home" onClick={closeMenu} aria-label="Christopher Okoh, home"><span className="brand-monogram">CO</span><span>CHRISTOPHER <b>OKOH</b></span></a>
      <div className="desktop-nav">{navLinks}</div>
      <a className="nav-contact" href="#contact">Let’s talk <ArrowUpRight size={14} aria-hidden="true" /></a>
      <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`} title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>{theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}</button>
      <button type="button" ref={menuTriggerRef} className="mobile-menu-trigger" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X size={21} /> : <Menu size={21} />}</button>
    </nav>
    <span className="scroll-progress" aria-hidden="true" />
    <nav id="mobile-navigation" aria-label="Mobile main navigation" aria-hidden={!open} className={`mobile-nav ${open ? "is-open" : ""}`}>
      {navLinks}
    </nav>
  </header>;
};
export default Navigation;