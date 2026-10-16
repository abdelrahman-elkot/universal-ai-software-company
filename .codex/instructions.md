# OpenAI Codex CLI — Universal Software Company Operating System

Always read and follow the workspace operating system in `AGENTS.md` and the active project context in `.agents/rules/project-context.md`.

---

# Universal Software Company Operating System (`AGENTS.md`)

This workspace operates as **One Cohesive Enterprise Software Company** powered by **11 Department Lead Subagents** and **34 Core Technical Skills** inside `.agents/`.

> **100% Project-Agnostic Engine**: All 11 agents (`.agents/agents/`) and 34 skills (`.agents/skills/`) are universal and reusable across any software project. Project-specific architecture, tech stack, guardrails, and directory mappings live exclusively in **[`.agents/rules/project-context.md`](.agents/rules/project-context.md)**.

---

## 0. Active Project Context Binding & Auto-Onboarding

1. **Read Project Context First**: Before planning or writing code, every agent must follow the project-specific stack, specification file, guardrails, and folder ownership defined in **[`.agents/rules/project-context.md`](.agents/rules/project-context.md)**.
2. **Automatic New-Project Onboarding**: If you copy `.agents/` and `AGENTS.md` into a new project where `.agents/rules/project-context.md` is missing (or when the user says *"initialize new project context"*), immediately invoke `ceo-executive-orchestrator` and `cto-cloud-architect` to inspect the new repository's plan/README and generate `.agents/rules/project-context.md` automatically.

---

## 1. Automatic Task-to-Department Routing Matrix (Mandatory Dispatcher)

Whenever the user requests any task, **automatically route** the work to the responsible Department Lead Subagent(s) according to this exact matrix:

| Dept # | Subagent ID | When to Invoke Automatically (Trigger Intent) | Default Owned Paths (Overridable in `project-context.md`) | Assigned Department Skills (`.agents/skills/`) |
| :---: | :--- | :--- | :--- | :--- |
| **1** | `ceo-executive-orchestrator` | Multi-department milestones, full-project builds, master plan alignment, unit-economics checks | Workspace-wide coordination | • [`agency-ceo-founder-visionary`](.agents/skills/executive-ceo-founder/SKILL.md)<br>• [`agency-agents-orchestrator`](.agents/skills/agents-orchestrator/SKILL.md)<br>• [`agency-master-plan-architect`](.agents/skills/specialized-master-plan-architect/SKILL.md) |
| **2** | `product-pmo-lead` | Spec-to-task breakdown, sprint backlog, acceptance criteria, UX/DX & onboarding flows | `specs/`, task plans | • [`agency-product-manager`](.agents/skills/product-manager/SKILL.md)<br>• [`agency-senior-project-manager`](.agents/skills/project-manager-senior/SKILL.md)<br>• [`agency-dx-engineer`](.agents/skills/product-dx-engineer/SKILL.md) |
| **3** | `cto-cloud-architect` | System architecture, shared TypeScript/API contracts, cloud/edge/database design, FinOps guardrails | `src/types/`, architecture contracts | • [`agency-cto-vp-engineering`](.agents/skills/engineering-cto-vp/SKILL.md)<br>• [`agency-cloudflare-edge-architect`](.agents/skills/engineering-cloudflare-edge-architect/SKILL.md)<br>• [`agency-software-architect`](.agents/skills/engineering-software-architect/SKILL.md) |
| **4** | `backend-data-engineer` | Server/Edge API routes, stateful coordinators, SQL schemas & migrations, streaming storage, queues, billing ledgers | `src/worker/`, `src/backend/`, `src/do/`, `src/db/`, `src/storage/`, `src/queues/`, `migrations/` | • [`agency-backend-architect`](.agents/skills/engineering-backend-architect/SKILL.md)<br>• [`agency-database-optimizer`](.agents/skills/engineering-database-optimizer/SKILL.md)<br>• [`agency-data-engineer`](.agents/skills/engineering-data-engineer/SKILL.md)<br>• [`agency-payments-billing-engineer`](.agents/skills/engineering-payments-billing-engineer/SKILL.md) |
| **5** | `frontend-ux-engineer` | Web/SPA UI, CSS/design systems, client-side state, instant file previews, client calculators & media pipelines | `src/ui/`, `src/client/`, `src/media/`, `public/`, `index.html` | • [`agency-frontend-developer`](.agents/skills/engineering-frontend-developer/SKILL.md)<br>• [`agency-ux-architect`](.agents/skills/design-ux-architect/SKILL.md)<br>• [`agency-ui-designer`](.agents/skills/design-ui-designer/SKILL.md) |
| **6** | `ai-agentic-engineer` | Multi-provider LLM routers, routing policies, AI execution modes, web/scholarly search grounding, LLM-as-a-Judge evals | `src/router/`, `src/modes/`, `src/search/`, `src/eval/` | • [`agency-multi-agent-systems-architect`](.agents/skills/engineering-multi-agent-systems-architect/SKILL.md)<br>• [`agency-rag-pipeline-engineer`](.agents/skills/engineering-rag-pipeline-engineer/SKILL.md)<br>• [`agency-prompt-engineer`](.agents/skills/engineering-prompt-engineer/SKILL.md) |
| **7** | `ai-ml-langchain-automation-lead` | **LangGraph** (`StateGraph`, `Send` map-reduce, checkpointers, `interrupt()` HITL), **LangChain** LCEL, CrewAI/AutoGen/DSPy, **MCP** servers, durable workflows, RAG & fine-tuning | `src/agents/`, `src/graphs/`, `src/workflows/`, `src/mcp/`, `sdk/` | • [`agency-langchain-langgraph-automation-engineer`](.agents/skills/engineering-langchain-langgraph-automation/SKILL.md)<br>• [`agency-ai-engineer`](.agents/skills/engineering-ai-engineer/SKILL.md)<br>• [`agency-mcp-builder`](.agents/skills/specialized-mcp-builder/SKILL.md) |
| **8** | `security-privacy-lead` | Encryption (`AES-256-GCM`), API key hashing (`SHA-256`), JWT/session auth, SSRF shield, prompt-injection taint gates, CWE audit | `src/security/`, `src/crypto/`, `src/auth/` + Cross-PR Security Gate | • [`agency-security-architect`](.agents/skills/security-architect/SKILL.md)<br>• [`agency-application-security-engineer`](.agents/skills/security-appsec-engineer/SKILL.md)<br>• [`agency-ai-generated-code-security-auditor`](.agents/skills/security-ai-generated-code-auditor/SKILL.md) |
| **9** | `qa-release-lead` | Unit tests, API contract tests, E2E Playwright/Vitest tests, edge-case validation, 5-Stage Release Gate & Reality-Checker certification | `tests/`, `e2e/`, `vitest.config.ts`, `playwright.config.ts` | • [`agency-qa-release-gate-manager`](.agents/skills/testing-release-gate-manager/SKILL.md)<br>• [`agency-api-tester`](.agents/skills/testing-api-tester/SKILL.md)<br>• [`agency-test-automation-engineer`](.agents/skills/testing-test-automation-engineer/SKILL.md)<br>• [`agency-reality-checker`](.agents/skills/testing-reality-checker/SKILL.md) |
| **10** | `devops-sre-lead` | Cloud/Edge deployment configs, DB migrations, storage lifecycle rules, queue bindings, CI/CD, SLO & FinOps monitoring | `wrangler.toml`, `Dockerfile`, `.github/workflows/`, `scripts/`, `package.json`, `tsconfig.json` | • [`agency-devops-automator`](.agents/skills/engineering-devops-automator/SKILL.md)<br>• [`agency-sre-site-reliability-engineer`](.agents/skills/engineering-sre/SKILL.md)<br>• [`agency-finops-engineer`](.agents/skills/engineering-finops-engineer/SKILL.md) |
| **11** | `gtm-business-ops-lead` | Developer documentation, SDK drop-in guides, API references, README, SaaS pricing models & unit economics | `docs/`, `README.md`, `examples/` | • [`agency-technical-writer`](.agents/skills/engineering-technical-writer/SKILL.md)<br>• [`agency-pricing-analyst`](.agents/skills/specialized-pricing-analyst/SKILL.md) |

---

## 2. How the Company Works Together as ONE Unified Team (5-Phase Execution Pipeline)

Every feature, milestone, or bug fix follows this strict **5-Phase Company Pipeline** so agents never conflict or ship broken code:

```
[Phase 1: Product & Architecture Lock]
   product-pmo-lead + cto-cloud-architect
   (Read .agents/rules/project-context.md -> Lock shared interfaces, schemas & file ownership)
          │
          ▼
[Phase 2: Parallel Engineering Build (Non-Overlapping File Ownership)]
   ├── backend-data-engineer           (Backend APIs, Stateful Coordinators, DB, Storage, Queues, Ledger)
   ├── frontend-ux-engineer            (Web/SPA UI, Design System, Client Previews & Media Pipelines)
   ├── ai-agentic-engineer             (Model Router, Execution Modes, Search Grounding, Evals)
   └── ai-ml-langchain-automation-lead (LangGraph StateGraphs, Send Swarms, LangChain, MCP, MLOps)
          │
          ▼
[Phase 3: Mandatory Security & Crypto Audit]
   security-privacy-lead
   (Verify encryption, key hashes, auth, SSRF & prompt-injection gates per project-context.md)
          │
          ▼
[Phase 4: Mandatory 5-Stage QA & Reality-Checker Gate]
   qa-release-lead
   (Run typecheck + Unit/API/E2E tests. If ANY check fails -> route back to Phase 2 engineer automatically)
          │
          ▼
[Phase 5: DevOps & Developer Docs Sync]
   devops-sre-lead + gtm-business-ops-lead
   (Verify deployment configs / migrations / FinOps limits & update SDK docs)
```

---

## 3. Non-Negotiable Company Rules

1. **Single Source of Project Truth**: Every department strictly enforces the specification file and architectural guardrails declared in **[`.agents/rules/project-context.md`](.agents/rules/project-context.md)** with zero unapproved scope creep.
2. **Zero File Collisions**: When running multiple subagents in parallel during Phase 2, each subagent ONLY edits files inside its owned paths. Shared types in `src/types/` are locked in Phase 1 by `cto-cloud-architect` first.
3. **Zero Unverified Approvals**: No milestone is reported as complete until `security-privacy-lead` (Phase 3) and `qa-release-lead` (Phase 4) verify the implementation with real command output.
