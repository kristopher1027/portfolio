// src/data/portfolio.ts
// ⚠️ SINGLE SOURCE OF TRUTH for all portfolio projects.

import idomaPreview from "@/assets/portfolio/idomaconnect-preview.jpg.asset.json";
import aijePreview from "@/assets/portfolio/aije-community-shield-preview.jpg.asset.json";
import schoolPilotPreview from "@/assets/portfolio/schoolpilot-preview.jpg.asset.json";
import resourceHubPreview from "@/assets/portfolio/resourcehub-preview.jpg.asset.json";

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
    description: "A multi-tenant school management platform for Nigerian K-12 schools, with isolated per-school databases, 8-role RBAC and a 6-stage result-approval workflow.",
    stack: ["Laravel 11", "PHP 8.4", "stancl/tenancy", "MySQL", "Tailwind"],
    href: "https://github.com/kristopher1027/SchoolPilot",
    kind: "image",
    year: "2025",
    status: "in-progress",
    isFeatured: true,
    caseStudy: {
      intro: "A modern school management system built specifically for the Nigerian education system, handling academic, administrative and financial workflows from a single platform.",
      challenge: "Nigerian K-12 schools juggle results, approvals and staff roles across spreadsheets, WhatsApp and paper. Sensitive data also needs strict per-school isolation.",
      approach: "Database-per-tenant architecture (stancl/tenancy) where every school gets an isolated DB and slug-based subdomain/path. A 6-stage approval chain (Subject Teacher → Class Teacher → HOD → Dean → Principal → Publish) enforces result integrity.",
      engineeringFocus: "Automated tenant provisioning via artisan, configurable CA/Exam weighting (10/10/10/70) with WAEC grading, a separate Nursery observation model, and role-scoped access across 8 distinct user roles.",
      linkLabel: "Source code",
    },
  },
  {
    number: "02",
    slug: "resourcehub",
    title: "ResourceHub",
    category: "Full-stack · Inventory & lending",
    description: "A multi-tenant inventory and resource-lending platform for organizations, with SQLite WAL concurrency, audit logging, QR asset labels, CI-tested security and ZIP backups.",
    stack: ["Python 3.10+", "SQLite (WAL)", "stdlib HTTP", "SMTP", "Turnstile", "unittest"],
    href: "https://github.com/kristopher1027/management-system",
    kind: "image",
    year: "2025",
    status: "in-progress",
    isFeatured: true,
    caseStudy: {
      intro: "One workspace for a company's resources, inventory, staff and lending operations — replacing scattered spreadsheets with a single accountable system.",
      challenge: "Organizations lose track of equipment, miss returns and cannot reliably answer who has what right now. Existing tools are either heavyweight ERPs or fragile spreadsheets.",
      approach: "A lean Python web application with company-isolated workspaces, owner/staff roles, and end-to-end lending flows (borrow → due date → overdue → return) backed by audit logs and ZIP exports.",
      engineeringFocus: "SQLite in WAL mode for concurrent readers, HTTP-layer security tests (test_security.py), role-checked owner-only actions, Cloudflare Turnstile on registration, SMTP verification, and CI running the full unittest suite on feature branches.",
      linkLabel: "Source code",
    },
  },
  {
    number: "03",
    slug: "devflow-ai",
    title: "DevFlow AI",
    category: "AI · Developer tools",
    description: "An AI-powered engineering workspace that brings repository context and practical code intelligence closer to the developer workflow.",
    stack: ["Go", "React", "PostgreSQL", "RAG"],
    href: "https://github.com/kristopher1027/devflow-ai",
    kind: "devflow",
    year: "2025",
    status: "in-progress",
    isFeatured: true,
    caseStudy: {
      intro: "An AI engineering workspace for repository context and practical code intelligence.",
      challenge: "Bring repository understanding closer to everyday code assistance.",
      approach: "Place repository context and practical code intelligence near the developer workflow in an AI-powered engineering workspace.",
      engineeringFocus: "Combine Go, React, PostgreSQL and retrieval-augmented generation (RAG) for developer-focused AI tooling.",
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
    image: idomaPreview.url,
    imageAlt: "IdomaConnect cultural knowledge and heritage platform",
    kind: "image",
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
    image: aijePreview.url,
    imageAlt: "AIJE Community Shield emergency and community safety platform",
    kind: "image",
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