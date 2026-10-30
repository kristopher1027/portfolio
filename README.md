# Christopher Okoh — Portfolio

Live site: **[christopherokoh.com](https://christopher-okoh.vercel.app/)**

Personal portfolio of Christopher Okoh, a Nigeria-based full-stack and AI engineer. Built with React 18, TypeScript, Vite, Tailwind CSS, and Supabase.

## Featured Projects

- **SchoolPilot** — Multi-tenant school management system for Nigerian K-12 schools (Laravel 11, stancl/tenancy, 8-role RBAC, 6-stage approval workflow).
- **ResourceHub** — Multi-tenant inventory and resource-lending platform (Python, SQLite WAL, CI-tested security, audit logging).
- **DevFlow AI** — AI-powered engineering workspace with repository context (Go, React, PostgreSQL, RAG).
- **IdomaConnect AI** — Verified Idoma cultural knowledge base with conversational AI (React, TypeScript, RAG, Maps).
- **AIJE Community Shield** — Community-safety platform for Benue State (React, TypeScript, Maps).

## Features

- Editorial single-page layout with animated SVG hero and scroll-aware navigation.
- **AI-powered project matcher** — describes your needs, recommends the closest project via a Supabase Edge Function backed by an LLM (with prompt-injection guards, URL sanitization, and a circuit breaker).
- WhatsApp deep-link contact form.
- Accessible: skip link, `aria-live` regions, focus-visible styles, `prefers-reduced-motion` support.

## Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS
- **Backend**: Supabase (Postgres, Edge Functions)
- **AI**: Lovable AI Gateway (OpenAI-compatible)
- **Icons**: lucide-react

## Local Development

```bash
npm install
npm run dev