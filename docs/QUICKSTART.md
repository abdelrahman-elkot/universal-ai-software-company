# ⚡ 5-Minute Quickstart Guide

Welcome to **Universal AI Software Company OS**! After completing this 5-minute guide, you will have **11 Department Lead Subagents** and **34 Core Technical Skills** installed in your repository, automatically calibrated to your exact tech stack, and ready to build features through the **5-Phase Execution Pipeline**.

---

## 📋 Prerequisites

- Any new or existing software project directory (TypeScript, Python, Go, Rust, Java, Next.js, FastAPI, Cloudflare Workers, etc.)
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

You can verify that all core files, department subagents, skills, and project context templates are properly installed by running:

```bash
npx github:abdelrahman-elkot/universal-ai-software-company . --doctor
```

You will see a checklist confirming:
- `AGENTS.md` (Universal Company Operating System & Routing Matrix)
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

1. **Automatic Inspection**: **Dept 1 (`ceo-executive-orchestrator`)** and **Dept 3 (`cto-cloud-architect`)** read your repository's existing files (`README.md`, `package.json`, `pyproject.toml`, `go.mod`, `Cargo.toml`, database schemas, `Dockerfile`, and `src/` directory layout).
2. **Populating Your Single Source of Truth**: They replace the `[UNINITIALIZED_TEMPLATE]` placeholders in **[`.agents/rules/project-context.md`](../.agents/rules/project-context.md)** with:
   - **Section 1**: Project Identity, Master Specification path, and Unit-Economics/Budget guardrails.
   - **Section 2**: Approved Tech Stack (Backend runtime, Primary DB & migration folder, Frontend framework, AI/LLM stack, and Security/Crypto invariants).
   - **Section 3**: Exact directory ownership map for all 11 departments tailored to your repository's folder structure.
3. **Review & Commit**: Open `.agents/rules/project-context.md`, review the generated configuration, tweak any custom architectural rules you want enforced, and commit it to version control.

> 💡 **Starting a Brand-New Empty Repo?**
> If your folder is completely empty, tell the AI what you want to build:
> ```text
> Initialize project context for a SaaS application using Next.js 15, FastAPI, PostgreSQL, and LangGraph. Create docs/spec.md and populate .agents/rules/project-context.md.
> ```

---

## Step 4: Run Your First 5-Phase Feature Build

Once `.agents/rules/project-context.md` is initialized, every feature request automatically routes through the right departments. Try any of these workflows:

### Scenario 1: Build an End-to-End Feature Across All 5 Phases

```text
Run the 5-Phase Company Pipeline to implement user API key management with SHA-256 hashing, rate-limit tiers, and a settings UI:
- Phase 1: product-pmo-lead + cto-cloud-architect lock shared types and DB schema.
- Phase 2: backend-data-engineer builds the API & migrations while frontend-ux-engineer builds the UI in parallel.
- Phase 3: security-privacy-lead audits key hashing, auth guards, and CWE compliance.
- Phase 4: qa-release-lead runs typecheck, unit tests, and API contract tests.
- Phase 5: devops-sre-lead + gtm-business-ops-lead update migrations and API documentation.
```

### Scenario 2: Build an AI / LangGraph Agent Workflow

```text
Use ai-ml-langchain-automation-lead and ai-agentic-engineer to build a stateful LangGraph workflow with human-in-the-loop interrupt(), multi-provider fallback routing, and an evaluation test suite.
```

### Scenario 3: Run a Dedicated Security & CWE Code Audit

```text
Use security-privacy-lead to audit our codebase against .agents/rules/project-context.md. Check authentication, encryption, SQL parameterization, SSRF protections, and untrusted-content taint gates, and report findings mapped to CWE IDs.
```

### Scenario 4: Run the 5-Stage QA & Reality-Checker Release Gate

```text
Use qa-release-lead to execute the 5-Stage Release Gate on our current branch. Run typechecking, unit tests, API contract tests, and E2E tests, and issue an evidence-based Reality-Checker verdict.
```

---

## 🔗 Next Steps

- **[Complete IDE & CLI Setup Guide (`docs/IDE_SETUP_GUIDE.md`)](IDE_SETUP_GUIDE.md)** — Learn the exact slash commands, `@agent` mentions, and custom modes for your specific editor.
- **[Interactive Web Showcase (`docs/index.html`)](index.html)** — Open in your browser to explore all 11 departments and search all 34 skills interactively.
