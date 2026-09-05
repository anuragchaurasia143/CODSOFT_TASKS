# CodSoft Web Development Internship Projects

Welcome to the repository for my **CodSoft Web Development Internship**. This repository contains three independent projects built using **HTML5, CSS3, and JavaScript**, focusing on clean structure, modern responsive design systems, and efficient arithmetic logic.

---

## 📌 Projects Overview

| Task | Project Name | Description | Key Tech | Directory |
| :--- | :--- | :--- | :--- | :--- |
| **Task 1** | **NovaCloud Landing Page** | Modern, high-performance product landing page with interactive architecture tabs, bento grid, and FAQs. | Pure HTML5, CSS3, CSS Grid, Flexbox | [`landing page/`](landing%20page/landing.html) |
| **Task 2** | **Developer Portfolio** | Personal portfolio featuring about section, skills matrix, project showcase, resume download, and contact form. | Pure HTML5, CSS3, Custom Properties | [`portfolio/`](portfolio/index.html) |
| **Task 3** | **Smart Web Calculator** | Standalone interactive calculator with CSS Grid button layout, arithmetic operations, calculation history, and keyboard support. | HTML5, CSS Grid, Vanilla JavaScript (ES6) | [`calculator/`](calculator/index.html) |

---

## 🚀 Task 1: NovaCloud Product Landing Page

A responsive, modern product landing page for **NovaCloud** (Intelligent Cloud & Edge Developer Platform).

### Key Highlights:
- **Hero Section:** Clean typography, status indicators, action buttons, and a 3D perspective dashboard preview card.
- **Metrics Bar:** Real-time performance indicators and operational stats.
- **Features Bento Grid:** 6-card bento box layout highlighting edge compute, security, observability, and terminal code snippets.
- **Interactive Architecture Tabs (Pure CSS):** Radio-based tab switcher for previewing code samples and configurations without JavaScript.
- **How It Works (3-Step Process):** Visual workflow cards explaining repository connection, routing, and deployment.
- **Customer Reviews:** Card grid with star ratings and reviewer badges.
- **Accordion FAQ (Pure CSS):** Expandable `<details>` and `<summary>` components with rotating toggle icons.
- **Call-to-Action (CTA):** Newsletter & free access signup form.

**Directory:** [`landing page/landing.html`](landing%20page/landing.html) | [`landing page/landing.css`](landing%20page/landing.css)

---

## 💼 Task 2: Personal Portfolio Website

A personal developer portfolio designed to showcase technical skills, experience, and projects.

### Key Highlights:
- **Sticky Navigation Bar:** Frosted glass header with smooth scroll navigation and pure CSS mobile drawer.
- **Introduction Hero:** Interactive code card snapshot and quick social profile links.
- **About Me Section:** Background biography, experience highlights, and key achievements.
- **Technical Skills Matrix:** Categorized cards for Frontend, Backend, Tools & Core competencies with percentage bars.
- **Featured Projects Grid:** Card showcase with image overlays, tech tags, and live demo links.
- **Resume Section:** Overview of qualifications with a one-click PDF resume download.
- **Contact Form:** Clean contact form with floating input labels and direct reach-out info.

**Directory:** [`portfolio/index.html`](portfolio/index.html) | [`portfolio/style.css`](portfolio/style.css)

---

## 🧮 Task 3: Smart Web Calculator

A standalone, responsive web calculator built using HTML5, CSS Grid, and vanilla JavaScript.

### Key Highlights:
- **Dual Display Screen:** Displays active ongoing mathematical expressions and formatted calculation results.
- **CSS Grid Keypad:** Clean 4-column button alignment with color-coded numbers, operators, and action keys.
- **Arithmetic Engine:** Addition (`+`), Subtraction (`−`), Multiplication (`×`), Division (`÷`), Negation (`±`), Decimal (`.`), Clear Entry (`CE`), and All Clear (`AC`).
- **Edge-Case Protections:** Floating-point precision rounding (e.g. `0.1 + 0.2 = 0.3`), division-by-zero protection, consecutive operator switching.
- **Calculation History Log:** Side panel logging past calculations with click-to-load onto screen.
- **Keyboard Support:** Full physical keyboard integration for numpad keys, `+ - * /`, `Enter`, `Backspace`, and `Escape`.

**Directory:** [`calculator/index.html`](calculator/index.html) | [`calculator/style.css`](calculator/style.css) | [`calculator/script.js`](calculator/script.js)

---

## 🛠️ Technologies Used

- **HTML5:** Semantic markup (`<header>`, `<nav>`, `<section>`, `<article>`, `<details>`, `<aside>`, `<footer>`)
- **CSS3:**
  - CSS Flexbox & CSS Grid for fluid layouts
  - CSS Custom Properties (Variables) for unified light theme tokens
  - CSS Keyframe animations & smooth cubic-bezier transitions
  - Pure CSS `:checked` and `:hover` pseudo-classes for interactive components
- **JavaScript (ES6):**
  - Event Listeners (`click`, `keydown`)
  - Arithmetic logic, if-else statements, and loops
  - DOM manipulation and state management
- **Typography:** Google Fonts (*Outfit*, *Plus Jakarta Sans*, *Fira Code*)
- **Icons:** Font Awesome v6.5

---

## 📁 Project Structure

```text
├── calculator/
│   ├── index.html          # Calculator Interface (Task 3)
│   ├── style.css           # Calculator Stylesheet (CSS Grid)
│   └── script.js           # Calculator Logic & Event Listeners
├── landing page/
│   ├── landing.html        # NovaCloud Landing Page (Task 1)
│   └── landing.css         # Landing Page Stylesheet
├── portfolio/
│   ├── index.html          # Main Personal Portfolio (Task 2)
│   └── style.css           # Portfolio Stylesheet (Light Theme)
├── assets/
│   ├── images/             # Visual assets & project mockups
│   │   ├── profile.jpg
│   │   ├── project1.jpg
│   │   ├── project2.jpg
│   │   ├── project3.jpg
│   │   ├── landing-preview.jpg
│   │   └── ai-feature.jpg
│   └── resume.pdf          # Resume document
└── README.md               # Comprehensive internship documentation
```

---

## 💻 How to Run Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/anuragchaurasia143/CODSOFT_TASKS.git
   ```
2. Navigate into the project folder:
   ```bash
   cd CODSOFT_TASKS
   ```
3. Open any task in your browser:
   - **Portfolio (Task 2):** Open `portfolio/index.html`
   - **Landing Page (Task 1):** Open `landing page/landing.html`
   - **Calculator (Task 3):** Open `calculator/index.html`
   - Or start a local server:
     ```bash
     python -m http.server 8080
     ```
     Then navigate to `http://localhost:8080/portfolio/index.html`.

---

## 👨‍💻 Author

**Anurag Chaurasia**
- GitHub: [@anuragchaurasia143](https://github.com/anuragchaurasia143)
- Role: Web Development Intern at **CodSoft**

---

## 📜 Acknowledgements

Special thanks to the **CodSoft** team for the opportunity to build and showcase these web development tasks.
