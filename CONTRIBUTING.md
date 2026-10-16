# 🤝 Contributing to Universal AI Software Company OS

Thank you for your interest in contributing to **Universal AI Software Company OS**! Our goal is to maintain the cleanest, most reliable, **100% project-agnostic** multi-agent software engineering operating system for all major AI coding IDEs and CLIs.

---

## 🎯 Core Design Principles (Read Before Contributing)

Every Pull Request must preserve our three foundational invariants:

1. **100% Project-Agnostic Engine**:
   - All 11 Department Lead Subagents (`.agents/agents/`) and 34 Core Technical Skills (`.agents/skills/`) must remain completely reusable across any tech stack or domain.
   - Never hardcode project-specific product names, proprietary business logic, or single-project file paths inside agent or skill definitions. Project-specific context belongs strictly in `.agents/rules/project-context.md`.
2. **Zero Department Overlap & Non-Overlapping File Ownership**:
   - Each skill belongs to a clear department domain so AI coding assistants never suffer from persona confusion or parallel file collisions during Phase 2 builds.
3. **100% English Documentation & Prompts**:
   - All markdown documentation, agent prompts, skill instructions, and CLI output must be written in clear, concise English.

---

## 🛠️ Ways You Can Contribute

### 1. Improving an Existing Technical Skill (`.agents/skills/<skill-name>/SKILL.md`)
- Enhance code examples, architectural checklists, or anti-pattern warnings.
- If you update a skill inside `.agents/skills/<skill-name>/SKILL.md`, ensure the corresponding copy in `.claude/skills/<skill-name>/SKILL.md` and `.agents/plugins/software-company-team/skills/<skill-name>/SKILL.md` stays synchronized.

### 2. Improving a Department Lead Subagent
- Department Lead Subagents live in:
  - `.agents/agents/<agent-id>.md` (Google Antigravity & Universal Reference)
  - `.claude/agents/<agent-id>.md` (Claude Code)
  - `.opencode/agent/<agent-id>.md` (OpenCode)
  - `.github/agents/<agent-id>.agent.md` (GitHub Copilot)
- Keep department responsibilities, owned paths, and assigned skills aligned across all adapters.

### 3. Adding or Updating an IDE / CLI Adapter
- If a new AI coding IDE or CLI emerges (or an existing tool updates its rule/agent file format), update `bin/cli.mjs`, `install.sh`, `install.ps1`, and `docs/IDE_SETUP_GUIDE.md`.
- Remember that `bin/cli.mjs` must remain **zero-dependency** (using only built-in Node.js `fs`, `path`, `url`, and `process` modules).

---

## ✅ Pre-PR Verification Checklist

Before opening a Pull Request, run these checks locally:

1. **Verify CLI List & Doctor Commands**:
   ```bash
   node bin/cli.mjs --list
   node bin/cli.mjs . --doctor
   ```
2. **Test Dry-Run Installation**:
   ```bash
   node bin/cli.mjs ./tmp-test-install --agent all --dry-run
   ```
3. **Verify Synchronization**:
   Ensure `.agents/rules/project-context.md` remains in its clean `[UNINITIALIZED_TEMPLATE]` state so new users get automatic onboarding on their first run.

---

## 📜 License

By contributing to Universal AI Software Company OS, you agree that your contributions will be licensed under the **[MIT License](LICENSE)**.
