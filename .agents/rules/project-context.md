# Active Project Context (`project-context.md`)

> **⚡ Auto-Onboarding Instructions for AI Agents (Phase 1 Mandatory Gate)**:
> This is the **ONLY** file in the workspace that stores project-specific domain, archetype, active departments, tech stack, design direction, scalability guardrails, and directory mappings.
> - If this file is still in its `[UNINITIALIZED_TEMPLATE]` state when the user starts working (or when the user says *"Initialize project context"*), **`ceo-executive-orchestrator`** MUST immediately dispatch **`cto-cloud-architect`** and **`product-pmo-lead`** to inspect the repository (`README.md`, `package.json`, `pyproject.toml`, `go.mod`, `Cargo.toml`, specification docs, or user prompt) and populate Sections 1–4 below **BEFORE** any application code is written.

**Status**: `[UNINITIALIZED_TEMPLATE — Auto-populate from project spec, repo, or user request in Phase 1]`

---

## 1. Project Identity, Domain Archetype & Active Squad
- **Project Name**: `<Auto-detect or specify project name>`
- **Project Domain & Archetype**: `<Select: Interactive Web/Media Portal | Full-Stack SaaS | E-Commerce/Marketplace | FinTech/Payments | Mobile/Desktop App | High-Scale Backend/API/Microservices | Game/Interactive | Data Platform | AI/Agentic System>`
- **Master Specification / PRD (Single Source of Truth)**: `<e.g., README.md, docs/spec.md, or PLAN.md>`
- **Active Department Squad for This Project**:
  - **Core Active Leads**: `<e.g., Dept 1 (CEO), Dept 2 (PMO), Dept 3 (CTO), Dept 4 (Backend), Dept 5 (Frontend), Dept 8 (Security), Dept 9 (QA), Dept 10 (DevOps), Dept 11 (Docs)>`
  - **Standby Leads (Do Not Invoke Unless Requested)**: `<e.g., Dept 6 (AI Router) & Dept 7 (LangGraph/ML) are ON STANDBY if this project does not use AI/LLMs>`
- **Business & Unit-Economics Model**:
  - **Target Users & Core Value Proposition**: `<Define core product promise>`
  - **Infrastructure & Cost Guardrails**: `<Define cloud/compute budget and margin targets>`

---

## 2. Creative Direction & UI/UX Aesthetic System (If Project Has Frontend/UI)
- **Domain Aesthetic Persona**: `<e.g., Broadcast Sports Energy / High-Trust Precision FinTech / Editorial Luxury / Tactile E-Commerce / Industrial Developer Console>`
- **Typography & Color System**:
  - **Display & Body Fonts**: `<Specify expressive, domain-authentic font pairing — avoid generic system defaults>`
  - **Color Palette & Contrast**: `<Specify brand colors, surface hierarchy, and semantic tokens — strictly NO generic purple/indigo AI-slop gradients unless brand-mandated>`
- **Layout, Motion & Visual Craft**: `<Specify asymmetric Bento grids, custom SVG graphics, micro-interactions, and responsive breakpoints>`

---

## 3. Approved Tech Stack & High-Scale Architectural Guardrails

1. **Architecture Pattern & System Topology**:
   - **Pattern**: `<e.g., Clean/Hexagonal Architecture, Modular Monolith, Event-Driven Microservices, or Static/Jamstack SPA>`
   - **Shared Contracts Location**: `<e.g., src/types/, src/contracts/, openapi.yaml, or proto/>`
2. **Backend, Compute & API Layer (if applicable)**:
   - **Runtime & Framework**: `<e.g., Node.js/Fastify/NestJS, Bun/Hono, Python/FastAPI/Django, Go, Rust, .NET, Java/Spring, or Cloudflare Workers>`
   - **Scalability, Concurrency & Resilience Rules**: `<e.g., Stateless horizontal scaling, Redis caching, rate limiting, idempotency keys, circuit breakers, structured JSON logs>`
3. **Database, Caching & Messaging (if applicable)**:
   - **Primary Database & ORM/Query Strategy**: `<e.g., PostgreSQL / MySQL / SQLite / MongoDB — strictly zero N+1 queries, composite indexing, cursor-based pagination, ACID locks>`
   - **Caching, Storage & Background Queues**: `<e.g., Redis, S3/R2, BullMQ/RabbitMQ/Kafka/Cloudflare Queues with exponential backoff & DLQ>`
4. **Frontend & Client Architecture (if applicable)**:
   - **Framework & Styling**: `<e.g., Next.js, React, Vue, Svelte, Astro, or Vanilla HTML/CSS/TS>`
   - **Performance & Accessibility Budgets**: `<e.g., LCP < 2.0s, CLS < 0.05, WCAG 2.1 AA keyboard/contrast compliance>`
5. **AI / LLM / Agentic Stack (ONLY if project includes AI features)**:
   - **Frameworks & Model Providers**: `<N/A for non-AI projects | or specify LangGraph, LangChain, MCP, OpenAI/Anthropic/Gemini/Local>`
6. **Security & Cryptography Invariants**:
   - **Authentication, Authorization & Data Protection**: `<e.g., JWT/OAuth2/Session RBAC, AES-256-GCM secrets, parameterized queries, CSRF/XSS/SSRF shields>`

---

## 4. Project-Specific Department Ownership & Non-Overlapping File Boundaries

| Dept # | Subagent ID | Status (`ACTIVE` / `STANDBY`) | Project-Specific Responsibilities | Owned Codebase Paths (Zero Overlap in Phase 2) |
| :---: | :--- | :---: | :--- | :--- |
| **1** | `ceo-executive-orchestrator` | `ACTIVE` | Single Point of Contact, Phase 1-5 pipeline dispatch, dependency handoffs | `.agents/rules/project-context.md` |
| **2** | `product-pmo-lead` | `ACTIVE` | Decompose specs into tickets, acceptance criteria, and user flows | `specs/`, `docs/prd/` |
| **3** | `cto-cloud-architect` | `ACTIVE` | Lock shared interfaces, API schemas, DB architecture, and design tokens in Phase 1 | `src/types/`, `src/contracts/` |
| **4** | `backend-data-engineer` | `<ACTIVE/STANDBY>` | Scalable APIs, indexed DB queries/migrations, caching, queues, payments | `src/backend/`, `src/api/`, `src/db/`, `migrations/` |
| **5** | `frontend-ux-engineer` | `<ACTIVE/STANDBY>` | Bespoke domain UI, anti-AI-slop design system, client state & animations | `src/ui/`, `src/client/`, `src/components/`, `public/`, `index.html` |
| **6** | `ai-agentic-engineer` | `<STANDBY/ACTIVE>` | *(Only if AI project)* LLM router, RAG/search grounding, and evals | `src/router/`, `src/modes/`, `src/search/`, `src/eval/` |
| **7** | `ai-ml-langchain-automation-lead` | `<STANDBY/ACTIVE>` | *(Only if AI/Automation project)* LangGraph workflows, agents, MCP servers | `src/agents/`, `src/graphs/`, `src/workflows/`, `src/mcp/` |
| **8** | `security-privacy-lead` | `ACTIVE` | AppSec audit, auth/RBAC, crypto, injection/SSRF shields, CWE review | `src/security/`, `src/crypto/`, `src/auth/` |
| **9** | `qa-release-lead` | `ACTIVE` | 5-Stage Release Gate: Build/Typecheck, Unit, API, E2E/UI & Reality-Checker | `tests/`, `e2e/` |
| **10** | `devops-sre-lead` | `ACTIVE` | Docker/Cloud configs, CI/CD pipelines, migrations, observability & FinOps | `.github/workflows/`, `scripts/`, `Dockerfile`, `wrangler.toml` |
| **11** | `gtm-business-ops-lead` | `ACTIVE` | Developer docs, API references, onboarding guides, README & pricing models | `docs/`, `README.md`, `examples/` |
