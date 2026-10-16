# Active Project Context (`project-context.md`)

> ** Auto-Onboarding Instructions for AI Agents**:
> This is the **ONLY** file in the workspace that stores project-specific architecture, tech stack, guardrails, and directory mappings.
> - If this file is still in its `[UNINITIALIZED_TEMPLATE]` state when the user starts working (or when the user says *"Initialize project context"*), **`ceo-executive-orchestrator`** and **`cto-cloud-architect`** must immediately inspect the repository (`README.md`, `package.json`, `pyproject.toml`, specification docs, and `src/` layout) and populate Sections 1–3 below automatically.

**Status**: `[UNINITIALIZED_TEMPLATE — Auto-populate from project spec or README on first task]`

---

## 1. Project Identity & Master Specification
- **Project Name**: `<Auto-detect or specify project name>`
- **Master Specification / PRD (Single Source of Truth)**: `<e.g., README.md, docs/spec.md, or PLAN.md>`
- **Business & Unit-Economics Model**:
  - **Target Users & Value Proposition**: `<Define core product promise>`
  - **Infrastructure & API Cost Guardrails**: `<Define monthly cloud/API budget and margin rules>`
  - **Pricing / Tier Limits (if applicable)**: `<Define Free / Pro / Enterprise limits>`

---

## 2. Approved Tech Stack & Hard Architectural Guardrails

1. **Backend, Compute & API Layer**:
   - **Runtime & Framework**: `<e.g., Node.js / Bun / FastAPI / Go / Cloudflare Workers / Next.js>`
   - **Concurrency & Memory Constraints**: `<Define memory/CPU limits and streaming rules>`
2. **Database, Caching & Object Storage**:
   - **Primary Database**: `<e.g., PostgreSQL / SQLite / D1 / MySQL / MongoDB>`
   - **Query & Migration Strategy**: `<Define ORM or raw SQL policy and migration folder>`
   - **Storage & Queues**: `<e.g., S3 / R2 / Redis / BullMQ / Cloudflare Queues>`
3. **Frontend & Client Architecture**:
   - **Framework & Styling**: `<e.g., React / Next.js / Vue / Vanilla TS SPA + Tailwind / CSS Modules>`
   - **Performance Budgets**: `<Define bundle size and LCP/INP targets>`
4. **AI / LLM / Agentic Stack (if applicable)**:
   - **Frameworks**: `<e.g., LangGraph, LangChain, CrewAI, Vercel AI SDK, MCP Servers>`
   - **Model Providers & Routing**: `<e.g., OpenAI, Anthropic, Gemini, Groq, Local vLLM/Ollama>`
5. **Security & Cryptography Invariants**:
   - **Authentication & Authorization**: `<e.g., JWT / OAuth2 / Session cookies / RBAC>`
   - **Secrets & Encryption**: `<e.g., AES-256-GCM key vault, SHA-256 API key hashing>`
   - **Input & AI Safety Gates**: `<e.g., SSRF protection, SQL parameterization, post-web prompt-injection taint gates>`

---

## 3. Project-Specific Department Responsibilities & Codebase Map

| Dept # | Subagent ID | Project-Specific Responsibilities | Owned Codebase Paths |
| :---: | :--- | :--- | :--- |
| **1** | `ceo-executive-orchestrator` | Enforce master specification, unit economics, and 5-Phase Company Pipeline | Workspace-wide |
| **2** | `product-pmo-lead` | Decompose project specs into atomic tasks, acceptance criteria, and DX/UX flows | `specs/`, `docs/prd/` |
| **3** | `cto-cloud-architect` | Lock shared TypeScript/Python interfaces, API contracts, and DB schemas | `src/types/`, `src/contracts/` |
| **4** | `backend-data-engineer` | Server/Edge routes, database queries/migrations, storage streams, queues, billing | `src/backend/`, `src/api/`, `src/db/`, `migrations/` |
| **5** | `frontend-ux-engineer` | Web/SPA UI components, design system, client state, and client media pipelines | `src/ui/`, `src/client/`, `src/components/`, `public/` |
| **6** | `ai-agentic-engineer` | LLM model router, execution modes, RAG/search grounding, and LLM-as-a-Judge evals | `src/router/`, `src/modes/`, `src/search/`, `src/eval/` |
| **7** | `ai-ml-langchain-automation-lead` | LangGraph `StateGraph` workflows, LangChain pipelines, CrewAI/AutoGen, MCP servers | `src/agents/`, `src/graphs/`, `src/workflows/`, `src/mcp/`, `sdk/` |
| **8** | `security-privacy-lead` | Encryption, API key hashing, auth guards, SSRF shield, prompt-injection taint gate | `src/security/`, `src/crypto/`, `src/auth/` |
| **9** | `qa-release-lead` | 5-Stage Release Gate: Typecheck, Unit, API contract, E2E tests & Reality-Checker | `tests/`, `e2e/` |
| **10** | `devops-sre-lead` | Deployment configs, Docker/Cloud configs, CI/CD workflows, migrations, FinOps | `.github/workflows/`, `scripts/`, `Dockerfile`, `wrangler.toml` |
| **11** | `gtm-business-ops-lead` | Developer docs, SDK quickstarts, API references, README, and pricing models | `docs/`, `README.md`, `examples/` |
