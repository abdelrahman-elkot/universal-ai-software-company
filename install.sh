#!/usr/bin/env bash
# ==============================================================================
# Universal AI Software Company Installer (macOS / Linux / Git Bash)
# Repository: https://github.com/abdelrahman-elkot/universal-ai-software-company
#
# Installs the 11 Department Lead Subagents, 34 Core Technical Skills, and
# 5-Phase Company Pipeline into any project for 16+ AI Coding Tools, IDEs & CLIs:
#   antigravity, claude, opencode, cursor, windsurf, copilot, cline, roo,
#   gemini, codex, aider, continue, zed, trae, kilo, goose (or 'all')
#
# Usage:
#   ./install.sh [TARGET_DIR] [all|cursor,claude,copilot,...]
# ==============================================================================

set -euo pipefail

TARGET_DIR="${1:-.}"
AGENT_MODE="${2:-all}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

mkdir -p "$TARGET_DIR"
DEST="$(cd "$TARGET_DIR" && pwd)"

echo "================================================================================"
echo "  Universal AI Software Company OS Installer (11 Depts | 34 Skills | 16+ Tools)"
echo "  Target Project : $DEST"
echo "  Agent Mode     : $AGENT_MODE"
echo "================================================================================"

has_agent() {
  local target="$1"
  local mode_lower
  mode_lower="$(echo "$AGENT_MODE" | tr '[:upper:]' '[:lower:]')"
  if [[ "$mode_lower" == "all" || ",$mode_lower," == *",$target,"* ]]; then
    return 0
  fi
  return 1
}

# 1. Core .agents/ folder & AGENTS.md
mkdir -p "$DEST/.agents/skills" "$DEST/.agents/rules"
cp -R "$SCRIPT_DIR/.agents/skills/"* "$DEST/.agents/skills/"

if [ ! -f "$DEST/.agents/rules/project-context.md" ]; then
  cp "$SCRIPT_DIR/.agents/rules/project-context.md" "$DEST/.agents/rules/project-context.md"
  echo "[+] Created .agents/rules/project-context.md template"
else
  echo "[i] Preserved existing .agents/rules/project-context.md"
fi

cp "$SCRIPT_DIR/AGENTS.md" "$DEST/AGENTS.md"
echo "[+] Installed AGENTS.md + 34 Core Technical Skills (.agents/skills/)"

# 2. Google Antigravity IDE
if has_agent "antigravity"; then
  mkdir -p "$DEST/.agents/agents" "$DEST/.agents/plugins/software-company-team"
  cp -R "$SCRIPT_DIR/.agents/agents/"* "$DEST/.agents/agents/"
  cp -R "$SCRIPT_DIR/.agents/plugins/software-company-team/"* "$DEST/.agents/plugins/software-company-team/"
  echo "[+] Installed Google Antigravity (.agents/agents/, .agents/plugins/software-company-team/)"
fi

# 3. Anthropic Claude Code
if has_agent "claude"; then
  mkdir -p "$DEST/.claude/agents" "$DEST/.claude/skills"
  cp -R "$SCRIPT_DIR/.claude/agents/"* "$DEST/.claude/agents/"
  cp -R "$SCRIPT_DIR/.claude/skills/"* "$DEST/.claude/skills/"
  cp "$SCRIPT_DIR/CLAUDE.md" "$DEST/CLAUDE.md"
  echo "[+] Installed Claude Code (.claude/agents/, .claude/skills/, CLAUDE.md)"
fi

# 4. OpenCode CLI
if has_agent "opencode"; then
  mkdir -p "$DEST/.opencode/agent"
  cp -R "$SCRIPT_DIR/.opencode/agent/"* "$DEST/.opencode/agent/"
  echo "[+] Installed OpenCode (.opencode/agent/, AGENTS.md)"
fi

# 5. Cursor IDE
if has_agent "cursor"; then
  mkdir -p "$DEST/.cursor/rules"
  cp "$SCRIPT_DIR/.cursor/rules/software-company.mdc" "$DEST/.cursor/rules/software-company.mdc"
  cp "$SCRIPT_DIR/.cursorrules" "$DEST/.cursorrules"
  echo "[+] Installed Cursor (.cursor/rules/software-company.mdc, .cursorrules)"
fi

# 6. Windsurf (Codeium)
if has_agent "windsurf"; then
  mkdir -p "$DEST/.windsurf/rules"
  cp "$SCRIPT_DIR/.windsurf/rules/software-company.md" "$DEST/.windsurf/rules/software-company.md"
  cp "$SCRIPT_DIR/.windsurfrules" "$DEST/.windsurfrules"
  echo "[+] Installed Windsurf (.windsurf/rules/software-company.md, .windsurfrules)"
fi

# 7. GitHub Copilot
if has_agent "copilot"; then
  mkdir -p "$DEST/.github/agents"
  cp "$SCRIPT_DIR/.github/copilot-instructions.md" "$DEST/.github/copilot-instructions.md"
  cp -R "$SCRIPT_DIR/.github/agents/"* "$DEST/.github/agents/"
  echo "[+] Installed GitHub Copilot (.github/copilot-instructions.md, .github/agents/*.agent.md)"
fi

# 8. Cline
if has_agent "cline"; then
  mkdir -p "$DEST/.clinerules"
  cp "$SCRIPT_DIR/.clinerules/software-company.md" "$DEST/.clinerules/software-company.md"
  echo "[+] Installed Cline (.clinerules/software-company.md)"
fi

# 9. Roo Code
if has_agent "roo"; then
  mkdir -p "$DEST/.roo/rules"
  cp "$SCRIPT_DIR/.roo/rules/software-company.md" "$DEST/.roo/rules/software-company.md"
  cp "$SCRIPT_DIR/.roorules" "$DEST/.roorules"
  echo "[+] Installed Roo Code (.roo/rules/software-company.md, .roorules)"
fi

# 10. Google Gemini CLI
if has_agent "gemini"; then
  mkdir -p "$DEST/.gemini"
  cp "$SCRIPT_DIR/GEMINI.md" "$DEST/GEMINI.md"
  cp "$SCRIPT_DIR/.gemini/settings.json" "$DEST/.gemini/settings.json"
  echo "[+] Installed Google Gemini CLI (GEMINI.md, .gemini/settings.json)"
fi

# 11. OpenAI Codex CLI
if has_agent "codex"; then
  mkdir -p "$DEST/.codex"
  cp "$SCRIPT_DIR/.codex/instructions.md" "$DEST/.codex/instructions.md"
  echo "[+] Installed OpenAI Codex CLI (.codex/instructions.md)"
fi

# 12. Aider CLI
if has_agent "aider"; then
  cp "$SCRIPT_DIR/.aider.conf.yml" "$DEST/.aider.conf.yml"
  echo "[+] Installed Aider CLI (.aider.conf.yml)"
fi

# 13. Continue.dev
if has_agent "continue"; then
  mkdir -p "$DEST/.continue/rules"
  cp "$SCRIPT_DIR/.continue/rules/software-company.md" "$DEST/.continue/rules/software-company.md"
  echo "[+] Installed Continue.dev (.continue/rules/software-company.md)"
fi

# 14. Zed Editor AI
if has_agent "zed"; then
  cp "$SCRIPT_DIR/.rules" "$DEST/.rules"
  echo "[+] Installed Zed Editor AI (.rules)"
fi

# 15. Trae IDE
if has_agent "trae"; then
  mkdir -p "$DEST/.trae/rules"
  cp "$SCRIPT_DIR/.trae/rules/project_rules.md" "$DEST/.trae/rules/project_rules.md"
  echo "[+] Installed Trae IDE (.trae/rules/project_rules.md)"
fi

# 16. Kilo Code
if has_agent "kilo"; then
  mkdir -p "$DEST/.kilocode/rules"
  cp "$SCRIPT_DIR/.kilocode/rules/software-company.md" "$DEST/.kilocode/rules/software-company.md"
  echo "[+] Installed Kilo Code (.kilocode/rules/software-company.md)"
fi

# 17. Block Goose
if has_agent "goose"; then
  cp "$SCRIPT_DIR/.goosehints" "$DEST/.goosehints"
  echo "[+] Installed Block Goose (.goosehints)"
fi

echo ""
echo "================================================================================"
echo "  Installation Complete! Next step inside your AI Coding Agent / IDE:"
echo '  Prompt: "Initialize project context from my repo and start the 5-Phase Company Pipeline."'
echo "================================================================================"
