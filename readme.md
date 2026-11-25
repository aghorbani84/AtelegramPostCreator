<h1 align="center">✈️ Telegram Post Studio <sub>(AtelegramPostCreator)</sub></h1>

<p align="center">
  <em>Pick a template, write your post, attach images, and see a Telegram-style preview — all in the browser.</em><br/>
  <em>قالب آماده انتخاب کن، متن رو ویرایش کن، عکس اضافه کن و پیش‌نمایش مثل تلگرام ببین.</em>
</p>

<p align="center">
  <a href="https://aghorbani84.github.io/AtelegramPostCreator/"><img src="https://img.shields.io/badge/Live_app-GitHub_Pages-222222?logo=githubpages&logoColor=white" alt="Live app on GitHub Pages" /></a>
  <img src="https://img.shields.io/badge/version-3.0-2AABEE" alt="Version 3.0" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/build-none-0D9488" alt="No build step" />
  <img src="https://img.shields.io/badge/UI-FA%20%2F%20EN-9333EA" alt="Persian / English UI" />
</p>

<p align="center">
  <a href="https://aghorbani84.github.io/AtelegramPostCreator/"><strong>🚀 Open the app →</strong></a>
</p>

---

## Overview

Telegram Post Studio is a single-page, client-side tool for drafting Telegram channel posts. It is built primarily for Persian-speaking channel admins and content creators, with an English UI available. There is no server, account, or bot token — everything runs and is saved in your browser.

## Features

- **11 templates** — Launch, Update, Tutorial, News, Discount, Event, Poll, Minimal, Giveaway, Collab, AMA — each with `[placeholders]` to fill in
- **Formatting toolbar** — bold, italic, code, spoiler, and inline links
- **Emoji row** (30 emojis) and **hashtag chips** (16 built-in Persian tags + your own)
- **Multiple images** with a carousel inside the preview
- **Character counter** with a switch between caption (1,024) and message (4,096) limits
- **Telegram-style preview** — channel name, emoji avatar, subscribers, views, time, and toggleable reactions
- **Export** — copy to clipboard, download `.txt` or `.md`, or export the preview as `.png` (html2canvas)
- **Persian / English UI** with RTL/LTR switching; templates are localized too
- **Dark / light theme**
- **Auto-save** to `localStorage` and **shareable links** (draft encoded in the URL hash)
- **PWA basics** — web manifest and a service worker that caches the app shell

## Tech Stack

| Layer | Technology |
|---|---|
| Markup / styles / logic | HTML5, CSS3, vanilla JavaScript — all in `index.html` |
| Font | [Vazirmatn](https://github.com/rastikerdar/vazirmatn) via jsDelivr |
| PNG export | [html2canvas](https://html2canvas.hertzen.com/) 1.4.1 via jsDelivr |
| Storage | `localStorage` + URL hash |
| Offline | `manifest.json` + `sw.js` |

## Getting Started

Use it online: **https://aghorbani84.github.io/AtelegramPostCreator/**

Or run it locally — no install or build needed:

```bash
git clone https://github.com/aghorbani84/AtelegramPostCreator.git
cd AtelegramPostCreator
python3 -m http.server 8000   # then visit http://localhost:8000
```

Opening `index.html` directly also works; serving it over HTTP is needed for the service worker.

### Quick workflow

1. Choose a template from the sidebar and replace the `[placeholders]`.
2. Format text, add emojis/hashtags, and attach images.
3. Set the channel name, avatar, counts, and time in **Settings**.
4. Copy the text into Telegram, or export it as TXT, MD, or PNG.

## Project Structure

```
.
├── index.html     # The whole app (HTML, CSS, JS)
├── manifest.json  # PWA manifest
├── sw.js          # Service worker (caches the app shell and font CSS)
└── readme.md
```

## Contributing

Issues and pull requests are welcome. Please keep changes focused and use [Conventional Commits](https://www.conventionalcommits.org/).

## Author

**Abolfazl Ghorbani** — [@aghorbani84](https://github.com/aghorbani84)
