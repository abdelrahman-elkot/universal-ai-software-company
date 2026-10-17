#!/usr/bin/env node
/**
 * Universal AI Software Company OS v2.1.0 — Zero-Dependency Cross-Platform CLI Installer
 * Repository: https://github.com/abdelrahman-elkot/universal-ai-software-company
 *
 * Installs the 11 Autonomous Department Lead Subagents, 34 Core Engineering Skills,
 * Dynamic Squad Assembly, and 5-Phase Company Pipeline into any project for 16+ AI Coding Tools, IDEs & CLIs.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");

const DEPARTMENTS = [
  {
    dept: "01",
    id: "ceo-executive-orchestrator",
    role: "CEO, Chief of Staff & Rule #0 Single Point of Contact Dispatcher (Dynamic Squad Assembly)",
    skills: ["agency-ceo-founder-visionary", "agency-agents-orchestrator", "agency-master-plan-architect"],
  },
  {
    dept: "02",
    id: "product-pmo-lead",
    role: "VP of Product, Technical Program Manager & Frictionless UX/DX Lead",
    skills: ["agency-product-manager", "agency-senior-project-manager", "agency-dx-engineer"],
  },
  {
    dept: "03",
    id: "cto-cloud-architect",
    role: "CTO, Principal Enterprise System Architect & Phase 1 Contract Lock Lead",
    skills: ["agency-cto-vp-engineering", "agency-software-architect", "agency-cloudflare-edge-architect"],
  },
  {
    dept: "04",
    id: "backend-data-engineer",
    role: "Principal High-Scale Backend, Zero-N+1 Database, ACID Locks, Queues & Billing Engineer",
    skills: [
      "agency-backend-architect",
      "agency-database-optimizer",
      "agency-data-engineer",
      "agency-payments-billing-engineer",
    ],
  },
  {
    dept: "05",
    id: "frontend-ux-engineer",
    role: "Principal Bespoke Creative UI/UX & Strict Anti-AI-Slop Frontend Engineer",
    skills: ["agency-frontend-developer", "agency-ux-architect", "agency-ui-designer"],
  },
  {
    dept: "06",
    id: "ai-agentic-engineer",
    role: "Principal AI Systems, Smart Model Router, Hybrid RAG & LLM-as-a-Judge Eval Engineer (Dynamic)",
    skills: ["agency-multi-agent-systems-architect", "agency-rag-pipeline-engineer", "agency-prompt-engineer"],
  },
  {
    dept: "07",
    id: "ai-ml-langchain-automation-lead",
    role: "Principal AI/ML, Stateful LangGraph, LangChain, Multi-Agent & MCP Automation Lead (Dynamic)",
    skills: ["agency-langchain-langgraph-automation-engineer", "agency-ai-engineer", "agency-mcp-builder"],
  },
  {
    dept: "08",
    id: "security-privacy-lead",
    role: "CISO, AppSec, AES-256-GCM/SHA-256 Cryptography, Trust Boundaries & CWE Gatekeeper",
    skills: [
      "agency-security-architect",
      "agency-application-security-engineer",
      "agency-ai-generated-code-security-auditor",
    ],
  },
  {
    dept: "09",
    id: "qa-release-lead",
    role: "Director of QA, 5-Stage Release Gate, Repo/Docs Drift Check & Reality-Checker Certification",
    skills: [
      "agency-qa-release-gate-manager",
      "agency-api-tester",
      "agency-test-automation-engineer",
      "agency-reality-checker",
    ],
  },
  {
    dept: "10",
    id: "devops-sre-lead",
    role: "Lead DevOps, CI/CD, Containers/Cloud, Observability, FinOps & 16-IDE Ecosystem Engineer",
    skills: ["agency-devops-automator", "agency-sre-site-reliability-engineer", "agency-finops-engineer"],
  },
  {
    dept: "11",
    id: "gtm-business-ops-lead",
    role: "VP of DevRel, Mandatory Phase 5 README/Docs Sync & SaaS Pricing/Unit Economics",
    skills: ["agency-technical-writer", "agency-pricing-analyst"],
  },
];

const SKILLS = [
  { id: "agency-ceo-founder-visionary", folder: "executive-ceo-founder", dept: "Dept 01 (CEO)" },
  { id: "agency-agents-orchestrator", folder: "agents-orchestrator", dept: "Dept 01 (CEO)" },
  { id: "agency-master-plan-architect", folder: "specialized-master-plan-architect", dept: "Dept 01 (CEO)" },
  { id: "agency-product-manager", folder: "product-manager", dept: "Dept 02 (Product/PMO)" },
  { id: "agency-senior-project-manager", folder: "project-manager-senior", dept: "Dept 02 (Product/PMO)" },
  { id: "agency-dx-engineer", folder: "product-dx-engineer", dept: "Dept 02 (Product/PMO)" },
  { id: "agency-cto-vp-engineering", folder: "engineering-cto-vp", dept: "Dept 03 (CTO)" },
  { id: "agency-cloudflare-edge-architect", folder: "engineering-cloudflare-edge-architect", dept: "Dept 03 (CTO)" },
  { id: "agency-software-architect", folder: "engineering-software-architect", dept: "Dept 03 (CTO)" },
  { id: "agency-backend-architect", folder: "engineering-backend-architect", dept: "Dept 04 (Backend/Data)" },
  { id: "agency-database-optimizer", folder: "engineering-database-optimizer", dept: "Dept 04 (Backend/Data)" },
  { id: "agency-data-engineer", folder: "engineering-data-engineer", dept: "Dept 04 (Backend/Data)" },
  { id: "agency-payments-billing-engineer", folder: "engineering-payments-billing-engineer", dept: "Dept 04 (Backend/Data)" },
  { id: "agency-frontend-developer", folder: "engineering-frontend-developer", dept: "Dept 05 (Frontend/UX)" },
  { id: "agency-ux-architect", folder: "design-ux-architect", dept: "Dept 05 (Frontend/UX)" },
  { id: "agency-ui-designer", folder: "design-ui-designer", dept: "Dept 05 (Frontend/UX)" },
  { id: "agency-multi-agent-systems-architect", folder: "engineering-multi-agent-systems-architect", dept: "Dept 06 (AI Systems)" },
  { id: "agency-rag-pipeline-engineer", folder: "engineering-rag-pipeline-engineer", dept: "Dept 06 (AI Systems)" },
  { id: "agency-prompt-engineer", folder: "engineering-prompt-engineer", dept: "Dept 06 (AI Systems)" },
  { id: "agency-langchain-langgraph-automation-engineer", folder: "engineering-langchain-langgraph-automation", dept: "Dept 07 (LangGraph/MCP)" },
  { id: "agency-ai-engineer", folder: "engineering-ai-engineer", dept: "Dept 07 (LangGraph/MCP)" },
  { id: "agency-mcp-builder", folder: "specialized-mcp-builder", dept: "Dept 07 (LangGraph/MCP)" },
  { id: "agency-security-architect", folder: "security-architect", dept: "Dept 08 (Security/CISO)" },
  { id: "agency-application-security-engineer", folder: "security-appsec-engineer", dept: "Dept 08 (Security/CISO)" },
  { id: "agency-ai-generated-code-security-auditor", folder: "security-ai-generated-code-auditor", dept: "Dept 08 (Security/CISO)" },
  { id: "agency-qa-release-gate-manager", folder: "testing-release-gate-manager", dept: "Dept 09 (QA/Release)" },
  { id: "agency-api-tester", folder: "testing-api-tester", dept: "Dept 09 (QA/Release)" },
  { id: "agency-test-automation-engineer", folder: "testing-test-automation-engineer", dept: "Dept 09 (QA/Release)" },
  { id: "agency-reality-checker", folder: "testing-reality-checker", dept: "Dept 09 (QA/Release)" },
  { id: "agency-devops-automator", folder: "engineering-devops-automator", dept: "Dept 10 (DevOps/SRE)" },
  { id: "agency-sre-site-reliability-engineer", folder: "engineering-sre", dept: "Dept 10 (DevOps/SRE)" },
  { id: "agency-finops-engineer", folder: "engineering-finops-engineer", dept: "Dept 10 (DevOps/SRE)" },
  { id: "agency-technical-writer", folder: "engineering-technical-writer", dept: "Dept 11 (DevRel/GTM)" },
  { id: "agency-pricing-analyst", folder: "specialized-pricing-analyst", dept: "Dept 11 (DevRel/GTM)" },
];

const AGENT_TARGETS = {
  antigravity: {
    name: "Google Antigravity IDE",
    paths: [".agents/agents", ".agents/plugins/software-company-team"],
    description: "11 native subagents (.agents/agents/) + software-company-team plugin",
  },
  claude: {
    name: "Anthropic Claude Code",
    paths: [".claude/agents", ".claude/skills", "CLAUDE.md"],
    description: "11 subagents (.claude/agents/), 34 skills (.claude/skills/), CLAUDE.md",
  },
  opencode: {
    name: "OpenCode CLI",
    paths: [".opencode/agent"],
    description: "11 native subagents (.opencode/agent/) + AGENTS.md",
  },
  cursor: {
    name: "Cursor IDE",
    paths: [".cursor/rules/software-company.mdc", ".cursorrules"],
    description: "Always-on MDC rule (.cursor/rules/software-company.mdc) + .cursorrules",
  },
  windsurf: {
    name: "Windsurf (Codeium)",
    paths: [".windsurf/rules/software-company.md", ".windsurfrules"],
    description: "Cascade rule (.windsurf/rules/software-company.md) + .windsurfrules",
  },
  copilot: {
    name: "GitHub Copilot",
    paths: [".github/copilot-instructions.md", ".github/agents"],
    description: "Copilot instructions + 11 Custom Agent profiles (.github/agents/*.agent.md)",
  },
  cline: {
    name: "Cline (VS Code)",
    paths: [".clinerules/software-company.md"],
    description: "Workspace rule (.clinerules/software-company.md)",
  },
  roo: {
    name: "Roo Code",
    paths: [".roo/rules/software-company.md", ".roorules"],
    description: "Workspace rule (.roo/rules/software-company.md) + .roorules",
  },
  gemini: {
    name: "Google Gemini CLI",
    paths: ["GEMINI.md", ".gemini/settings.json"],
    description: "GEMINI.md + .gemini/settings.json context loader",
  },
  codex: {
    name: "OpenAI Codex CLI",
    paths: [".codex/instructions.md"],
    description: "Codex instructions (.codex/instructions.md) + AGENTS.md",
  },
  aider: {
    name: "Aider CLI",
    paths: [".aider.conf.yml"],
    description: "Auto-read config (.aider.conf.yml -> AGENTS.md + project-context.md)",
  },
  continue: {
    name: "Continue.dev",
    paths: [".continue/rules/software-company.md"],
    description: "Always-apply rule (.continue/rules/software-company.md)",
  },
  zed: {
    name: "Zed Editor AI",
    paths: [".rules"],
    description: "Native project rules file (.rules)",
  },
  trae: {
    name: "Trae IDE",
    paths: [".trae/rules/project_rules.md"],
    description: "Project rules (.trae/rules/project_rules.md)",
  },
  kilo: {
    name: "Kilo Code",
    paths: [".kilocode/rules/software-company.md"],
    description: "Workspace rule (.kilocode/rules/software-company.md)",
  },
  goose: {
    name: "Block Goose",
    paths: [".goosehints"],
    description: "Project hints file (.goosehints)",
  },
};

const AGENT_ALIASES = {
  kilocode: "kilo",
};

function normalizeAgentKey(rawKey) {
  const k = rawKey.toLowerCase().trim();
  return AGENT_ALIASES[k] || k;
}

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

function printBanner() {
  console.log("================================================================================");
  console.log("  Universal AI Software Company OS v2.1.0");
  console.log("  11 Autonomous Department Lead Agents | 34 Core Skills | 16+ AI IDEs & CLIs");
  console.log("  https://github.com/abdelrahman-elkot/universal-ai-software-company");
  console.log("================================================================================");
}

function printHelp() {
  printBanner();
  console.log(`
USAGE:
  npx github:abdelrahman-elkot/universal-ai-software-company [target-dir] [options]
  uasc [target-dir] [options]

OPTIONS:
  --agent <list>     Install for specific AI tool(s), comma-separated, or 'all' (default: all)
                     Supported: all, ${Object.keys(AGENT_TARGETS).join(", ")} (alias: kilocode)
  --force-context    Overwrite existing .agents/rules/project-context.md with fresh template
  --list, -l         Display all 11 Department Leads, 34 Core Skills & 16 Supported AI Tools
  --doctor, -d       Inspect a project directory and report installed AI tools & skills
  --help, -h         Show this help guide

EXAMPLES:
  # Install everything into current project
  npx github:abdelrahman-elkot/universal-ai-software-company .

  # Install only for Cursor and Claude Code into ./my-saas
  npx github:abdelrahman-elkot/universal-ai-software-company ./my-saas --agent cursor,claude

  # List all 11 departments, 34 skills, and 16 supported AI platforms
  npx github:abdelrahman-elkot/universal-ai-software-company --list

  # Verify installation health in current directory
  npx github:abdelrahman-elkot/universal-ai-software-company --doctor
`);
}

function printList() {
  printBanner();
  console.log("\n1. THE 11 AUTONOMOUS DEPARTMENT LEAD SUBAGENTS");
  console.log("--------------------------------------------------------------------------------");
  console.log(`${"Dept".padEnd(6)} | ${"Subagent ID".padEnd(33)} | ${"Role & Executive Scope"}`);
  console.log("--------------------------------------------------------------------------------");
  for (const d of DEPARTMENTS) {
    console.log(`#${d.dept.padEnd(5)} | ${d.id.padEnd(33)} | ${d.role}`);
  }

  console.log("\n2. THE 34 CORE TECHNICAL SKILLS (.agents/skills/)");
  console.log("--------------------------------------------------------------------------------");
  console.log(`${"#".padEnd(4)} | ${"Skill Identifier".padEnd(47)} | ${"Department"}`);
  console.log("--------------------------------------------------------------------------------");
  SKILLS.forEach((s, idx) => {
    const num = String(idx + 1).padStart(2, "0");
    console.log(`${num.padEnd(4)} | ${s.id.padEnd(47)} | ${s.dept}`);
  });

  console.log("\n3. THE 16 SUPPORTED AI CODING AGENTS, IDEs & CLIs");
  console.log("--------------------------------------------------------------------------------");
  console.log(`${"--agent Flag".padEnd(14)} | ${"AI Tool / IDE / CLI".padEnd(25)} | ${"Installed Native Configs"}`);
  console.log("--------------------------------------------------------------------------------");
  for (const [key, cfg] of Object.entries(AGENT_TARGETS)) {
    const flagLabel = key === "kilo" ? "kilo/kilocode" : key;
    console.log(`${flagLabel.padEnd(14)} | ${cfg.name.padEnd(25)} | ${cfg.paths.join(", ")}`);
  }
  console.log("--------------------------------------------------------------------------------\n");
}

function runDoctor(targetDir) {
  const dest = path.resolve(targetDir);
  printBanner();
  console.log(`\n[Doctor] Inspecting target project: ${dest}\n`);

  const agentsMdExists = fs.existsSync(path.join(dest, "AGENTS.md"));
  const contextPath = path.join(dest, ".agents", "rules", "project-context.md");
  const contextExists = fs.existsSync(contextPath);
  let contextStatus = "MISSING";
  if (contextExists) {
    const content = fs.readFileSync(contextPath, "utf8");
    contextStatus = content.includes("UNINITIALIZED_TEMPLATE")
      ? "TEMPLATE (Ready for Auto-Onboarding)"
      : "INITIALIZED (Bound to Project)";
  }

  let installedSkillsCount = 0;
  for (const s of SKILLS) {
    const skillFile = path.join(dest, ".agents", "skills", s.folder, "SKILL.md");
    if (fs.existsSync(skillFile)) installedSkillsCount++;
  }

  console.log("CORE OPERATING SYSTEM:");
  console.log(`  [${agentsMdExists ? "OK" : "!!"}] AGENTS.md Dispatcher          : ${agentsMdExists ? "Present" : "Missing"}`);
  console.log(`  [${contextExists ? "OK" : "!!"}] .agents/rules/project-context : ${contextStatus}`);
  console.log(`  [${installedSkillsCount === 34 ? "OK" : "!!"}] .agents/skills/ Library       : ${installedSkillsCount}/34 Core Technical Skills installed\n`);

  console.log("AI CODING AGENT / IDE INTEGRATIONS:");
  console.log("--------------------------------------------------------------------------------");
  console.log(`${"Target".padEnd(14)} | ${"Platform".padEnd(25)} | ${"Status".padEnd(12)} | ${"Detected Paths"}`);
  console.log("--------------------------------------------------------------------------------");

  let activePlatforms = 0;
  for (const [key, cfg] of Object.entries(AGENT_TARGETS)) {
    const existing = cfg.paths.filter((p) => fs.existsSync(path.join(dest, p)));
    const isInstalled = existing.length === cfg.paths.length;
    if (isInstalled) activePlatforms++;
    const statusStr = isInstalled ? "INSTALLED" : existing.length > 0 ? "PARTIAL" : "NOT SET";
    console.log(`${key.padEnd(14)} | ${cfg.name.padEnd(25)} | ${statusStr.padEnd(12)} | ${existing.join(", ") || "-"}`);
  }
  console.log("--------------------------------------------------------------------------------");
  console.log(`Summary: ${activePlatforms}/${Object.keys(AGENT_TARGETS).length} AI platforms configured in ${dest}\n`);
}

function parseArgs(argv) {
  const args = argv.slice(2);
  let targetDir = ".";
  let agentArg = "all";
  let mode = "install";
  let forceContext = false;

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--help" || arg === "-h") {
      mode = "help";
    } else if (arg === "--list" || arg === "-l") {
      mode = "list";
    } else if (arg === "--doctor" || arg === "-d") {
      mode = "doctor";
    } else if (arg === "--force-context") {
      forceContext = true;
    } else if (arg === "--agent" || arg === "-a") {
      agentArg = args[++i] || "all";
    } else if (arg.startsWith("--agent=")) {
      agentArg = arg.split("=")[1] || "all";
    } else if (!arg.startsWith("-")) {
      targetDir = arg;
    }
  }

  return { targetDir, agentArg, mode, forceContext };
}

function install(targetDir, agentArg, forceContext) {
  const dest = path.resolve(targetDir);
  const requested = agentArg
    .toLowerCase()
    .split(",")
    .map((s) => normalizeAgentKey(s))
    .filter(Boolean);

  const selectedKeys =
    requested.includes("all") || requested.length === 0
      ? Object.keys(AGENT_TARGETS)
      : [...new Set(requested)].filter((k) => {
          if (!AGENT_TARGETS[k]) {
            console.warn(`[!] Unknown agent target '${k}' ignored. Valid: all, ${Object.keys(AGENT_TARGETS).join(", ")}, kilocode`);
            return false;
          }
          return true;
        });

  if (selectedKeys.length === 0) {
    console.error("[x] No valid agent targets specified. Run with --help for usage.");
    process.exit(1);
  }

  printBanner();
  console.log(`  Target Directory : ${dest}`);
  console.log(`  Selected Agents  : ${selectedKeys.join(", ")}`);
  console.log("================================================================================\n");

  fs.mkdirSync(dest, { recursive: true });

  // 1. Always install Core Engine: AGENTS.md, .agents/skills/ (34 skills), and .agents/rules/project-context.md
  copyRecursive(path.join(ROOT_DIR, ".agents", "skills"), path.join(dest, ".agents", "skills"));
  copyRecursive(path.join(ROOT_DIR, "AGENTS.md"), path.join(dest, "AGENTS.md"));

  const destContext = path.join(dest, ".agents", "rules", "project-context.md");
  if (!fs.existsSync(destContext) || forceContext) {
    copyRecursive(path.join(ROOT_DIR, ".agents", "rules", "project-context.md"), destContext);
    console.log("[+] Created .agents/rules/project-context.md (Active Project Context template)");
  } else {
    console.log("[i] Preserved existing .agents/rules/project-context.md");
  }
  console.log("[+] Installed AGENTS.md + 34 Core Technical Skills (.agents/skills/)");

  // 2. Install each selected platform's files
  for (const key of selectedKeys) {
    const cfg = AGENT_TARGETS[key];
    for (const relPath of cfg.paths) {
      const srcPath = path.join(ROOT_DIR, relPath);
      const dstPath = path.join(dest, relPath);
      if (fs.existsSync(srcPath)) {
        copyRecursive(srcPath, dstPath);
      }
    }
    console.log(`[+] Installed ${cfg.name.padEnd(24)} -> ${cfg.paths.join(", ")}`);
  }

  console.log("\n================================================================================");
  console.log("  Installation Complete!");
  console.log("  Next Step — Open your AI Coding Agent / IDE and run this first prompt:");
  console.log('  "Initialize project context"');
  console.log("================================================================================\n");
}

const { targetDir, agentArg, mode, forceContext } = parseArgs(process.argv);

if (mode === "help") {
  printHelp();
} else if (mode === "list") {
  printList();
} else if (mode === "doctor") {
  runDoctor(targetDir);
} else {
  install(targetDir, agentArg, forceContext);
}
