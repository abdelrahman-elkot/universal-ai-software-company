# 🤝 Contributing to Universal AI Software Company OS (v2.1)

Thank you for your interest in contributing to **Universal AI Software Company OS**! Our mission is to maintain the cleanest, most reliable, **100% domain- and stack-agnostic** enterprise software engineering operating system across all 16+ major AI coding IDEs and CLIs.

---

## 🎯 Core Design Invariants (Read Before Contributing)

Every Pull Request must preserve our five foundational architectural invariants:

1. **100% Domain- & Stack-Agnostic Engine**:
   - All 11 Department Lead Subagents (`.agents/agents/`) and 34 Core Technical Skills (`.agents/skills/`) must work seamlessly across **any software domain** — Interactive Web & Sports/Media Portals, Full-Stack SaaS, FinTech & E-Commerce Platforms, High-Scale Backend APIs & Microservices, Mobile/Desktop Apps, Games, Data Pipelines, and AI/Agentic Systems.
   - Never hardcode project-specific product names, proprietary business logic, or single-project file paths inside agent or skill definitions. Project-specific context belongs strictly in `.agents/rules/project-context.md`.
2. **Strict Rule #0 (CEO Executive Orchestrator Mandate & Dynamic Squad Assembly)**:
   - The Main Agent (`ceo-executive-orchestrator`) acts strictly as the Single Point of Contact and Pipeline Dispatcher — it never writes application, UI, or backend code directly by itself, even on urgent (`"fast"` / `"ASAP"`) requests.
   - Unneeded departments (e.g., AI Depts 6 & 7 on a non-AI web or backend project) must remain on `STANDBY` unless activated by project requirements.
3. **Anti-AI-Slop Frontend & High-Scale Zero-`N+1` Backend Standards**:
   - Frontend rules (`frontend-ux-engineer`) must enforce bespoke, domain-authentic visual craft and forbid generic purple/neon AI-slop templates or 3-emoji card clichés.
   - Architecture and Backend rules (`cto-cloud-architect` & `backend-data-engineer`) must enforce Phase 1 contract locking, Clean/Hexagonal boundaries, zero `N+1` queries, composite indexing, cursor pagination, ACID concurrency locks, and idempotent payment/queue patterns.
4. **Zero Department Overlap & Non-Overlapping File Ownership**:
   - Every department dispatch uses the **4-Field Inter-Department Hand-off Ticket** (`[CONTEXT & INPUT CONTRACTS]`, `[OWNED FILE BOUNDARY]`, `[EXCELLENCE & ACCEPTANCE CRITERIA]`, `[DOWNSTREAM HANDOFF]`) to prevent parallel file collisions.
5. **Rule #0.4 — Mandatory Repository & Documentation Sync (Zero Stale `README.md` / `docs/`)**:
   - Documentation is treated as production code. **No commit or PR is permitted to leave `README.md`, `docs/`, or `CONTRIBUTING.md` outdated** when rules, CLI flags, skills, supported IDEs, or directory structures change.

---

## 🛠️ Ways You Can Contribute

### 1. Improving an Existing Technical Skill (`.agents/skills/<skill-name>/SKILL.md`)
- Enhance architectural patterns, code examples, security checklists, or anti-pattern warnings.
- **Mandatory Multi-Folder Sync**: Whenever you update `.agents/skills/<skill-name>/SKILL.md`, you **must** synchronize the exact same file to:
  - `.claude/skills/<skill-name>/SKILL.md`
  - `.agents/plugins/software-company-team/skills/<skill-name>/SKILL.md` *(if that skill is bundled in the Antigravity plugin subset)*

### 2. Improving a Department Lead Subagent
- Department Lead Subagents live across 4 native multi-agent directories that must stay synchronized:
  - `.agents/agents/<agent-id>.md` (Google Antigravity & Universal Reference)
  - `.claude/agents/<agent-id>.md` (Claude Code)
  - `.opencode/agent/<agent-id>.md` (OpenCode)
  - `.github/agents/<agent-id>.agent.md` (GitHub Copilot)
- Keep department responsibilities, owned paths, and assigned skills aligned across all 4 directories.

### 3. Adding or Updating an IDE / CLI Adapter
- If a new AI coding IDE or CLI emerges (or an existing tool updates its rule/agent file format), update:
  - `bin/cli.mjs` (must remain **zero-dependency**, using only built-in Node.js `node:fs`, `node:path`, and `node:url` modules)
  - `install.sh` & `install.ps1`
  - `README.md`, `docs/IDE_SETUP_GUIDE.md`, and `docs/index.html`

---

## 📋 Mandatory Repository & Documentation Sync Checklist (Rule #0.4)

Before opening a Pull Request, verify every item in this checklist:

- [ ] **Root Constitution Sync**: If `AGENTS.md` was updated, are `CLAUDE.md`, `GEMINI.md`, `.agents/plugins/software-company-team/rules/AGENTS.md`, and all IDE rule adapters (`.cursor/rules/software-company.mdc`, `.cursorrules`, `.windsurf/rules/software-company.md`, `.windsurfrules`, `.clinerules/software-company.md`, `.roo/rules/software-company.md`, `.roorules`, `.codex/instructions.md`, `.continue/rules/software-company.md`, `.rules`, `.trae/rules/project_rules.md`, `.kilocode/rules/software-company.md`, `.goosehints`, `.github/copilot-instructions.md`) synchronized?
- [ ] **Zero Stale `README.md` & `docs/`**: Do `README.md`, `docs/QUICKSTART.md`, `docs/IDE_SETUP_GUIDE.md`, and `docs/index.html` accurately reflect all current CLI flags, installed files, rules, and the exact repository folder tree?
- [ ] **Clean Template State**: Is `.agents/rules/project-context.md` preserved in its clean `[UNINITIALIZED_TEMPLATE]` state so new users get automatic Phase 1 onboarding on their first prompt?
- [ ] **100% English**: Are all markdown files, prompts, skills, and CLI outputs written in clear, accurate English?

---

## ✅ Pre-PR CLI Verification Commands

Run these commands locally from the repository root and confirm zero errors:

```bash
# 1. Verify CLI help and full inventory listing (11 Depts, 34 Skills, 16+ Tools)
node bin/cli.mjs --help
node bin/cli.mjs --list

# 2. Run the built-in Doctor health check on the repository root
node bin/cli.mjs . --doctor
```

---

## 📜 License

By contributing to Universal AI Software Company OS, you agree that your contributions will be licensed under the **[MIT License](LICENSE)**.
