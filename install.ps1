<#
.SYNOPSIS
    Universal AI Software Company Installer (Windows PowerShell)
    Repository: https://github.com/abdelrahman-elkot/universal-ai-software-company

    Installs the 11 Department Lead Subagents, 34 Core Technical Skills, and 5-Phase Company Pipeline
    into any target project directory for 16+ AI Coding Tools, IDEs & CLIs:
    antigravity, claude, opencode, cursor, windsurf, copilot, cline, roo,
    gemini, codex, aider, continue, zed, trae, kilo, goose (or "all").

.EXAMPLE
    .\install.ps1 -TargetDir "C:\path\to\my-project" -Agent "all"
    .\install.ps1 -TargetDir "." -Agent "cursor,claude,copilot"
    .\install.ps1 -TargetDir "." -Agent "windsurf"
#>

param(
    [string]$TargetDir = ".",
    [string]$Agent = "all",
    [switch]$ForceOverwriteContext = $false
)

$ErrorActionPreference = "Stop"
$SourceDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ResolvedTarget = Resolve-Path $TargetDir -ErrorAction SilentlyContinue
if (-not $ResolvedTarget) {
    New-Item -ItemType Directory -Force -Path $TargetDir | Out-Null
    $ResolvedTarget = Resolve-Path $TargetDir
}
$Dest = $ResolvedTarget.Path

$ValidAgents = @(
    "all", "antigravity", "claude", "opencode", "cursor", "windsurf",
    "copilot", "cline", "roo", "gemini", "codex", "aider",
    "continue", "zed", "trae", "kilo", "goose"
)

$RequestedAgents = $Agent.ToLower().Split(",") | ForEach-Object { $_.Trim() } | Where-Object { $_ -ne "" }
foreach ($req in $RequestedAgents) {
    if ($req -notin $ValidAgents) {
        throw "Invalid -Agent target '$req'. Supported values: $($ValidAgents -join ', ')"
    }
}

function Test-AgentSelected([string]$Name) {
    return ($RequestedAgents -contains "all") -or ($RequestedAgents -contains $Name)
}

Write-Host "================================================================================" -ForegroundColor Cyan
Write-Host "  Universal AI Software Company OS Installer (11 Depts | 34 Skills | 16+ Tools)" -ForegroundColor Cyan
Write-Host "  Target Project : $Dest" -ForegroundColor White
Write-Host "  Agent Mode     : $($RequestedAgents -join ', ')" -ForegroundColor White
Write-Host "================================================================================" -ForegroundColor Cyan

# 1. Core .agents/ folder & AGENTS.md
New-Item -ItemType Directory -Force -Path "$Dest\.agents\skills" | Out-Null
New-Item -ItemType Directory -Force -Path "$Dest\.agents\rules" | Out-Null
Copy-Item -Recurse -Force "$SourceDir\.agents\skills\*" "$Dest\.agents\skills\"

$ContextDest = "$Dest\.agents\rules\project-context.md"
if ((-not (Test-Path $ContextDest)) -or $ForceOverwriteContext) {
    Copy-Item -Force "$SourceDir\.agents\rules\project-context.md" $ContextDest
    Write-Host "[+] Created .agents/rules/project-context.md template" -ForegroundColor Green
} else {
    Write-Host "[i] Preserved existing .agents/rules/project-context.md" -ForegroundColor Yellow
}

Copy-Item -Force "$SourceDir\AGENTS.md" "$Dest\AGENTS.md"
Write-Host "[+] Installed AGENTS.md + 34 Core Technical Skills (.agents/skills/)" -ForegroundColor Green

# 2. Google Antigravity IDE
if (Test-AgentSelected "antigravity") {
    New-Item -ItemType Directory -Force -Path "$Dest\.agents\agents" | Out-Null
    New-Item -ItemType Directory -Force -Path "$Dest\.agents\plugins\software-company-team" | Out-Null
    Copy-Item -Recurse -Force "$SourceDir\.agents\agents\*" "$Dest\.agents\agents\"
    Copy-Item -Recurse -Force "$SourceDir\.agents\plugins\software-company-team\*" "$Dest\.agents\plugins\software-company-team\"
    Write-Host "[+] Installed Google Antigravity (.agents/agents/, .agents/plugins/software-company-team/)" -ForegroundColor Green
}

# 3. Anthropic Claude Code
if (Test-AgentSelected "claude") {
    New-Item -ItemType Directory -Force -Path "$Dest\.claude\agents" | Out-Null
    New-Item -ItemType Directory -Force -Path "$Dest\.claude\skills" | Out-Null
    Copy-Item -Recurse -Force "$SourceDir\.claude\agents\*" "$Dest\.claude\agents\"
    Copy-Item -Recurse -Force "$SourceDir\.claude\skills\*" "$Dest\.claude\skills\"
    Copy-Item -Force "$SourceDir\CLAUDE.md" "$Dest\CLAUDE.md"
    Write-Host "[+] Installed Claude Code (.claude/agents/, .claude/skills/, CLAUDE.md)" -ForegroundColor Green
}

# 4. OpenCode CLI
if (Test-AgentSelected "opencode") {
    New-Item -ItemType Directory -Force -Path "$Dest\.opencode\agent" | Out-Null
    Copy-Item -Recurse -Force "$SourceDir\.opencode\agent\*" "$Dest\.opencode\agent\"
    Write-Host "[+] Installed OpenCode (.opencode/agent/, AGENTS.md)" -ForegroundColor Green
}

# 5. Cursor IDE
if (Test-AgentSelected "cursor") {
    New-Item -ItemType Directory -Force -Path "$Dest\.cursor\rules" | Out-Null
    Copy-Item -Force "$SourceDir\.cursor\rules\software-company.mdc" "$Dest\.cursor\rules\software-company.mdc"
    Copy-Item -Force "$SourceDir\.cursorrules" "$Dest\.cursorrules"
    Write-Host "[+] Installed Cursor (.cursor/rules/software-company.mdc, .cursorrules)" -ForegroundColor Green
}

# 6. Windsurf (Codeium)
if (Test-AgentSelected "windsurf") {
    New-Item -ItemType Directory -Force -Path "$Dest\.windsurf\rules" | Out-Null
    Copy-Item -Force "$SourceDir\.windsurf\rules\software-company.md" "$Dest\.windsurf\rules\software-company.md"
    Copy-Item -Force "$SourceDir\.windsurfrules" "$Dest\.windsurfrules"
    Write-Host "[+] Installed Windsurf (.windsurf/rules/software-company.md, .windsurfrules)" -ForegroundColor Green
}

# 7. GitHub Copilot
if (Test-AgentSelected "copilot") {
    New-Item -ItemType Directory -Force -Path "$Dest\.github\agents" | Out-Null
    Copy-Item -Force "$SourceDir\.github\copilot-instructions.md" "$Dest\.github\copilot-instructions.md"
    Copy-Item -Recurse -Force "$SourceDir\.github\agents\*" "$Dest\.github\agents\"
    Write-Host "[+] Installed GitHub Copilot (.github/copilot-instructions.md, .github/agents/*.agent.md)" -ForegroundColor Green
}

# 8. Cline
if (Test-AgentSelected "cline") {
    New-Item -ItemType Directory -Force -Path "$Dest\.clinerules" | Out-Null
    Copy-Item -Force "$SourceDir\.clinerules\software-company.md" "$Dest\.clinerules\software-company.md"
    Write-Host "[+] Installed Cline (.clinerules/software-company.md)" -ForegroundColor Green
}

# 9. Roo Code
if (Test-AgentSelected "roo") {
    New-Item -ItemType Directory -Force -Path "$Dest\.roo\rules" | Out-Null
    Copy-Item -Force "$SourceDir\.roo\rules\software-company.md" "$Dest\.roo\rules\software-company.md"
    Copy-Item -Force "$SourceDir\.roorules" "$Dest\.roorules"
    Write-Host "[+] Installed Roo Code (.roo/rules/software-company.md, .roorules)" -ForegroundColor Green
}

# 10. Google Gemini CLI
if (Test-AgentSelected "gemini") {
    New-Item -ItemType Directory -Force -Path "$Dest\.gemini" | Out-Null
    Copy-Item -Force "$SourceDir\GEMINI.md" "$Dest\GEMINI.md"
    Copy-Item -Force "$SourceDir\.gemini\settings.json" "$Dest\.gemini\settings.json"
    Write-Host "[+] Installed Google Gemini CLI (GEMINI.md, .gemini/settings.json)" -ForegroundColor Green
}

# 11. OpenAI Codex CLI
if (Test-AgentSelected "codex") {
    New-Item -ItemType Directory -Force -Path "$Dest\.codex" | Out-Null
    Copy-Item -Force "$SourceDir\.codex\instructions.md" "$Dest\.codex\instructions.md"
    Write-Host "[+] Installed OpenAI Codex CLI (.codex/instructions.md)" -ForegroundColor Green
}

# 12. Aider CLI
if (Test-AgentSelected "aider") {
    Copy-Item -Force "$SourceDir\.aider.conf.yml" "$Dest\.aider.conf.yml"
    Write-Host "[+] Installed Aider CLI (.aider.conf.yml)" -ForegroundColor Green
}

# 13. Continue.dev
if (Test-AgentSelected "continue") {
    New-Item -ItemType Directory -Force -Path "$Dest\.continue\rules" | Out-Null
    Copy-Item -Force "$SourceDir\.continue\rules\software-company.md" "$Dest\.continue\rules\software-company.md"
    Write-Host "[+] Installed Continue.dev (.continue/rules/software-company.md)" -ForegroundColor Green
}

# 14. Zed Editor AI
if (Test-AgentSelected "zed") {
    Copy-Item -Force "$SourceDir\.rules" "$Dest\.rules"
    Write-Host "[+] Installed Zed Editor AI (.rules)" -ForegroundColor Green
}

# 15. Trae IDE
if (Test-AgentSelected "trae") {
    New-Item -ItemType Directory -Force -Path "$Dest\.trae\rules" | Out-Null
    Copy-Item -Force "$SourceDir\.trae\rules\project_rules.md" "$Dest\.trae\rules\project_rules.md"
    Write-Host "[+] Installed Trae IDE (.trae/rules/project_rules.md)" -ForegroundColor Green
}

# 16. Kilo Code
if (Test-AgentSelected "kilo") {
    New-Item -ItemType Directory -Force -Path "$Dest\.kilocode\rules" | Out-Null
    Copy-Item -Force "$SourceDir\.kilocode\rules\software-company.md" "$Dest\.kilocode\rules\software-company.md"
    Write-Host "[+] Installed Kilo Code (.kilocode/rules/software-company.md)" -ForegroundColor Green
}

# 17. Block Goose
if (Test-AgentSelected "goose") {
    Copy-Item -Force "$SourceDir\.goosehints" "$Dest\.goosehints"
    Write-Host "[+] Installed Block Goose (.goosehints)" -ForegroundColor Green
}

Write-Host ""
Write-Host "================================================================================" -ForegroundColor Cyan
Write-Host "  Installation Complete! Next step inside your AI Coding Agent / IDE:" -ForegroundColor Cyan
Write-Host '  Prompt: "Initialize project context from my repo and start the 5-Phase Company Pipeline."' -ForegroundColor White
Write-Host "================================================================================" -ForegroundColor Cyan
