import { useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, AtSign, BrainCircuit,
  Check, Code2, Github, Linkedin, MapPin, PanelsTopLeft, Radio,
  Send, Sparkles,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import ProjectMatcher from "@/components/ProjectMatcher";
import { useEffect, useState } from "react";

import { featuredProjects as projects } from "@/data/portfolio";

// 👇 This is the image line. 
// If the .webp file is still crashing, change it back to the .png.asset.json version.
import portrait from "@/assets/portfolio/christopher-okoh-portrait.webp"; 
const capabilities = [
  { icon: PanelsTopLeft, title: "Product thinking", text: "I shape clear, accessible interfaces around the people and problems a product is meant to serve." },
  { icon: Code2, title: "Full-stack development", text: "I build responsive frontends, dependable APIs and the data foundations that bring a product together." },
  { icon: BrainCircuit, title: "Applied AI", text: "I connect language models and retrieval systems to real workflows, with useful context and careful boundaries." },
];

const skillCategories = [
  { title: "Languages", skills: ["TypeScript", "Python", "Go", "PHP", "SQL"] },
  { title: "Backend & APIs", skills: ["Laravel 11", "FastAPI", "Node.js", "REST APIs", "Supabase"] },
  { title: "Databases", skills: ["PostgreSQL", "SQLite", "MySQL"] },
  { title: "AI & Data", skills: ["RAG", "OpenAI API", "LLM Integration", "Data Modeling"] },
  { title: "Tools & DevOps", skills: ["Docker", "Git & GitHub", "CI/CD", "System Design"] }
];

const contactEmail = "christopher.okoh@gmail.com";
const whatsappNumber = "2348020562772";

const milestones = [
  { 
    name: "Learn2Earn Fellow", 
    detail: "AI & Software Engineering", 
    status: "In progress",
    description: "Building AI-powered tools and full-stack applications through hands-on projects and collaboration."
  },
  { 
    name: "Nithub × DataCamp", 
    detail: "Data & AI scholarship", 
    status: "In progress",
    description: "Data science, machine learning, and AI fundamentals scholarship."
  },
  { 
    name: "3MTT Fellow", 
    detail: "Technology & Innovation", 
    status: "In progress",
    description: "National fellowship focused on technical excellence and innovation."
  },
  { 
    name: "01 Edu · Piscine", 
    detail: "Software development", 
    status: "Completed",
    description: "Intensive peer-to-peer software engineering bootcamp."
  },
];

const Index = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [visitorName, setVisitorName] = useState("");
  const [visitorNeed, setVisitorNeed] = useState("");

  // Inside the Index component:
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // Reveal only once
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const isMobile = typeof navigator !== "undefined" && /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
  const whatsappMessage = `Hi Christopher, my name is ${visitorName.trim()}.\n\n${visitorNeed.trim()}`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setEmailCopied(true);
    } catch {
      setEmailCopied(false);
    }
  };

  return <div className="portfolio-page">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <main id="main-content">
            <section className="hero-section" id="home" aria-labelledby="hero-title">
        <div className="hero-sky" aria-hidden="true">
          <div className="hero-stars" />
          <div className="hero-halo" />
          <div className="hero-mountain hero-mountain-back" />
          <div className="hero-mountain hero-mountain-mid" />
          <div className="hero-mountain hero-mountain-front" />
          <div className="hero-lake" />
          <div className="hero-reflection" />
          <svg className="hero-engraving" viewBox="0 0 1440 900" preserveAspectRatio="none">
            <path d="M0 585 170 530 270 557 405 442 536 555 680 490 805 572 966 431 1084 522 1220 408 1440 565" />
            <path d="M0 694c156-21 245 20 383 2s234-35 369-11 231 31 354 4 204-22 334-7" />
            <path d="M0 746c160-18 246 17 399 2s236-25 375-7 243 24 368 5 199-19 298-5" />
            <path d="M0 795c144-14 279 13 419 3s217-18 361-4 252 18 379 4 177-14 281-4" />
            <g><circle cx="169" cy="222" r="2" /><circle cx="492" cy="145" r="1.8" /><circle cx="841" cy="181" r="1.8" /><circle cx="1109" cy="235" r="2" /><circle cx="1290" cy="156" r="1.5" /></g>
          </svg>
        </div>
        <Navigation />

        <div className="hero-split container">
          <div className="hero-content-left">
            <p className="hero-kicker"><span /> Independent developer · Nigeria</p>
            <h1 id="hero-title">Hi, I’m <span>Christopher</span></h1>
            <p className="hero-role">Full-stack &amp; AI engineer</p>
            <p className="hero-intro">
              I build reliable backend systems and AI-powered tools. From database architecture to applied LLMs, I turn complex problems into dependable products.
            </p>
            <div className="hero-actions">
              <a className="hero-button" href="#projects">Explore selected work <ArrowRight size={16} aria-hidden="true" /></a>
              <a className="hero-button hero-button-secondary" href="#contact">Start a conversation <ArrowUpRight size={15} aria-hidden="true" /></a>
            </div>
          </div>
          
          <div className="hero-visual-right" aria-hidden="true">
            <div className="hero-code-block">
              <div className="code-header">
                <span /><span /><span />
                <p>architecture.ts</p>
              </div>
              <div className="code-body">
                <p><span className="c-keyword">const</span> engineer = &#123;</p>
                <p className="c-indent">focus: <span className="c-string">"Backend & AI"</span>,</p>
                <p className="c-indent">stack: [<span className="c-string">"Go"</span>, <span className="c-string">"Python"</span>, <span className="c-string">"React"</span>],</p>
                <p className="c-indent">mindset: <span className="c-string">"Solve real problems"</span>,</p>
                <p className="c-indent">status: <span className="c-string">"Open to work"</span></p>
                <p>&#125;;</p>
              </div>
            </div>
          </div>
        </div>

        <a href="#about" className="hero-scroll" aria-label="Scroll to about Christopher">
          <span>Scroll to explore</span><ArrowDown size={15} aria-hidden="true" />
        </a>
      </section>

      <section id="about" className="section-block about-section">
                <div className="section-container about-container reveal">
          <p className="section-kicker">01 / A LITTLE ABOUT ME</p>
          <h2 className="section-title">A curious mind,<br /><span>building for people.</span></h2>
          
          <div className="about-profile">
            <div className="about-portrait-wrap">
              <span className="portrait-index">CO / 01</span>
              <div className="about-portrait">
                <img src={portrait} alt="Christopher Okoh, full-stack and AI engineer" loading="lazy" />
              </div>
              <span className="portrait-caption">Nigeria · Available worldwide</span>
            </div>
            
            <div className="about-copy">
              <p className="about-lead">
                I’m Christopher, a Nigeria-based full-stack and AI engineer. I enjoy taking a complex idea and turning it into a useful, dependable product.
              </p>
              <p>
                My work moves between product interfaces, backend architecture, data and practical AI. I care about the details, but I start with the people who will use what I build.
              </p>
              <div className="about-meta">
                <span><MapPin size={15} aria-hidden="true" /> Based in Nigeria</span>
                <span><Sparkles size={15} aria-hidden="true" /> Open to remote opportunities</span>
              </div>
            </div>
          </div>
          
          <div className="about-statement reveal">
            <span>“</span>
            Software is at its best when it makes something meaningful possible.
            <i>— Christopher Okoh</i>
          </div>
        </div>
      </section>

      <section id="focus" className="section-block focus-section">
        <div className="section-container">
          <p className="section-kicker">02 / WHAT I DO</p>
          <h2 className="section-title">Make ideas <span>useful.</span></h2>
          <p className="section-lede">I work across the product stack to make digital tools feel clear, capable and grounded in everyday needs.</p>
          <div className="capability-grid">
            {capabilities.map(({ icon: Icon, title, text }, index) => (
              <article className="capability" key={title}>
                <span className="capability-index">0{index + 1}</span>
                <div className="capability-icon"><Icon size={24} strokeWidth={1.7} aria-hidden="true" /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section-block experience-section">
        <div className="section-container experience-container">
          <div className="experience-intro">
            <p className="section-kicker">03 / EXPERIENCE</p>
            <h2 className="section-title">Learning by<br /><span>doing the work.</span></h2>
            <p className="section-lede">My path so far is built around hands-on projects, collaboration and steady technical growth.</p>
          </div>
          <div className="experience-details">
            <h3 className="subsection-title"><Radio size={16} aria-hidden="true" /> Learning journey</h3>
            <div className="milestone-list">
            {milestones.map((item, index) => (
  <div className="milestone" key={item.name}>
    <span className="milestone-number">0{index + 1}</span>
    <div>
      <h4>{item.name}</h4>
      <p>{item.detail}</p>
      <p style={{ fontSize: '13px', marginTop: '4px', opacity: 0.8 }}>{item.description}</p>
    </div>
    <span className={`milestone-status ${item.status === "Completed" ? "is-complete" : ""}`}>
      {item.status === "Completed" && <Check size={12} aria-hidden="true" />}{item.status}
    </span>
  </div>
))}
            </div>
            <h3 className="subsection-title technology-title"><Code2 size={16} aria-hidden="true" /> Technologies I use</h3>
<div className="skill-grid">
  {skillCategories.map((category) => (
    <div key={category.title} className="skill-group">
      <h4>{category.title}</h4>
      <div className="technology-list">
        {category.skills.map(skill => <span key={skill}>{skill}</span>)}
      </div>
    </div>
  ))}
</div>
          </div>
        </div>
      </section>

      <section className="work-banner" aria-label="Continue exploring">
        <div className="section-container work-banner-inner">
          <div><p className="section-kicker">CURIOUS BY NATURE · BUILT WITH INTENTION</p><h2>There’s always more<br />to <span>make possible.</span></h2></div>
          <a href="#projects" className="outline-button">See selected work <ArrowDown size={15} aria-hidden="true" /></a>
        </div>
      </section>

      <section id="projects" className="section-block projects-section">
        <div className="section-container">
          <div className="section-heading-row">
            <div><p className="section-kicker">04 / SELECTED WORK</p><h2 className="section-title">What I’ve <span>built.</span></h2></div>
            <p className="section-lede">A few projects at the intersection of education, operations, developer tooling and community.</p>
          </div>

          <ProjectMatcher projects={projects} />

          {projects.map((project, index) => (
            <article className="case-study-card" key={project.slug} aria-labelledby={`${project.slug}-title`}>
              <div className="case-study-visual">
                {project.image ? (
                  <img src={project.image} alt={project.imageAlt} loading="lazy" />
                ) : (
                  <div className="devflow-art" role="img" aria-label="Illustrated DevFlow AI engineering workspace preview">
                    <div className="devflow-toolbar"><span /><span /><span /><b>DEVFLOW / WORKSPACE</b></div>
                    <div className="devflow-panel"><aside><i>REPOSITORY</i><span>▤ &nbsp; api.go</span><span>▤ &nbsp; agents.go</span><span>▤ &nbsp; memory.go</span></aside><div className="devflow-code"><span><em>func</em> BuildWithContext(repo Repository) &#123;</span><span>&nbsp; assistant := NewAssistant(repo)</span><span>&nbsp; answer, err := assistant.Ask(prompt)</span><span>&nbsp; <em>return</em> answer, err</span><span>&#125;</span><strong>REPOSITORY CONTEXT</strong></div></div>
                  </div>
                )}
                <span>CASE STUDY / {String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="case-study-content">
                <p className="project-category">{project.category}</p>
                <h3 id={`${project.slug}-title`}>{project.title}</h3>
                <p className="case-study-intro">{project.caseStudy.intro}</p>
                <div className="case-study-details">
                  <section><h4>The challenge</h4><p>{project.caseStudy.challenge}</p></section>
                  <section><h4>The approach</h4><p>{project.caseStudy.approach}</p></section>
                  <section><h4>Engineering focus</h4><p>{project.caseStudy.engineeringFocus}</p></section>
                </div>
                <div className="project-tags" aria-label={`${project.title} technologies`}>
                  {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="project-links case-study-links">
                  {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live preview in a new tab`}>Live preview <ArrowUpRight size={14} aria-hidden="true" /></a>}
                  <a href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} ${project.caseStudy.linkLabel.toLowerCase()} in a new tab`}>{project.caseStudy.linkLabel} <ArrowUpRight size={14} aria-hidden="true" /></a>
                </div>
              </div>
            </article>
          ))}
          <a href="https://github.com/kristopher1027" className="all-work-link" target="_blank" rel="noopener noreferrer">More experiments on GitHub <ArrowRight size={15} aria-hidden="true" /></a>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="section-container contact-container">
          <p className="section-kicker">05 / GET IN TOUCH</p>
          <h2>Have an idea?<br /><span>Let’s build it.</span></h2>
          <p className="contact-copy">Tell me a little about yourself and what you need. I’ll meet you on WhatsApp and we can talk it through.</p>
          <form action={whatsappUrl} className="contact-form" method="get" target={isMobile ? "_self" : "_blank"}>
            <label className="contact-field">
              <span>Your name</span>
        <input type="text" autoComplete="name" maxLength={80} onChange={(event) => setVisitorName(event.target.value)} placeholder="How should I address you?" required value={visitorName} />
            </label>
            <label className="contact-field">
              <span>How can I help?</span>
            <textarea maxLength={1200} onChange={(event) => setVisitorNeed(event.target.value)} placeholder="A project, an opportunity, or a problem you’re working on..." required rows={4} value={visitorNeed} />
              </label>
            <button className="contact-button" disabled={!whatsappNumber} type="submit">Start WhatsApp chat <Send size={15} aria-hidden="true" /></button>
          </form>
          <p className="contact-email-fallback">Or email me at <a href={`mailto:${contactEmail}`}>{contactEmail}</a></p>
          <button className="contact-copy-email" type="button" onClick={copyEmail}>{emailCopied ? "Email copied" : "Copy email address"}</button>
          <div className="contact-socials" aria-label="Social links">
            <a href={`mailto:${contactEmail}`} aria-label="Email"><AtSign size={17} /></a>
<a href="https://github.com/kristopher1027" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={17} /></a>
<a href="https://www.linkedin.com/in/christopher-okoh-391933430/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
          </div>
        </div>
      </section>
    </main>

    <footer className="site-footer">
      <div className="section-container footer-inner">
        <a className="footer-brand" href="#home"><span>CO</span> CHRISTOPHER OKOH</a>
        <span>© {new Date().getFullYear()} Christopher Okoh · Built with intention.</span>
        <a href="#home">Back to top <ArrowUpRight size={14} aria-hidden="true" /></a>
      </div>
    </footer>
  </div>;
};

export default Index;