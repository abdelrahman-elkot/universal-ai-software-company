# 🛠️ Complete IDE & CLI Setup Guide (16+ Supported Tools)

Universal AI Software Company OS is designed to work natively across **16 AI coding IDEs, editor extensions, and terminal CLIs**. Because all 11 Department Lead Subagents and 34 Core Technical Skills share a single source of project truth (**[`.agents/rules/project-context.md`](../.agents/rules/project-context.md)**) and a unified constitution (**[`AGENTS.md`](../AGENTS.md)**), your entire engineering team can use different AI editors on the same repository while enforcing identical architectural, UI/UX, security, and QA standards.

---

## ⚙️ How the Company Operating System Adapts to Your IDE

Depending on the capabilities of your AI coding tool, the **Executive Orchestrator Mandate (Rule #0)** and **Dynamic Squad Assembly** operate in one of two ways:

1. **Native Multi-Subagent Platforms (*Claude Code, Google Antigravity, OpenCode, GitHub Copilot, Roo Code, Kilo Code*)**:
   - The Main Agent acts strictly as **CEO & Chief of Staff (`ceo-executive-orchestrator`)**.
   - It presents a **3-Line Executive Dispatch Briefing**, locks Phase 1 contracts via `product-pmo-lead` + `cto-cloud-architect`, and spawns the active Phase 2 Department Leads (`backend-data-engineer`, `frontend-ux-engineer`, etc.) using structured **4-Field Inter-Department Hand-off Tickets** (`[CONTEXT & INPUT CONTRACTS]`, `[OWNED FILE BOUNDARY]`, `[EXCELLENCE & ACCEPTANCE CRITERIA]`, `[DOWNSTREAM HANDOFF]`).
2. **Single-Agent & Rule-Driven IDEs (*Cursor, Windsurf, Cline, Codex CLI, Gemini CLI, Aider, Continue.dev, Zed AI, Trae IDE, Block Goose*)**:
   - The IDE loads the company routing matrix from its native rule file (`.cursor/rules/software-company.mdc`, `.windsurfrules`, `.clinerules/`, `AGENTS.md`, etc.).
   - It executes the exact same **5-Phase Pipeline** through structured sequential department handoffs—locking interfaces in Phase 1, loading the relevant `.agents/skills/<skill>/SKILL.md` playbooks in Phase 2, auditing security in Phase 3, and running real verification commands in Phase 4.

---

## 📑 Quick Jump

1. [Claude Code (`claude`)](#1-claude-code-claude)
2. [Cursor](#2-cursor)
3. [Windsurf (Codeium)](#3-windsurf-codeium)
4. [Google Antigravity](#4-google-antigravity)
5. [OpenCode (`opencode`)](#5-opencode-opencode)
6. [GitHub Copilot (VS Code & JetBrains)](#6-github-copilot-vs-code--jetbrains)
7. [Cline](#7-cline)
8. [Roo Code](#8-roo-code)
9. [OpenAI Codex CLI](#9-openai-codex-cli)
10. [Google Gemini CLI](#10-google-gemini-cli)
11. [Aider](#11-aider)
12. [Continue.dev](#12-continuedev)
13. [Zed AI](#13-zed-ai)
14. [Trae IDE](#14-trae-ide)
15. [Kilo Code](#15-kilo-code)
16. [Block Goose](#16-block-goose)

---

## 1. Claude Code (`claude`)

### Installed Files
- `CLAUDE.md` — Root instructions that automatically import `@AGENTS.md` and `@.agents/rules/project-context.md`.
- `.claude/agents/*.md` — All 11 native Claude Code subagents with YAML frontmatter (`name`, `description`).
- `.claude/skills/*/SKILL.md` — All 34 native Claude Code skills.

### Setup Command
```bash
npx github:abdelrahman-elkot/universal-ai-software-company . --agent claude
```

### How to Use in Claude Code
- **Automatic CEO Delegation (Rule #0)**: Just describe your feature, web portal, backend API, or bug fix naturally. Claude Code reads `CLAUDE.md`, selects the right **Dynamic Squad** for your project domain, and delegates subtasks to the matching subagents in `.claude/agents/`.
- **Inspect Available Subagents**: Type `/agents` inside the Claude Code interactive prompt to view and manage all 11 Department Lead Subagents.
- **Explicit Subagent Invocation**: Mention any department lead directly in your prompt:
  ```text
  Use cto-cloud-architect to lock our API contracts in src/types/, then run backend-data-engineer and frontend-ux-engineer in parallel.
  ```

---

## 2. Cursor

### Installed Files
- `.cursor/rules/software-company.mdc` — Always-on (`alwaysApply: true`) workspace rule containing Rule #0, Dynamic Squad Assembly, the 11-department routing matrix, and the 5-Phase Execution Pipeline.
- `AGENTS.md` — Root multi-agent operating system instructions.
- `.agents/skills/*/SKILL.md` — All 34 technical skills loaded on demand.

### Setup Command
```bash
npx github:abdelrahman-elkot/universal-ai-software-company . --agent cursor
```

### How to Use in Cursor
- **Automatic Governance**: Cursor automatically applies `.cursor/rules/software-company.mdc` and `AGENTS.md` in Composer / Agent mode.
- **Reference Specific Skills or Rules**: Use `@` in Cursor Chat/Agent to pull in specific department personas or skills:
  ```text
  @software-company.mdc @.agents/rules/project-context.md Act as Dept 5 (frontend-ux-engineer) and build a bespoke Broadcast Sports match center with zero AI-slop templates.
  ```

---

## 3. Windsurf (Codeium)

### Installed Files
- `.windsurf/rules/software-company.md` & `.windsurfrules` — Native Windsurf Cascade workspace rules.
- `AGENTS.md` & `.agents/skills/*/SKILL.md` — Core company operating system and 34 skills.

### Setup Command
```bash
npx github:abdelrahman-elkot/universal-ai-software-company . --agent windsurf
```

### How to Use in Windsurf
- **Cascade Auto-Discovery**: Windsurf Cascade automatically loads `.windsurf/rules/software-company.md` and `.windsurfrules`.
- **Direct Mentions**: Reference `@AGENTS.md` or any skill inside `.agents/skills/` when prompting Cascade:
  ```text
  Follow @AGENTS.md Phase 1 and Phase 2 to design and build our idempotent payment webhook handler.
  ```

---

## 4. Google Antigravity

### Installed Files
- `AGENTS.md` & `GEMINI.md` — Workspace root instructions.
- `.agents/agents/*.md` — 11 native Antigravity subagent definitions.
- `.agents/skills/*/SKILL.md` — 34 Workspace Priority #1 skills.
- `.agents/plugins/software-company-team/plugin.json` — Portable Antigravity plugin bundle.

### Setup Command
```bash
npx github:abdelrahman-elkot/universal-ai-software-company . --agent antigravity
```

### How to Use in Google Antigravity
- **Native Parallel Subagent Orchestration**: Antigravity enforces Rule #0 out of the box—the main agent acts as `ceo-executive-orchestrator` and invokes the active Department Squad via `invoke_subagent` (`product-pmo-lead`, `cto-cloud-architect`, `backend-data-engineer`, `frontend-ux-engineer`, `security-privacy-lead`, `qa-release-lead`, etc.) using 4-field hand-off tickets.

---

## 5. OpenCode (`opencode`)

### Installed Files
- `AGENTS.md` — Root dispatcher read automatically by OpenCode.
- `.opencode/agent/*.md` — 11 native OpenCode subagents configured with `mode: subagent`.
- `.agents/skills/*/SKILL.md` — 34 technical skills.

### Setup Command
```bash
npx github:abdelrahman-elkot/universal-ai-software-company . --agent opencode
```

### How to Use in OpenCode
- **Direct `@agent` Mentions**: Invoke any Department Lead directly in the OpenCode TUI using `@`:
  ```text
  @ceo-executive-orchestrator Initialize project context from this repository.
  @frontend-ux-engineer Build a bespoke editorial e-commerce product showcase in src/ui/.
  @backend-data-engineer Implement cursor-paginated order endpoints with zero N+1 queries.
  @qa-release-lead Run the 5-Stage Release Gate.
  ```

---

## 6. GitHub Copilot (VS Code & JetBrains)

### Installed Files
- `.github/copilot-instructions.md` — Repository-wide custom instructions automatically injected into GitHub Copilot Chat and Copilot Coding Agent.
- `.github/agents/*.agent.md` — Custom GitHub Copilot agent definitions for all 11 departments.
- `AGENTS.md` & `.agents/skills/*/SKILL.md` — Full skill library.

### Setup Command
```bash
npx github:abdelrahman-elkot/universal-ai-software-company . --agent copilot
```

### How to Use in GitHub Copilot
- Enable **Use Instruction Files** (`github.copilot.chat.codeGeneration.useInstructionFiles`: `true`) in VS Code settings.
- In Copilot Chat (Agent Mode), select or mention custom agents from `.github/agents/` (e.g., `@ceo-executive-orchestrator`, `@cto-cloud-architect`, `@frontend-ux-engineer`) or reference `#file:.agents/rules/project-context.md`.

---

## 7. Cline

### Installed Files
- `.clinerules/software-company.md` — Native Cline workspace rule directory file.
- `AGENTS.md` & `.agents/skills/*/SKILL.md` — Department routing matrix and 34 skills.

### Setup Command
```bash
npx github:abdelrahman-elkot/universal-ai-software-company . --agent cline
```

### How to Use in Cline
- Cline automatically reads all markdown files inside `.clinerules/` and `AGENTS.md` at the start of every task, assembling the right Dynamic Squad for your domain and reading relevant `.agents/skills/<skill>/SKILL.md` files before coding.

---

## 8. Roo Code

### Installed Files
- `.roo/rules/software-company.md` — Workspace-wide Roo Code rules.
- `.roomodes` — Custom Roo Code modes mapping to the software company departments.
- `AGENTS.md` & `.agents/skills/*/SKILL.md` — Core skills and project context.

### Setup Command
```bash
npx github:abdelrahman-elkot/universal-ai-software-company . --agent roo
```

### How to Use in Roo Code
- Switch between custom department modes defined in `.roomodes` or use Roo Code's **Orchestrator (Boomerang)** mode to delegate Phase 1–5 tasks across specialized department modes with non-overlapping file boundaries.

---

## 9. OpenAI Codex CLI

### Installed Files
- `AGENTS.md` — Native root instruction file automatically ingested by OpenAI Codex CLI.
- `.agents/rules/project-context.md` & `.agents/skills/*/SKILL.md` — Project context and 34 skills.

### Setup Command
```bash
npx github:abdelrahman-elkot/universal-ai-software-company . --agent codex
```

### How to Use in Codex CLI
- Launch `codex` in your project root. Codex CLI automatically discovers `AGENTS.md`, checks `.agents/rules/project-context.md`, and follows the 5-Phase Execution Pipeline.

---

## 10. Google Gemini CLI

### Installed Files
- `GEMINI.md` & `AGENTS.md` — Root context files automatically loaded by Gemini CLI.
- `.agents/rules/project-context.md` & `.agents/skills/*/SKILL.md` — Project context and 34 skills.

### Setup Command
```bash
npx github:abdelrahman-elkot/universal-ai-software-company . --agent gemini
```

### How to Use in Gemini CLI
- Run `gemini` in your terminal. It automatically loads `GEMINI.md`, binds to `.agents/rules/project-context.md`, and loads skills from `.agents/skills/` on demand.

---

## 11. Aider

### Installed Files
- `.aider.conf.yml` — Pre-configured to automatically load `AGENTS.md` and `.agents/rules/project-context.md` as read-only context (`read: [...]`).
- `CONVENTIONS.md` & `AGENTS.md` — Coding conventions and 5-Phase pipeline rules.

### Setup Command
```bash
npx github:abdelrahman-elkot/universal-ai-software-company . --agent aider
```

### How to Use in Aider
- Run `aider` in your repository root. `.aider.conf.yml` automatically attaches `AGENTS.md` and `.agents/rules/project-context.md`. To load a specific department skill into Aider's context window, run:
  ```text
  /read .agents/skills/engineering-backend-architect/SKILL.md
  ```

---

## 12. Continue.dev

### Installed Files
- `.continue/rules/software-company.md` — Workspace rule automatically injected into Continue's system prompt.
- `AGENTS.md` & `.agents/skills/*/SKILL.md` — Core skills and project context.

### Setup Command
```bash
npx github:abdelrahman-elkot/universal-ai-software-company . --agent continue
```

---

## 13. Zed AI

### Installed Files
- `.rules` & `AGENTS.md` — Root rule files automatically recognized by Zed AI Assistant.
- `.agents/rules/project-context.md` & `.agents/skills/*/SKILL.md` — Project context and 34 skills.

### Setup Command
```bash
npx github:abdelrahman-elkot/universal-ai-software-company . --agent zed
```

---

## 14. Trae IDE

### Installed Files
- `.trae/rules/project_rules.md` — Native Trae IDE project rules file.
- `AGENTS.md` & `.agents/skills/*/SKILL.md` — Core skills and project context.

### Setup Command
```bash
npx github:abdelrahman-elkot/universal-ai-software-company . --agent trae
```

---

## 15. Kilo Code

### Installed Files
- `.kilocode/rules/software-company.md` & `.kilocodemodes` — Native Kilo Code workspace rules and custom orchestrator/department modes.
- `AGENTS.md` & `.agents/skills/*/SKILL.md` — Core skills and project context.

### Setup Command
```bash
npx github:abdelrahman-elkot/universal-ai-software-company . --agent kilocode
```

---

## 16. Block Goose

### Installed Files
- `.goosehints` — Native Block Goose context hints file pointing to `AGENTS.md`, `.agents/rules/project-context.md`, and `.agents/skills/`.
- `AGENTS.md` & `.agents/skills/*/SKILL.md` — Core skills and project context.

### Setup Command
```bash
npx github:abdelrahman-elkot/universal-ai-software-company . --agent goose
```
