// src/data/portfolio.ts
// ⚠️ SINGLE SOURCE OF TRUTH for all portfolio projects.

import schoolPilotPreview from "@/assets/portfolio/schoolpilot-preview.webp";
import resourceHubPreview from "@/assets/portfolio/resourcehub-preview.webp";
import aijePreview from "@/assets/portfolio/aije-community-shield-preview.webp";
import idomaPreview from "@/assets/portfolio/idomaconnect-preview.webp";
export type PortfolioProject = {
  number: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  href: string;
  demo?: string;
  image?: string;
  imageAlt?: string;
  kind?: "devflow" | "image";
  year?: string;
  status?: "shipped" | "in-progress" | "archived";
  isFeatured?: boolean;
  caseStudy: {
    intro: string;
    challenge: string;
    approach: string;
    engineeringFocus: string;
    linkLabel: string;
  };
};

export const projects: PortfolioProject[] = [
  {
    number: "01",
    slug: "schoolpilot",
    title: "SchoolPilot",
    category: "EdTech · Multi-tenant SaaS",
    description: "A multi-tenant school management platform for Nigerian K–12 schools, combining isolated school databases, role-based access for eight user roles and a six-stage result-approval process.",
    stack: ["Laravel 11", "PHP 8.4", "stancl/tenancy", "MySQL", "Tailwind"],
    href: "https://github.com/kristopher1027/SchoolPilot",
    image: schoolPilotPreview,
    imageAlt: "SchoolPilot school management dashboard",
    
    year: "2025",
    status: "in-progress",
    isFeatured: true,
    caseStudy: {
      intro: "SchoolPilot is designed for Nigerian Nursery, Primary and Secondary schools, bringing academic administration, staff responsibilities and result processing into one multi-tenant platform.",
      challenge: "Schools need to coordinate student records, teacher responsibilities and result approvals without losing control of sensitive information. A shared platform must keep each school's records isolated while supporting a clear chain of academic accountability.",
      approach: "Use database-per-tenant architecture with stancl/tenancy so each school has its own database, alongside slug-based school access. Results move through a six-stage workflow: Subject Teacher, Class Teacher, HOD, Dean, Principal and publication.",
      engineeringFocus: "The implementation focuses on automated school provisioning, configurable continuous-assessment and exam weighting, WAEC-style grading, a separate Nursery observation model, and permissions scoped across eight roles. These decisions keep tenant isolation and academic approval rules central to the system design.",
      linkLabel: "Source code",
    },
  },
  {
    number: "02",
    slug: "resourcehub",
    title: "ResourceHub",
    category: "Full-stack · Inventory & lending",
    description: "A company-focused inventory and lending system for tracking stock, staff, equipment loans, returns and asset history, with audit records, QR asset labels and downloadable backups.",
    stack: ["Python 3.10+", "SQLite (WAL)", "stdlib HTTP", "SMTP", "Turnstile", "unittest"],
    href: "https://github.com/kristopher1027/management-system",
    image: resourceHubPreview,
    imageAlt: "ResourceHub inventory dashboard",
    
    year: "2025",
    status: "in-progress",
    isFeatured: true,
    caseStudy: {
      intro: "ResourceHub brings a company's inventory, staff, equipment loans, returns and operational records into one web workspace, helping teams keep a clearer record of what they own and who is responsible for it.",
      challenge: "When inventory lists, staff details and lending records live in separate spreadsheets or paper logs, it becomes difficult to confirm available stock, identify who has borrowed an item, follow overdue loans and review an asset's history.",
      approach: "A Python web application with separate company workspaces, owner and staff access, inventory records, lending and return workflows, configurable loan periods, and reporting. Owner-authorized actions and audit records support accountability across day-to-day operations.",
      engineeringFocus: "SQLite storage with WAL mode, role-checked owner-only operations, session and request protections, registration controls, SMTP email verification, automated tests and CI. The asset-passport workflow adds QR labels and a history of recorded asset changes; downloadable ZIP backups support data recovery.",
      linkLabel: "Source code",
    },
  },
  {
    number: "03",
    slug: "devflow-ai",
    title: "DevFlow AI",
    category: "AI · Developer tools",
    description: "An AI-assisted developer workspace built to make repository context more useful during everyday engineering work, combining a Go API, React interface, PostgreSQL and retrieval-augmented generation.",
    stack: ["Go", "React", "PostgreSQL", "RAG"],
    href: "https://github.com/kristopher1027/devflow-ai",
    
    year: "2025",
    status: "in-progress",
    isFeatured: true,
    caseStudy: {
      intro: "DevFlow AI explores how an engineering workspace can use repository context to make AI assistance more relevant to the code a developer is working on.",
      challenge: "General-purpose AI assistance can lack the project-specific context needed to give useful guidance about an existing codebase. Developers need a way to bring repository information into the engineering workflow.",
      approach: "Build a full-stack workspace with a Go backend, React frontend and PostgreSQL data layer, with retrieval-augmented generation used to organize and retrieve relevant engineering context.",
      engineeringFocus: "Focus on backend API design, persistent data, repository-context packaging and relevance-focused retrieval. The goal is to ground AI assistance in project-specific information rather than generic prompts alone.",
      linkLabel: "Source code",
    },
  },
  {
    number: "04",
    slug: "idomaconnect",
    title: "IdomaConnect AI",
    category: "AI · Culture & heritage",
    description: "A home for Idoma knowledge: a verified cultural knowledge base, conversational AI and an interactive map of heritage sites.",
    stack: ["React", "TypeScript", "RAG", "Maps"],
    href: "https://github.com/kristopher1027/the-build-compass",
    demo: "https://the-build-compass.lovable.app",
    image: idomaPreview,
    imageAlt: "IdomaConnect AI cultural knowledge and heritage platform preview",
    
    year: "2025",
    status: "in-progress",
    isFeatured: true,
    caseStudy: {
      intro: "A digital space for Idoma cultural knowledge, conversational discovery and heritage locations.",
      challenge: "Make Idoma cultural information easier to discover and explore online.",
      approach: "Bring a verified knowledge base together with conversational AI and an interactive map of heritage sites.",
      engineeringFocus: "Connect cultural content, retrieval-augmented generation and place-based discovery in one React and TypeScript experience.",
      linkLabel: "Source code",
    },
  },
  {
    number: "05",
    slug: "aije-community-shield",
    title: "AIJE Community Shield",
    category: "Community · Public safety",
    description: "An emergency and community-safety platform for Benue State, with incident reporting, mapped resources and offline-aware tools.",
    stack: ["React", "TypeScript", "Tailwind", "Maps"],
    href: "https://github.com/Stonez-Digital/AIJE-Development-Roadmap",
    demo: "https://aije-development-roadmap.pages.dev/",
    image: aijePreview,
    imageAlt: "AIJE Community Shield community safety platform preview",
    
    year: "2025",
    status: "in-progress",
    isFeatured: true,
    caseStudy: {
      intro: "A community-safety platform for emergency reporting and mapped resources in Benue State.",
      challenge: "Support emergency and community-safety needs in Benue State with a way to report incidents and find mapped resources.",
      approach: "Bring incident reporting, mapped resources and offline-aware tools together in one community-safety platform.",
      engineeringFocus: "Use React, TypeScript, Tailwind and maps to present safety information while accounting for limited connectivity.",
      linkLabel: "View roadmap",
    },
  },
];

export const featuredProjects = projects.filter((p) => p.isFeatured !== false);