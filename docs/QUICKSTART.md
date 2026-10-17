# ⚡ 5-Minute Quickstart Guide

Welcome to **Universal AI Software Company OS**! After completing this 5-minute guide, you will have **11 Department Lead Subagents** and **34 Core Technical Skills** installed in your repository, automatically calibrated to your project domain and tech stack, and ready to build **any software product** — from interactive sports/media web portals and full-stack SaaS apps to high-scale payment APIs and AI agent systems.

---

## 📋 Prerequisites

- Any new or existing software project directory (TypeScript, Python, Go, Rust, Java, C#, Next.js, React, Vue, Astro, FastAPI, NestJS, Cloudflare Workers, PostgreSQL, etc.)
- One or more supported AI coding tools (Claude Code, Cursor, Windsurf, Google Antigravity, OpenCode, GitHub Copilot, Cline, Roo Code, Codex CLI, Gemini CLI, Aider, Continue.dev, Zed AI, Trae IDE, Kilo Code, or Block Goose)
- **Node.js 18+** *(optional — only needed if using the zero-clone `npx` installer)*

---

## Step 1: Install the Company OS Into Your Project

Choose **one** of the three installation methods below and run it against your project directory.

### Option A: Instant `npx` CLI (Recommended — Any OS, No Clone Needed)

Open your terminal inside your target project folder and run:

```bash
# Install all 11 departments, 34 skills, and adapters for all supported AI tools
npx github:abdelrahman-elkot/universal-ai-software-company . --agent all
```

Want to keep your repository ultra-minimal and install files **only** for the single AI tool you use? Pass `--agent <tool>`:

```bash
# Claude Code only
npx github:abdelrahman-elkot/universal-ai-software-company . --agent claude

# Cursor only
npx github:abdelrahman-elkot/universal-ai-software-company . --agent cursor

# Windsurf only
npx github:abdelrahman-elkot/universal-ai-software-company . --agent windsurf

# Google Antigravity only
npx github:abdelrahman-elkot/universal-ai-software-company . --agent antigravity

# OpenCode only
npx github:abdelrahman-elkot/universal-ai-software-company . --agent opencode

# GitHub Copilot only
npx github:abdelrahman-elkot/universal-ai-software-company . --agent copilot
```

### Option B: macOS / Linux / Git Bash (`install.sh`)

```bash
git clone https://github.com/abdelrahman-elkot/universal-ai-software-company.git
./universal-ai-software-company/install.sh /path/to/your-project all
```

### Option C: Windows PowerShell (`install.ps1`)

```powershell
git clone https://github.com/abdelrahman-elkot/universal-ai-software-company.git
.\universal-ai-software-company\install.ps1 -TargetDir "C:\path\to\your-project" -Agent all
```

---

## Step 2: Verify Your Installation (`--doctor`)

Verify that all core files, department subagents, skills, and project context templates are properly installed by running:

```bash
npx github:abdelrahman-elkot/universal-ai-software-company . --doctor
```

You will see a checklist confirming:
- `AGENTS.md` (Universal Company Operating System, Rule #0 Executive Mandate & Dynamic Squad Matrix)
- `.agents/rules/project-context.md` (Active Project Identity Card)
- `.agents/skills/` (All 34 Core Technical Skills)
- Tool-specific agent adapters (`.claude/`, `.opencode/`, `.cursor/`, `.github/`, etc.)

---

## Step 3: Auto-Onboard Your Repository (`"Initialize project context"`)

Open your project in your AI coding assistant and enter this exact first prompt:

```text
Initialize project context
```

### What Happens Behind the Scenes?

1. **Executive Intake (Rule #0)**: **Dept 1 (`ceo-executive-orchestrator`)** dispatches **Dept 2 (`product-pmo-lead`)** and **Dept 3 (`cto-cloud-architect`)** to inspect your repository (`README.md`, `package.json`, `pyproject.toml`, `go.mod`, `Cargo.toml`, database schemas, `Dockerfile`, and `src/` directory layout).
2. **Dynamic Squad Selection & Context Lock**: They replace the `[UNINITIALIZED_TEMPLATE]` placeholders in **[`.agents/rules/project-context.md`](../.agents/rules/project-context.md)** with:
   - **Section 1 (Identity & Active Squad)**: Selects your project archetype (*Interactive Web/Media Portal*, *Full-Stack SaaS*, *FinTech/Payments*, *High-Scale Backend/API*, or *AI/Agentic System*) and places unneeded departments (such as AI Depts 6 & 7 on a non-AI project) on **`STANDBY`**.
   - **Section 2 (Creative Direction & UI/UX Aesthetic System)**: Locks your domain aesthetic persona, expressive typography pairing, and anti-AI-slop color tokens.
   - **Section 3 (Tech Stack & Scalability Guardrails)**: Locks your architecture pattern, zero-`N+1` database rules, caching/queue strategy, and security invariants.
   - **Section 4 (Non-Overlapping File Boundaries)**: Assigns exact directory paths to each active department so parallel agents never collide.

> 💡 **Starting a Brand-New Empty Repo?**
> If your folder is empty, tell the CEO what kind of product you want to build:
> ```text
> Initialize project context for a high-energy football live scores and stats web portal using Astro, TypeScript, and Tailwind CSS.
> ```
> Or for a Full-Stack SaaS / FinTech product:
> ```text
> Initialize project context for a multi-tenant B2B FinTech invoicing SaaS using Next.js, Node.js/Fastify, PostgreSQL, and Redis.
> ```

---

## Step 4: Build Your First Feature or Product (Copy-Paste Workflows)

Once `.agents/rules/project-context.md` is initialized, the Main Agent acts strictly as your **CEO & Pipeline Dispatcher** — presenting a **3-Line Executive Dispatch Briefing** and routing work to the right Department Squad. Try any of these starter prompts:

### Scenario 1: Interactive Sports, Media, or Creative Web Portal (Frontend + QA Squad)

```text
Build an interactive football match center and live league table portal with a Broadcast Sports aesthetic. Lock the data contracts and design tokens in Phase 1, have frontend-ux-engineer build a bespoke anti-AI-slop UI with custom SVG pitch visuals and instant filtering in Phase 2, and have qa-release-lead verify responsive layout and accessibility in Phase 4.
```

### Scenario 2: High-Scale E-Commerce or FinTech Backend (Backend + Security + QA Squad)

```text
Design and implement an idempotent order checkout and Stripe webhook processing API. Lock the schema and OpenAPI contracts with cto-cloud-architect in Phase 1, build the service with ACID row-level locking, cursor pagination, and Redis caching via backend-data-engineer in Phase 2, audit payment security with security-privacy-lead in Phase 3, and run API contract tests with qa-release-lead in Phase 4.
```

### Scenario 3: Full-Stack SaaS Feature (Parallel Backend ∥ Frontend Build)

```text
Run the 5-Phase Company Pipeline to build team workspace invitations and role-based access control (RBAC):
- Phase 1: product-pmo-lead + cto-cloud-architect lock shared TypeScript interfaces and DB migrations.
- Phase 2: backend-data-engineer builds the API endpoints & SQL migrations while frontend-ux-engineer builds the team management UI in parallel.
- Phase 3: security-privacy-lead audits RBAC authorization boundaries and CWE compliance.
- Phase 4: qa-release-lead runs build, typecheck, unit tests, and E2E tests.
- Phase 5: devops-sre-lead + gtm-business-ops-lead update deployment configs and API docs.
```

### Scenario 4: AI / LangGraph Stateful Agent Workflow (AI Squad — Depts 6 & 7)

```text
Use ai-ml-langchain-automation-lead and ai-agentic-engineer to build a stateful LangGraph workflow with human-in-the-loop interrupt(), multi-provider fallback routing, hybrid RAG retrieval, and an evaluation test suite.
```

### Scenario 5: Dedicated Security Audit or 5-Stage QA Release Gate

```text
Use security-privacy-lead to audit our codebase against .agents/rules/project-context.md for auth/RBAC flaws, secret exposure, SQLi/XSS/SSRF risks, and untrusted-content taint gates, then use qa-release-lead to execute the 5-Stage Release Gate.
```

---

## 🔗 Next Steps

- **[Complete IDE & CLI Setup Guide (`docs/IDE_SETUP_GUIDE.md`)](IDE_SETUP_GUIDE.md)** — Learn the exact slash commands, `@agent` mentions, and custom modes for your specific editor.
- **[Interactive Web Showcase (`docs/index.html`)](index.html)** — Open in your browser to explore all 11 departments and search all 34 skills interactively.
