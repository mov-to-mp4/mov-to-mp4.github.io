# MOV to MP4 Converter — Instant, 100% Offline & Private

[![Live Demo](https://img.shields.io/badge/Live%20Demo-mov--to--mp4.github.io-6A795D?style=for-the-badge&logo=googlechrome&logoColor=FAF9F0)](https://mov-to-mp4.github.io/)
[![Built with Astro](https://img.shields.io/badge/Framework-Astro%204.x-B2BD7E?style=for-the-badge&logo=astro&logoColor=2C3527)](https://astro.build/)
[![Client-Side Privacy](https://img.shields.io/badge/Privacy-100%25%20On--Device%20WASM-8E9162?style=for-the-badge&logo=webassembly&logoColor=FAF9F0)](https://mov-to-mp4.github.io/)
[![PWA Offline Ready](https://img.shields.io/badge/PWA-100%25%20Offline%20Ready-D9D28B?style=for-the-badge&logo=pwa&logoColor=2C3527)](https://mov-to-mp4.github.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-6A795D?style=for-the-badge)](./LICENSE)
[![Support on Ko-fi](https://img.shields.io/badge/Support-Ko--fi%2Fkishara-FF5E5B?style=for-the-badge&logo=kofi&logoColor=white)](https://ko-fi.com/kishara)

---

## 🚀 Overview & Zero-Server Privacy Architecture

**MOV to MP4 Converter** is a high-performance, 100% client-side web application engineered to convert Apple QuickTime `.mov` videos to universal `.mp4` format (and vice versa) directly inside your web browser with **zero server uploads**, zero subscription paywalls, and no file size limits.

### How On-Device WebAssembly Conversion Works:
1. **Zero Cloud Uploads**: Your raw footage (including 4K iPhone video, confidential screen recordings, and studio takes) never leaves your device's memory.
2. **Instant Lossless Remuxing (`-c copy`)**: Because Apple QuickTime `.mov` and MPEG-4 `.mp4` share the underlying ISO Base Media File Format (ISO/IEC 14496-12), our WebAssembly FFmpeg engine transfers the exact H.264/HEVC and AAC bitstreams directly between containers in **less than 1 second** without re-encoding or generational quality loss.
3. **Automatic H.264 Compatibility Fallback**: If a clip contains proprietary codecs, HEVC, or the user requests downscaling (`1080p` or `720p`), the engine seamlessly transitions to high-speed client-side H.264 transcoding.

```
+-------------------------------------------------------------------------+
|                        Client Browser Sandbox                           |
|                                                                         |
|  [ Input .MOV Video ]                                                   |
|           │                                                             |
|           ▼                                                             |
|  [ WebAssembly FFmpeg Worker ]  ───►  -c copy Stream Remuxing (1 Sec)  │
|           │                           │                                 |
|           │                           ▼                                 |
|           └─── (If HEVC/Scale)  ───►  libx264 Transcoding Fallback      │
|                                       │                                 |
|                                       ▼                                 |
|                              [ Output .MP4 Video ]                      |
|                                       │                                 |
|                                       ▼                                 |
|                        HTML5 Player Preview & Download                  |
+-------------------------------------------------------------------------+
       * ZERO BYTES SENT OVER THE NETWORK • 100% LOCAL PROCESSING *
```

---

## ✨ Key Features

- **⚡ 1-Second Lossless Remuxing**: Convert `.mov` to `.mp4` in 1 second using bit-exact stream copying (`-c copy`).
- **🔄 Bidirectional Conversion**: Full support for both **MOV to MP4 (Default)** and **MP4 to MOV (Reverse)** for Final Cut Pro and macOS workflows.
- **🛡️ Max Compatibility H.264/AAC Mode**: Transcode HEVC (H.265) iPhone recordings to universally playable H.264 video.
- **📐 Resolution Scaling & Audio Controls**: Downscale 4K footage to 1080p Full HD or 720p HD, or toggle **Mute Audio** (`-an`) for silent web loops.
- **📱 PWA Offline "Add to Home Screen"**: Installable on iPhone/iPad (iOS Safari), Android, macOS, and Windows via Service Worker pre-caching for 100% offline usage.
- **🎬 Instant Sample MOV Video**: Test the converter in one click without needing a local video file.
- **🌍 8-Language Localization (i18n)**: 100% translated in English, Spanish (`es`), Portuguese (`pt`), German (`de`), French (`fr`), Japanese (`ja`), Chinese (`zh`), and Russian (`ru`).
- **🌓 Light / Dark Theme System**: Smooth theme toggle with default earthy light mode and high-contrast dark mode.
- **🎯 100% Technical SEO Architecture**: Rich JSON-LD Schemas (`WebApplication`, `BreadcrumbList`, `FAQPage`), complete bidirectional `hreflang` matrix, and Google Analytics `gtag.js`.

---

## 🎨 UI/UX Color System

The user interface uses a bespoke, earthy palette designed for optimal readability, high touch targets (`48x48px` on mobile), and visual comfort:

| Token Name | Hex Code | Light Mode Usage | Dark Mode Usage |
| :--- | :--- | :--- | :--- |
| **Soft Khaki Gold** | `#D9D28B` | Card surfaces, secondary badges | Primary headings & text |
| **Sage Olive** | `#B2BD7E` | Accent badges & progress accents | Primary buttons & highlights |
| **Earthy Moss** | `#8E9162` | Dropzone dashed borders | Borders & active outlines |
| **Deep Forest Slate** | `#6A795D` | Primary action buttons & brand icons | Dark mode secondary text & borders |
| **Background Primary** | `#FAF9F0` / `#181D16` | Clean cream workspace | Deep forest obsidian |
| **Ink Primary** | `#2C3527` / `#D9D28B` | High-contrast dark typography | Soft gold typography |

---

## 🛠️ Tech Stack & SEO Highlights

- **Framework**: [Astro 4.x](https://astro.build/) (Static Site Generation for GitHub Pages)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with CSS variables
- **Video Processing Engine**: `@ffmpeg/ffmpeg` & `@ffmpeg/util` (Single-threaded WebAssembly core via Blob URLs)
- **Service Worker & PWA**: Custom Service Worker caching HTML routes, icons, and WASM binaries for offline execution
- **SEO & Structured Data**:
  - Valid `WebApplication`, `BreadcrumbList`, and `FAQPage` JSON-LD schemas (**zero fake ratings/reviews**, 100% Google Rich Snippet safe)
  - Self-referencing canonical tags and full 8-language bidirectional `hreflang` matrix
  - Automated XML sitemap generation (`sitemap-index.xml` & `sitemap-0.xml`) via `@astrojs/sitemap`
  - All 13 target SEO keywords naturally woven into below-the-fold content and comparative benchmarks

---

## 💻 Local Development & Build

### Prerequisites
- Node.js `20.x` or higher
- npm `10.x` or higher

### 1. Clone Repository
```bash
git clone https://github.com/mov-to-mp4/mov-to-mp4.github.io.git
cd mov-to-mp4.github.io
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Local Dev Server
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

### 4. Build Static Production Site
```bash
npm run build
```
The static distribution is generated in the `dist/` directory, ready for GitHub Pages.

### 5. Preview Production Build Locally
```bash
npm run preview
```

---

## 💖 Support the Developer

If this free, private, client-side video converter saved your time and data, consider supporting the ongoing development:

👉 **[Support Kishara on Ko-fi](https://ko-fi.com/kishara)**

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.  
Copyright (c) 2026 **Kishara Dilshan / PixelPieStudio**.
