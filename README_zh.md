<p align="center">
  <img src="resources/logo.png" alt="Open Cowork Logo" width="280" />
</p>

<h1 align="center">🚀 Open Cowork: Your Personal AI Agent Desktop App</h1>

<p align="center">
  • Open-source implementation of Claude Cowork • One-click install
</p>

<p align="center">
  <a href="./README.md">English Docs</a> •
  <a href="#key-features">Key Features</a> •
  <a href="#demo">Demo</a> •
  <a href="#download-and-install">Download & Install</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#skills-library">Skills Library</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Platform-Windows%20%7C%20macOS-blue" alt="Platform" />
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License" />
  <img src="https://img.shields.io/badge/Node.js-18+-brightgreen" alt="Node.js" />
  <a href="https://discord.gg/pynjtQDf"><img src="https://img.shields.io/discord/1493588403260883078?logo=discord&label=Discord&color=5865F2" alt="Discord" /></a>
  <a href="#join-the-community"><img src="https://img.shields.io/badge/WeChat-WeChat%20Group-07C160?logo=wechat&logoColor=white" alt="WeChat" /></a>
</p>

---

Open Cowork is a free, open-source AI agent desktop application for Windows and macOS with one-click installation — no coding required. It wraps Claude Code, OpenAI, Gemini, DeepSeek, and other AI models into a user-friendly GUI. Key capabilities include VM-level sandbox isolation (WSL2 on Windows, Lima on macOS), a built-in Skills system for generating PPTX, DOCX, XLSX, and PDF documents, MCP (Model Context Protocol) integration for connecting to browsers, Notion, and other desktop apps, GUI automation via computer use, and remote control through Feishu (Lark) and Slack. Open Cowork is the open-source implementation of Claude Cowork, designed to make AI-powered desktop automation accessible to everyone.

---

## 📖 Introduction

**Open Cowork** is an open-source implementation of **Claude Cowork**, with one-click installers for **Windows** and **macOS**—no coding required.

It provides a sandboxed workspace where AI can manage files, generate professional outputs (PPTX, DOCX, XLSX, etc.) through our built-in **Skills** system, and **connect to desktop apps via MCP** (browser, Notion, etc.) for better collaboration.

> [!WARNING]
> **Disclaimer**: Open Cowork is an AI collaboration tool. Please exercise caution with its operations, especially when authorizing file modifications or deletions. We support VM-based sandbox isolation, but some operations may still carry risks.

---

<a id="key-features"></a>

## ✨ Key Features

|               | MCP & Skills | Remote Control | GUI Operation |
| ------------- | ------------ | -------------- | ------------- |
| Claude Cowork | ✓            | ✗              | ✗             |
| OpenClaw      | ✓            | ✓              | ✗             |
| OpenCowork    | ✓            | ✓              | ✓             |

- **One-click install, ready to use**: Pre-built installers for Windows and macOS, no environment configuration needed — download and start using immediately.
- **Flexible model support**: Supports **Claude**, **OpenAI-compatible APIs**, and models including **GLM**, **MiniMax**, **Kimi**, and more. Use your OpenRouter, Anthropic, and other API keys with flexible configuration. More models being added continuously!
- **Remote control**: Connect to collaboration platforms like **Feishu** and remote services for workflow automation and cross-platform operations.
- **GUI automation**: Control and operate desktop GUI applications on your computer. **Recommended to use the Gemini-3-Pro model** for the best GUI understanding and control results.
- **Smart file management**: Read, write, and organize files within your workspace.
- **Skills system**: Built-in PPTX, DOCX, PDF, XLSX generation and processing workflows. **Supports adding and removing custom skills.**
- **MCP external service support**: Integrate browsers, Notion, custom apps, and more through **MCP Connectors** to extend AI capabilities.
- **Multimodal interaction**: Drag and drop files and images directly into the input box for seamless multimodal interaction.
- **Real-time tracing**: Observe AI reasoning and tool call processes in the Trace Panel.
- **Secure, controlled workspace**: All operations are restricted to your chosen workspace folder.
- **VM-level security isolation**: VM-based isolation using WSL2 (Windows) and Lima (macOS), all commands execute in an isolated virtual machine, protecting host system security.
- **UI optimization**: Flexible, beautiful UI design, system language switching, comprehensive MCP/Skills/Tools call display.

<a id="demo"></a>

## 🎬 Demo

Watch Open Cowork in action:

### 1. Folder Organization 📂

https://github.com/user-attachments/assets/dbeb0337-2d19-4b5d-a438-5220f2a87ca7

### 2. Generate PPT from File 📊

https://github.com/user-attachments/assets/30299ded-0260-468f-b11d-d282bb9c97f2

### 3. Generate XLSX Spreadsheet from File 📉

https://github.com/user-attachments/assets/f57b9106-4b2c-4747-aecd-a07f78af5dfc

---

<a id="download-and-install"></a>

## 📦 Download and Install

### Option 1: Homebrew (macOS, recommended)

```bash
brew tap OpenCoworkAI/tap
brew install --cask --no-quarantine open-cowork
```

> `--no-quarantine` skips macOS Gatekeeper verification to avoid the "cannot verify developer" popup.

### Option 2: Download Installer

Visit our [Releases page](https://github.com/OpenCoworkAI/open-cowork/releases) to download the latest version.

| Platform                  | File Type |
| ------------------------- | --------- |
| **Windows**               | `.exe`    |
| **macOS** (Apple Silicon) | `.dmg`    |

### Option 3: Build from Source

For developers who want to contribute or do secondary development:

```bash
git clone https://github.com/OpenCoworkAI/open-cowork.git
cd open-cowork
npm install
npm run rebuild
npm run dev
```

Build installer: `npm run build`

### Security Configuration: 🔒 Sandbox Support

Open Cowork provides **multi-level sandbox protection** to ensure system security:

| Level     | Platform | Technology | Description                                        |
| --------- | -------- | ---------- | -------------------------------------------------- |
| **Basic** | All      | Path Guard | File operations restricted to workspace folder     |
| **Enhanced** | Windows | WSL2    | Commands execute in isolated Linux virtual machine |
| **Enhanced** | macOS   | Lima    | Commands execute in isolated Linux virtual machine |

- **Windows (WSL2)**: When WSL2 is detected, all Bash commands are automatically routed to the Linux VM with bidirectional workspace sync.
- **macOS (Lima)**: After installing [Lima](https://lima-vm.io/) (`brew install lima`), commands run in an Ubuntu VM with `/Users` mounted.
- **Fallback mode**: If no VM is available, commands run on the host with path-based restrictions.

**Configuration (optional, recommended)**

- **Windows**: If WSL2 is already installed, it will be auto-detected. [Install WSL2](https://docs.microsoft.com/en-us/windows/wsl/install)

- **macOS**:
  If Lima is already installed, it will be auto-detected. Lima installation command:

```bash
brew install lima
# Open Cowork automatically creates and manages the Lima VM (internal Lima instance name: 'claude-sandbox')
```

---

<a id="quick-start"></a>

## 🚀 Quick Start

### 1. Get an API Key

You need an API Key to power the Agent. We support **OpenRouter**, **Anthropic**, and several high-value model providers.

| Provider       | Get Key / Coding Plan                                                   | Base URL (required)                      | Recommended Model    |
| -------------- | ----------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| **OpenRouter** | [OpenRouter](https://openrouter.ai/)                                    | `https://openrouter.ai/api`              | `claude-4-5-sonnet`  |
| **Anthropic**  | [Anthropic Console](https://console.anthropic.com/)                     | Default                                  | `claude-4-5-sonnet`  |
| **Zhipu AI**   | [GLM Coding Plan](https://bigmodel.cn/glm-coding)                       | `https://open.bigmodel.cn/api/anthropic` | `glm-4.7`, `glm-4.6` |
| **MiniMax**    | [MiniMax Coding Plan](https://platform.minimaxi.com/subscribe/coding-plan) | `https://api.minimaxi.com/anthropic`  | `minimax-m2`         |
| **Kimi**       | [Kimi Coding Plan](https://www.kimi.com/membership/pricing)             | `https://api.kimi.com/coding/`           | `kimi-k2`            |

### 2. Configure the App

1. Open the app, click the ⚙️ **Settings** in the bottom left.
2. Enter your **API Key**.
3. **Key step**: Modify the **Base URL** according to the table above (e.g., if using Zhipu/MiniMax, etc.).
4. Enter the **Model** name you want to use.

### 3. Start Collaborating

1. **Select workspace**: Choose a folder and authorize Claude to work within it.
2. **Enter a command**:
   > "Read the financial_report.csv in the current folder and help me generate a PPT summary report with 5 slides."

### 📝 Important Notes

1.  **macOS installation issues**: If you download the DMG directly and get a "cannot verify developer" warning, we recommend using Homebrew to avoid this issue:
    ```bash
    brew tap OpenCoworkAI/tap && brew install --cask --no-quarantine open-cowork
    ```
    Or go to **System Settings > Privacy & Security** and click "Open Anyway".
2.  **Network connectivity**: For online tools like `WebSearch`, you may need to enable your proxy software's "Virtual Network Adapter (TUN mode)" feature for proper access.
3.  **Notion connector usage**: In addition to setting the Notion token, you also need to add a connection on the root page. For more guidance, see https://www.notion.com/help/add-and-manage-connections-with-the-api.

<a id="skills-library"></a>

## 🧰 Skills Library

Open Cowork's built-in skills are located in `.claude/skills/`, and users can add/customize their own skills, including:

- `pptx`: PowerPoint generation
- `docx`: Word document processing
- `pdf`: PDF handling and forms
- `xlsx`: Excel spreadsheet support
- `skill-creator`: Skill development toolkit

---

## 🏗️ Architecture Overview

```
open-cowork/
├── src/
│   ├── main/                    # Electron main process (Node.js)
│   │   ├── index.ts             # Main entry point
│   │   ├── claude/              # Agent SDK and runner
│   │   │   └── agent-runner.ts  # AI agent execution logic
│   │   ├── config/              # Configuration management
│   │   │   └── config-store.ts  # Persistent settings storage
│   │   ├── db/                  # Database layer
│   │   │   └── database.ts      # SQLite/data persistence
│   │   ├── ipc/                 # IPC handlers
│   │   ├── memory/              # Memory management
│   │   │   └── memory-manager.ts
│   │   ├── sandbox/             # Security and path resolution
│   │   │   └── path-resolver.ts # Sandboxed file access
│   │   ├── session/             # Session management
│   │   │   └── session-manager.ts
│   │   ├── skills/              # Skills loading and management
│   │   │   └── skills-manager.ts
│   │   └── tools/               # Tool execution
│   │       └── tool-executor.ts # Tool call handling
│   ├── preload/                 # Electron preload script
│   │   └── index.ts             # Context bridge setup
│   └── renderer/                # Frontend UI (React + Tailwind)
│       ├── App.tsx              # Root component
│       ├── main.tsx             # React entry
│       ├── components/          # UI components
│       │   ├── ChatView.tsx     # Main chat interface
│       │   ├── ConfigModal.tsx  # Settings dialog
│       │   ├── ContextPanel.tsx # File context display
│       │   ├── MessageCard.tsx  # Chat message component
│       │   ├── PermissionDialog.tsx
│       │   ├── Sidebar.tsx      # Navigation sidebar
│       │   ├── Titlebar.tsx     # Custom window titlebar
│       │   ├── TracePanel.tsx   # AI reasoning trace
│       │   └── WelcomeView.tsx  # Onboarding page
│       ├── hooks/               # Custom React hooks
│       │   └── useIPC.ts        # IPC communication hook
│       ├── store/               # State management
│       │   └── index.ts
│       ├── styles/              # CSS styles
│       │   └── globals.css
│       ├── types/               # TypeScript types
│       │   └── index.ts
│       └── utils/               # Utility functions
├── .claude/
│   └── skills/                  # Default skill definitions
│       ├── pptx/                # PowerPoint generation
│       ├── docx/                # Word document processing
│       ├── pdf/                 # PDF handling and forms
│       ├── xlsx/                # Excel spreadsheet support
│       └── skill-creator/       # Skill development toolkit
├── resources/                   # Static resources (icons, images)
├── electron-builder.yml         # Build configuration
├── vite.config.ts               # Vite bundling config
└── package.json                 # Dependencies and scripts
```

---

## 🗺️ Roadmap

See **[ROADMAP.md](ROADMAP.md)** for details.

**Completed:** Installers · File system sandbox · VM isolation (WSL2/Lima) · Skills (PPTX/DOCX/PDF/XLSX) · MCP connectors · Multi-model support · Rich text input · English/Chinese UI

**Coming soon:** Memory optimization · Linux support · Plugin system · Computer Use · Official release

---

## ❓ FAQ

**What is Open Cowork?**
Open Cowork is a free, open-source desktop application that provides a local AI agent workspace. It wraps AI models (Claude, GPT, Gemini, DeepSeek, etc.) into a graphical interface, providing one-click installers for Windows and macOS with no command line or programming knowledge required.

**What's the difference between Open Cowork and Claude Cowork?**
Open Cowork is the open-source implementation of Claude Cowork, with added multi-model support (not just Claude), GUI automation, Feishu/Slack remote control, and VM-level sandbox isolation. See the [feature comparison table](#key-features) for details.

**Which AI models are supported?**
Supports Claude (via Anthropic or OpenRouter), OpenAI-compatible APIs, and models including Zhipu GLM, MiniMax, Kimi, and more. Any provider offering an OpenAI-compatible API can be configured.

**Is Open Cowork free?**
Yes. Open Cowork itself is completely free and open source under the MIT license. You only pay for API calls to your chosen AI model provider.

**Does it support Linux?**
Currently provides pre-built installers for Windows and macOS. Linux users can build from source — see the [Build from Source](#download-and-install) section for details.

**How does sandbox isolation work?**
Open Cowork provides multi-level security protection: all platforms have basic path restrictions, and Windows and macOS also support VM-level isolation (using WSL2 and Lima respectively). When a VM is enabled, all commands execute in an isolated Linux environment, protecting your host system.

**What are Skills? How do I create custom skills?**
Skills are built-in workflow templates for specific tasks, such as generating PPTX, DOCX, PDF, or XLSX files. Open Cowork ships with default skills in the `.claude/skills/` directory and provides a `skill-creator` tool to help you build custom skills.

**What is MCP? How do I use it?**
MCP (Model Context Protocol) allows AI to connect to external tools and services. Open Cowork supports MCP connectors to integrate browsers, Notion, and other desktop applications, extending AI capabilities beyond file management and coding.

**How do I set up Feishu or Slack remote control?**
Open Cowork supports remote control through Feishu and Slack, allowing you to send commands and receive results on collaboration platforms. Please check the remote control configuration options in the app settings.

**Is my data secure? Will data be sent to external servers?**
Open Cowork runs entirely locally — your files stay within your workspace. The only external communication is with the AI model API you configure (such as Anthropic, OpenRouter). No data is sent to Open Cowork servers.

---

## 🛠️ Contributing

Contributions of any form are welcome! Whether it's new skills, UI fixes, or security improvements:

1. Fork this repository.
2. Create a branch (`git checkout -b feature/NewSkill`).
3. Submit a PR.

---

## 💬 Join the Community

Welcome to join our community:

- **Discord**: [Join Discord Server](https://discord.gg/pynjtQDf) — real-time chat, technical support, and development discussions.
- **WeChat**: Scan the QR code below to join the WeChat group (Chinese community).

<p align="center">
  <img src="resources/WeChat.jpg" alt="WeChat Group" width="200" />
</p>

---

## 📄 License

MIT © Open Cowork Team

---

<p align="center">
  Made with ❤️ by the Open Cowork Team with the help of opus4.5
</p>
