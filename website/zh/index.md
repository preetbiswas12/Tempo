---
layout: home
head:
  - - link
    - rel: canonical
      href: https://opencoworkai.github.io/open-cowork/zh/
  - - link
    - rel: alternate
      hreflang: en
      href: https://opencoworkai.github.io/open-cowork/
  - - link
    - rel: alternate
      hreflang: zh-CN
      href: https://opencoworkai.github.io/open-cowork/zh/
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://opencoworkai.github.io/open-cowork/

hero:
  name: Open Cowork
  text: Open-source AI Agent Desktop App
  tagline: One-click install for Windows & macOS. Multi-model support, VM sandbox isolation, built-in Skills system, MCP integration — no coding required.
  image:
    src: /logo.png
    alt: Open Cowork Logo
  actions:
    - theme: brand
      text: Download Now
      link: https://github.com/OpenCoworkAI/open-cowork/releases
    - theme: alt
      text: GitHub Repository
      link: https://github.com/OpenCoworkAI/open-cowork

features:
  - icon: 🚀
    title: One-click install, ready to use
    details: Provides pre-built installers for Windows (.exe) and macOS (.dmg), also supports Homebrew installation. No terminal or programming knowledge required.
  - icon: 🤖
    title: Flexible multi-model support
    details: Supports Claude, GPT, Gemini, DeepSeek, Zhipu GLM, MiniMax, Kimi, and any OpenAI-compatible API.
  - icon: 🔒
    title: VM-level security isolation
    details: VM-based isolation using WSL2 (Windows) and Lima (macOS), all commands execute in a secure Linux environment, protecting the host system.
  - icon: 🧰
    title: Built-in Skills system
    details: Generate PPTX, DOCX, XLSX, and PDF documents with one click. Supports custom skill development with the built-in skill-creator toolkit.
  - icon: 🔌
    title: MCP external tool integration
    details: Connect to browsers, Notion, and other desktop applications via the MCP protocol, extending AI capabilities beyond file management and coding.
  - icon: 🖥️
    title: GUI automation
    details: Can control and operate desktop GUI applications on your computer. Recommended to use the Gemini-3-Pro model for best results.
  - icon: 📡
    title: Remote control
    details: Send commands and receive results through Feishu and Slack, enabling cross-platform workflow automation.
  - icon: 🛡️
    title: Free and open source
    details: Open source under the MIT license, fully transparent code. All data runs locally with no telemetry and no data sent to any external server.
---

<style>
.faq-section {
  max-width: 800px;
  margin: 0 auto;
  padding: 48px 24px;
}
.faq-section h2 {
  text-align: center;
  font-size: 2em;
  margin-bottom: 32px;
}
.faq-item {
  margin-bottom: 24px;
}
.faq-item h3 {
  font-size: 1.1em;
  margin-bottom: 8px;
}
.faq-item p {
  color: var(--vp-c-text-2);
  line-height: 1.7;
}

.comparison-section {
  max-width: 700px;
  margin: 0 auto;
  padding: 32px 24px 48px;
}
.comparison-section h2 {
  text-align: center;
  font-size: 2em;
  margin-bottom: 24px;
}
.comparison-section table {
  width: 100%;
  border-collapse: collapse;
}
.comparison-section th, .comparison-section td {
  padding: 12px 16px;
  border: 1px solid var(--vp-c-divider);
  text-align: center;
}
.comparison-section th {
  background: var(--vp-c-bg-soft);
}

.install-section {
  max-width: 700px;
  margin: 0 auto;
  padding: 32px 24px;
}
.install-section h2 {
  text-align: center;
  font-size: 2em;
  margin-bottom: 24px;
}

.models-section {
  max-width: 700px;
  margin: 0 auto;
  padding: 32px 24px;
}
.models-section h2 {
  text-align: center;
  font-size: 2em;
  margin-bottom: 24px;
}
.models-section table {
  width: 100%;
  border-collapse: collapse;
}
.models-section th, .models-section td {
  padding: 10px 14px;
  border: 1px solid var(--vp-c-divider);
  text-align: left;
}
.models-section th {
  background: var(--vp-c-bg-soft);
}
</style>

<div class="comparison-section">

## Feature Comparison

|                 | MCP & Skills | Remote Control | GUI Automation |
| --------------- | :----------: | :------------: | :------------: |
| Claude Cowork   |      ✓       |       ✗        |       ✗        |
| **Open Cowork** |    **✓**     |     **✓**      |     **✓**      |

</div>

<div class="models-section">

## Supported AI Models

| Provider       | Base URL                                 | Recommended Model |
| -------------- | ---------------------------------------- | ----------------- |
| **OpenRouter** | `https://openrouter.ai/api`              | claude-4-5-sonnet |
| **Anthropic**  | Default                                  | claude-4-5-sonnet |
| **Zhipu AI**   | `https://open.bigmodel.cn/api/anthropic` | glm-4.7           |
| **MiniMax**    | `https://api.minimaxi.com/anthropic`     | minimax-m2        |
| **Kimi**       | `https://api.kimi.com/coding/`           | kimi-k2           |

</div>

<div class="install-section">

## Quick Install

**macOS (Homebrew)**

```bash
brew tap OpenCoworkAI/tap
brew install --cask --no-quarantine open-cowork
```

**Windows / macOS** — [Go to downloads page →](https://github.com/OpenCoworkAI/open-cowork/releases)

</div>

<div class="faq-section">

## FAQ

<div class="faq-item">

### What is Open Cowork?

Open Cowork is a free, open-source AI agent desktop application that wraps AI models (Claude, GPT, Gemini, DeepSeek, etc.) into a graphical interface, providing one-click installers for Windows and macOS with no command line or programming knowledge required.

</div>

<div class="faq-item">

### Which AI models are supported?

Supports Claude (via Anthropic or OpenRouter), OpenAI-compatible APIs, and models including Zhipu GLM, MiniMax, Kimi, and more. Any provider offering an OpenAI-compatible API can be configured.

</div>

<div class="faq-item">

### Is it free?

Open Cowork itself is completely free and open source under the MIT license. You only pay for API calls to your chosen AI model provider.

</div>

<div class="faq-item">

### How does sandbox isolation work?

Open Cowork uses WSL2 (Windows) or Lima (macOS) to execute all AI commands inside an isolated Linux virtual machine. Even if the AI makes a mistake, your host file system remains unaffected.

</div>

<div class="faq-item">

### Is my data secure?

Open Cowork runs entirely locally — your files stay within your workspace. The only external communication is with the AI model API you configure. No data is sent to Open Cowork servers.

</div>

<div class="faq-item">

### Does it support Linux?

Currently provides pre-built installers for Windows and macOS. Linux users can build from source — see the [GitHub repository](https://github.com/OpenCoworkAI/open-cowork) for details.

</div>

</div>
