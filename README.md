# 🔭 Teleskop Browser & Keşif Dürbünü Search Engine

**The browser that puts you in ultra‑control. Open source. Blazing fast. Uncompromising on privacy.**

---

## 📖 Overview

**Teleskop** is a next‑generation web browser designed from the ground up to deliver the **ultimate in privacy, performance, and user control**. It pairs with its own independent search engine, **Keşif Dürbünü** (“Discovery Binoculars”), to offer a completely integrated, surveillance‑free browsing experience.

Every aspect of Teleskop has been built to answer the question: *“What if a browser did everything right?”* – from a stunning, modern interface to an uncompromising security model that never harvests your data.

---

## ✨ Key Features

### 🛡️ Ultra Privacy & Security
- **Built‑in ad and tracker blocker** – blocks all known trackers and ads, with a detailed report of what was stopped.
- **Tor tab** – one‑click access to the Tor network for anonymous browsing.
- **VPN integration** – optional, configurable VPN right inside the browser.
- **Site Container System** – every website runs in its own sandbox; cross‑site data leakage is impossible.
- **Panic Button** – instantly hide all tabs, clear history, and mute audio with a single keypress.
- **Advanced fingerprinting protection** – canvas, WebGL, and WebRTC leak prevention.
- **Encrypted password manager** – store credentials locally or sync them end‑to‑end encrypted (your key, your data).
- **Safe download scanner** – warns you twice before opening a dangerous file, with a clear “proceed at your own risk” step.
- **Unhackable data** – zero‑knowledge architecture ensures that even we cannot access your browsing data.

### ⚡ Performance & Resource Friendliness
- **RAM Saver** – puts background tabs to sleep automatically.
- **Low bandwidth mode** – compresses data and optimises media for faster loading on slow connections.
- **Blazing page loads** – optimised rendering engine, smart prefetching, and DNS pre‑resolution make Teleskop the fastest browser you’ll ever use.
- **8K video playback** – hardware‑accelerated, smooth, and completely free of stutter.

### 🎨 Stunning, Customisable Interface
- A sleek, modern design that you can tailor with themes and custom colour schemes.
- **Customisable sidebar** – dock bookmarks, history, notes, or your favourite tools exactly where you want them.
- **Full accessibility support** – screen reader friendly, keyboard navigation, high‑contrast modes, and scalable fonts.

### 🧑‍💻 Workspaces & Profiles
- Create separate **Workspaces** (Work, School, Gaming, Personal) like in Arc Browser – each with its own tabs, bookmarks, and container rules.
- **Multiple user profiles** – keep your browsing lives completely isolated, with one‑click switching.

### 🧩 Extension Ecosystem
- **Compatible with Chrome Web Store and Firefox Extension Store** – install your favourite add‑ons.
- **Teleskop Extension Store** – a brand‑new, curated marketplace built from scratch.
- **AI Extension Builder** – describe the extension you want in plain language, and the browser will build it for you automatically.

### 🎮 Offline Features
- **Built‑in offline games** – play when you have no internet connection.
- **Full‑page offline reading** – cached copies of pages you’ve visited.

### 🤖 Digital Assistant (text‑based)
- Supports **Turkish, American English, British English, Japanese, German, and Chinese**.
- Helps with searches, summarising pages, automating tasks, and even suggests categories when you can’t find what you’re looking for.

### 🔍 Keşif Dürbünü – Your Private Search Engine
- A completely independent search engine, developed from scratch.
- Crawls and indexes the web while **respecting your privacy** – no tracking, no search history storage (unless you opt in locally).
- Available inside Teleskop and as a standalone website for other browsers.
- Searches everything: web, images, videos, news, academic papers, and more.

---

## 💻 Supported Platforms

| Platform       | Status          |
|----------------|-----------------|
| Windows (10/11) | ✅ Fully supported |
| macOS (12+)    | ✅ Fully supported |
| Linux (AppImage, deb, rpm) | ✅ Fully supported |
| BSD            | ✅ Fully supported |
| Android (5.0+) | ✅ Fully supported (Flutter) |
| iOS (14+)      | ✅ Fully supported (Flutter) |

---

## 🚀 Installation

- **Windows:** Download the `.exe` installer.
- **macOS:** Grab the `.dmg` and drag to Applications.
- **Linux:** Use the `.AppImage` or install via your package manager.

### Mobile
- **Android:** Download the `.apk` from the releases or install via the Google Play Store (coming soon).
- **iOS:** Available on the App Store (coming soon).

During installation you will be guided through a privacy‑first setup wizard – you decide exactly what gets turned on.

---

## 🛠 Building from Source

We use a customised Chromium base to ensure maximum performance and compatibility.  
All Teleskop‑specific modules are written in Rust, C++, and TypeScript. The mobile apps are built with Flutter.

### Prerequisites
- **Git**
- **Node.js 20+** and **npm**
- **Rust toolchain** (for native modules)
- **Python 3.10+** (build scripts)
- **Flutter 3.16+** (for mobile targets)
