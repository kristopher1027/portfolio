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
  screenshots?: string[];
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
    description: "A school administration platform for Nigerian K–12 schools, designed around separate school workspaces, role-based access and a structured academic result-approval process.",
    stack: ["Laravel 11", "PHP 8.4", "stancl/tenancy", "MySQL", "Tailwind"],
    href: "https://github.com/kristopher1027/SchoolPilot",
    image: schoolPilotPreview,
    screenshots: [schoolPilotPreview],
    imageAlt: "SchoolPilot school management dashboard",
    
    year: "2025",
    status: "in-progress",
    isFeatured: true,
    caseStudy: {
      intro: "SchoolPilot is a school-management platform for Nigerian Nursery, Primary and Secondary schools. It brings academic setup, student and staff records, assessment and result approvals into a coordinated workflow.",
      challenge: "Schools need to coordinate student records, teacher responsibilities and result approvals without losing control of sensitive information. A shared platform must keep each school's records isolated while supporting a clear chain of academic accountability.",
      approach: "Use Laravel and stancl/tenancy to give each school a separately provisioned data store and a school-specific access route. Academic results follow a defined approval path from Subject Teacher through Class Teacher, HOD, Dean and Principal before publication.",
      engineeringFocus: "The implementation focuses on automated school provisioning, configurable continuous-assessment and exam weighting, WAEC-style grading, a separate Nursery observation model, and permissions scoped across eight roles. These decisions keep tenant isolation and academic approval rules central to the system design.",
      linkLabel: "Source code",
    },
  },
  {
    number: "02",
    slug: "resourcehub",
    title: "ResourceHub",
    category: "Full-stack · Inventory & lending",
    description: "An inventory and resource-operations workspace for organizations to manage stock, staff, equipment loans, returns and asset history, supported by role-based access, QR asset labels and data backups.",
    stack: ["Python 3.10+", "SQLite (WAL)", "stdlib HTTP", "SMTP", "Turnstile", "unittest"],
    href: "https://github.com/kristopher1027/management-system",
    image: resourceHubPreview,
    screenshots: [resourceHubPreview],
    imageAlt: "ResourceHub inventory dashboard",
    
    year: "2025",
    status: "in-progress",
    isFeatured: true,
    caseStudy: {
      intro: "ResourceHub brings inventory, staff, lending, returns and operational records into one company workspace, helping teams understand what they own, what is available and who is responsible for each item.",
      challenge: "When inventory lists, staff details and lending records live in separate spreadsheets or paper logs, it becomes difficult to confirm available stock, identify who has borrowed an item, follow overdue loans and review an asset's history.",
      approach: "A Python web application with separate company data spaces, owner and staff roles, inventory and lending workflows, configurable loan periods, sales records and operational reporting. Owner-controlled actions and audit history help make everyday resource activity accountable.",
      engineeringFocus: "SQLite persistence with WAL mode, role-checked owner operations, session and request protections, registration controls, SMTP email verification, automated tests and CI. Asset passports add QR labels and recorded asset history, while downloadable backups support recovery.",
      linkLabel: "Source code",
    },
  },
  {
    number: "03",
    slug: "devflow-ai",
    title: "DevFlow AI",
    category: "AI · Developer tools",
    description: "An AI-assisted engineering workspace that connects GitHub repositories, indexes source and documentation, and answers codebase questions with references to the relevant files and line ranges.",
    stack: ["Go", "React", "PostgreSQL", "RAG"],
    href: "https://github.com/kristopher1027/devflow-ai",
    
    year: "2025",
    status: "in-progress",
    isFeatured: true,
    caseStudy: {
      intro: "DevFlow AI connects a GitHub repository to an AI-assisted workspace, grounding codebase questions in a synchronized snapshot of the project's source files and documentation.",
      challenge: "General-purpose AI assistance can lack the project-specific context needed to give useful guidance about an existing codebase. Developers need a way to bring repository information into the engineering workflow.",
      approach: "A Go API and React interface manage workspaces, GitHub connections, repository imports and sync jobs. Retrieved code and documentation are packaged as bounded context for AI answers and one-click repository explanations.",
      engineeringFocus: "The engineering work includes GitHub App authentication, background import and sync jobs, PostgreSQL persistence, keyword-based retrieval, provider-independent AI orchestration and source references tied to the synchronized commit. Repository content is treated as untrusted input.",
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
    screenshots: [idomaPreview],
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
    description: "A community emergency-coordination platform for reporting, verifying, dispatching and resolving incidents, designed for areas with poor or intermittent connectivity.",
    stack: ["React", "TypeScript", "Tailwind", "Maps"],
    href: "https://github.com/Stonez-Digital/AIJE-Development-Roadmap",
    demo: "https://aije-development-roadmap.pages.dev/",
    image: aijePreview,
    screenshots: [aijePreview],
    imageAlt: "AIJE Community Shield community safety platform preview",
    
    year: "2025",
    status: "in-progress",
    isFeatured: true,
    caseStudy: {
      intro: "AIJE Community Shield is a community emergency-coordination platform connecting residents, verified operators and response teams through an accountable incident workflow.",
      challenge: "Communities need a dependable way to report emergencies and coordinate a response, including when internet connectivity is poor or intermittent. Reports also need human verification and clear ownership as they move between response teams.",
      approach: "The documented workflow moves an incident from resident or authorized-integration reporting to operator verification, dispatch to an accountable team, team acknowledgement, active response and resolution. Offline-aware reporting and synchronization support use in low-connectivity environments.",
      engineeringFocus: "The project combines a React and TypeScript frontend with Supabase, PostgreSQL and Edge Functions. Its design emphasizes role-based access, organization-scoped audit history and AI-assisted detection or threat assessment as decision support—not a replacement for human verification or response ownership.",
      linkLabel: "View roadmap",
    },
  },
];

export const featuredProjects = projects.filter((p) => p.isFeatured !== false);