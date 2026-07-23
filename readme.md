<p align="center">
  <img src="https://img.shields.io/badge/Version-3.0-blue" alt="Version 3.0" />
  <a href="https://github.com/aghorbani84/AtelegramPostCreator/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-green" alt="License: MIT" /></a>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Zero_Deps-0D9488" alt="Zero Dependencies" />
  <img src="https://img.shields.io/badge/Offline-Ready-brightgreen" alt="Offline Ready" />
  <img src="https://img.shields.io/badge/RTL-فارسی-9333EA" alt="RTL Persian" />
  <img src="https://img.shields.io/badge/PWA-Ready-5C0D0D" alt="PWA Ready" />
</p>

<h1 align="center">✈️ پست‌ساز تلگرام — Telegram Post Studio</h1>

<p align="center">
  <em>قالب آماده انتخاب کن، متن رو ویرایش کن، عکس اضافه کن و پیش‌نمایش دقیقاً مثل تلگرام ببین.</em><br/>
  <em> Pick a template, edit your text, attach an image, and see a pixel-accurate Telegram preview.</em>
</p>

<p align="center">
  <a href="https://aghorbani84.github.io/AtelegramPostCreator/">🚀 Live App</a> &nbsp;·&nbsp;
  <a href="https://github.com/aghorbani84/AtelegramPostCreator/issues">🐛 Report Bug</a> &nbsp;·&nbsp;
  <a href="https://github.com/aghorbani84/AtelegramPostCreator/issues">✨ Request Feature</a>
</p>

---

## 📑 Table of Contents

- [🧠 About](#-about)
- [✨ Features](#-features)
- [📦 Templates](#-templates)
- [🚀 Quick Start](#-quick-start)
- [📖 Usage Guide](#-usage-guide)
- [🧰 Tech Stack](#-tech-stack)
- [🏗️ Architecture](#️-architecture)
- [🗺️ Roadmap](#️-roadmap)
- [🤝 Contributing](#-contributing)
- [❓ FAQ](#-faq)
- [📄 License](#-license)
- [👤 Author](#-author)

---

## 🧠 About

**AtelegramPostCreator** (Telegram Post Studio) is a **single-file, zero-dependency web application** for creating and previewing Telegram channel posts — directly in your browser.

- 📝 Write or edit post text with rich formatting
- 🖼 Upload images with live preview
- 👁 See exactly how your post will look inside Telegram
- 💾 Auto-saves everything to localStorage
- 🔌 No server, no API keys, no bot tokens, no account required

Built for Persian-speaking content creators and channel admins who want a fast, visual workflow for crafting professional Telegram posts.

## ✨ Features

| Feature | Description |
|---|---|
| 📦 **11 Pre-built Templates** | Launch, Update, Tutorial, News, Discount, Event, Poll, Minimal, Giveaway, Collab, AMA — fill in the blanks and go |
| ✏️ **Rich Text Formatting** | Bold, italic, code, spoiler, inline links — with toolbar buttons |
| 😀 **Emoji Picker** | 30 hand-picked emojis — click to insert at cursor position |
| #️⃣ **Hashtag System** | 16 built-in Persian hashtags + add your own custom tags |
| 🖼 **Multi-Image Upload** | Attach multiple images — carousel preview inside a Telegram-style bubble |
| 📊 **Character Counter** | Live counter with progress bar — toggle between Caption (1,024) and Message (4,096) limits |
| 👁 **Live Telegram Preview** | Pixel-accurate preview: channel name, avatar, subscribers, views, time, reactions |
| ⚙️ **Channel Customization** | Set channel name, emoji avatar, subscriber count, view count, posting time |
| 💬 **Reaction Preview** | Toggle reactions (🔥❤️👍👏🤩🎉) on/off to see how your post looks with engagement |
| 💾 **Auto-Save** | All changes saved to `localStorage` — resume your draft even after closing the browser |
| 📋 **Copy to Clipboard** | One-click copy — paste directly into Telegram |
| ⬇️ **Download TXT** | Export your post as a UTF-8 text file |
| 📝 **Download MD** | Export as Markdown for Telegram Desktop paste |
| 🖼 **Export PNG** | Export the preview as a PNG screenshot using html2canvas |
| 🌙☀️ **Light/Dark Theme** | Toggle between dark and light themes |
| 🌍 **i18n** | Switch between Persian 🇮🇷 and English 🇬🇧 — UI and templates localize instantly |
| 📱 **PWA** | Service worker + manifest — install as a standalone app, works offline after first load |
| 🔗 **URL Hash Sharing** | Config encoded in the URL hash — share your setup with a link |
| ⏰ **Time Picker** | Native `<input type="time">` picker for post scheduling simulation |
| 🌙 **Dark Glassmorphism UI** | Animated blobs, grid backdrop, glass panels — looks premium |
| 📱 **Fully Responsive** | 2-column on desktop, single-column on mobile/tablet |
| 🔌 **Zero Dependencies** | Pure HTML + CSS + JS — no frameworks, no build step, no Node |

## 📦 Templates

| Template | Persian | Use Case |
|---|---|---|
| 🚀 | رونمایی | Product/app launch announcement |
| 📦 | آپدیت | Version update with changelog |
| 🎓 | آموزش | Step-by-step tutorial |
| 📰 | خبر | Breaking news post |
| 🎁 | تخفیف | Discount / promotional offer |
| 📅 | رویداد | Event announcement |
| ❓ | نظرسنجی | Poll / question for engagement |
| 🎁 | تخفیف ویژه | Exclusive discount / giveaway limited to first N people |
| 🤝 | همکاری | Collaboration / job invitation post |
| 💬 | AMA | Ask Me Anything — Q&A engagement post |
| ✍️ | مینیIMAL | Minimal one-liner |

Each template has `[placeholders]` — replace them with your content, and you're ready to post.

## 🚀 Quick Start

### Option 1 — Use it online (recommended)

Open 👉 **[aghorbani84.github.io/AtelegramPostCreator](https://aghorbani84.github.io/AtelegramPostCreator/)** in your browser. That's it — zero install.

### Option 2 — Use it locally

Just open `index.html` in any modern browser. That's it.

### Option 2 — Clone & run

```bash
# Clone the repository
git clone https://github.com/aghorbani84/AtelegramPostCreator.git
cd AtelegramPostCreator

# Open in browser
# macOS
open index.html
# Linux
xdg-open index.html
# Windows
start index.html
```

> 💡 No `npm install`, no `pip install`, no build step. The entire app is one HTML file (~37 KB) with embedded CSS and JS.

## 📖 Usage Guide

### 1. Pick a Template

Click one of the 8 template buttons in the sidebar. The editor fills with a ready-made structure — replace the `[placeholders]` with your content.

### 2. Edit Your Post

Use the formatting toolbar:
- **B** — Bold (`**text**`)
- **I** — Italic (`__text__`)
- \`code\` — Monospace code (`` `text` ``)
- 🔒 Spoiler — Hidden text (`||text||`)
- 🔗 Link — Inline link (`[text](url)`)

Toggle between **Caption** (1,024 char) and **Message** (4,096 char) limits using the segmented control.

### 3. Add Emojis & Hashtags

Click any emoji in the row to insert it at your cursor. Click a hashtag chip to append it to your post. Use the input field at the bottom to add custom hashtags.

### 4. Upload Images (Optional)

Click the 📷 media area to upload one or more images. They appear in a carousel inside the Telegram-style preview. Click ✕ on any thumbnail to remove it.

### 5. i18n & Theme

- Click 🌙/☀️ in the nav bar to toggle between dark and light themes
- Click 🇮🇷/🇬🇧 to switch the entire UI between Persian and English (templates localize too)

### 6. Customize the Preview

In the **Settings** section, customize:
- Channel name
- Emoji avatar
- Subscriber count
- Post view count
- Posting time
- Toggle reactions on/off

### 7. Export

- **📋 Copy** — copies the raw text to your clipboard, ready to paste into Telegram
- **⬇ Download TXT** — saves the post as a `.txt` file
- **📝 Download MD** — saves as Markdown (`.md`) for Telegram Desktop paste
- **🖼 Export PNG** — renders the preview as a PNG screenshot and downloads it

## 🧰 Tech Stack

| Layer | Technology | Why |
|---|---|---|
| Markup | HTML5 | Semantic, accessible, zero build |
| Styling | Vanilla CSS3 | Light/dark theme via `data-theme` attribute, `color-mix()`, `backdrop-filter`, CSS Grid, custom scrollbars |
| Logic | Vanilla JavaScript (ES2020+) | No framework overhead, fully readable, i18n engine built-in |
| Typography | [Vazirmatn](https://github.com/rastikerdar/vazirmatn) via CDN | Beautiful Persian/Arabic web font |
| Persistence | `localStorage` | Auto-save, auto-restore, zero server |
| PWA | `manifest.json` + `sw.js` | Service worker caches font + app shell, installable |
| PNG Export | [html2canvas](https://html2canvas.hertzen.com/) via CDN | Renders preview to PNG screenshot |

## 🏗️ Architecture

```
┌──────────────────┐   input events   ┌──────────────────┐
│   Control Panel   │ ──────────────▶  │   State Object   │
│  (templates, fmt, │                  │  (text, image,   │
│   emojis, tags,   │                  │   channel, react)│
│   media, config)  │                  └────────┬─────────┘
└──────────────────┘                           │ auto-save
                                               ▼ (400ms debounce)
                                        ┌──────────────┐
                                        │  renderAll() │
                                        │  (pure fn)   │
                                        └──────┬───────┘
                                               │
                                    ┌──────────┼──────────┐
                                    ▼          ▼          ▼
                             ┌───────────┐ ┌──────┐ ┌──────────┐
                             │ TG-style  │ │ Emoji│ │ Counter  │
                             │ Preview   │ │ Row  │ │ + Bar    │
                             └───────────┘ └──────┘ └──────────┘
```

1. Every input updates a single in-memory state object.
2. `renderAll()` rebuilds the preview from scratch (pure function).
3. The preview renders Telegram-accurate HTML: channel bubble, image, formatted caption, reactions, views, time.
4. State auto-saves to `localStorage` with a 400ms debounce.
5. On reload, `loadState()` restores the previous draft.

## 🗺️ Roadmap

- [x] Light theme toggle
- [x] Multiple image attachment support
- [x] Export as PNG screenshot of the preview
- [x] More templates (Giveaway, Collaboration, AMA)
- [x] i18n toggle (Persian 🇮🇷 / English 🇬🇧)
- [x] PWA install + offline caching of CDN assets
- [x] URL hash config sharing (`#config=...`)
- [x] Post scheduling simulation with time picker
- [x] Markdown export (for Telegram Desktop paste)

PRs welcome for any of the above — see [Contributing](#-contributing).

## 🤝 Contributing

Contributions make the open-source community such an amazing place to learn, inspire, and create. Any contribution you make is greatly appreciated.

1. 🍴 **Fork** the repository
2. 🌿 Create your feature branch — `git checkout -b feature/amazing-thing`
3. ✏️ **Commit** your changes — `git commit -m 'feat: add amazing thing'`
4. 🚀 **Push** to the branch — `git push origin feature/amazing-thing`
5. 🎯 Open a **Pull Request**

Please follow [Conventional Commits](https://www.conventionalcommits.org/) and keep PRs focused on a single concern. For major changes, open an issue first so we can discuss the design.

## ❓ FAQ

**Q: Do I need to install anything?**
A: No. Open `index.html` in any modern browser. That's the whole setup.

**Q: Does it send my data anywhere?**
A: No. Everything runs locally in your browser. Network requests include the Vazirmatn font CDN, html2canvas CDN (for PNG export), and the service worker cache — no telemetry, no analytics.

**Q: How does the theme toggle work?**
A: Click 🌙/☀️ in the nav bar. The entire UI toggles between dark and light themes, persisted in localStorage across sessions.

**Q: Can I switch the UI language?**
A: Yes. Click the 🇮🇷/🇬🇧 button in the nav bar to switch between Persian (RTL) and English (LTR). All labels, templates, placeholders, and toasts localize instantly.

**Q: How do I share my configuration?**
A: Your current text and channel settings are encoded in the URL hash. Copy the URL from your browser's address bar — anyone who opens it will see your setup.

**Q: Can I use this offline?**
A: Yes. Open the app once to cache the service worker and fonts. After that, it works entirely offline. You can also install it as a PWA ("Add to Home Screen").

**Q: Where is my data saved?**
A: In your browser's `localStorage`. Close the tab, reopen it later — your draft is still there.

**Q: Can I use this for group posts too?**
A: Absolutely. The preview is cosmetic — the text and formatting work for any Telegram context (channels, groups, DMs).

**Q: Why is the UI in Persian?**
A: It's built primarily for Persian-speaking content creators. The post text itself can be in any language.

**Q: The preview looks slightly different from Telegram.**
A: The preview mimics Telegram's dark theme. Minor differences (exact font, spacing) are expected; the structure, formatting, and badges render identically.

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for the full text.

> TL;DR — do whatever you want with it, just keep the copyright notice.

## 👤 Author

**Abolfazl Ghorbani** — Software Engineer · Flutter × Rust

[![GitHub](https://img.shields.io/badge/🐙_GitHub-@aghorbani84-black?logo=github)](https://github.com/aghorbani84)
[![Website](https://img.shields.io/badge/🌐_Website-abolfazlghorbani84.ir-blue)](https://abolfazlghorbani84.ir)
[![YouTube](https://img.shields.io/badge/▶️_YouTube-@abolfazl_ghorbani-red?logo=youtube)](https://youtube.com/@abolfazl_ghorbani)
[![Email](https://img.shields.io/badge/📧_Email-abolfazlghorbani369@proton.me-purple)](mailto:abolfazlghorbani369@proton.me)

---

<p align="center">
  Made with ❤️ for all content creators · <b>Telegram Post Studio</b> ✈️<br/>
  © 2026 — Released under the MIT License
</p>
