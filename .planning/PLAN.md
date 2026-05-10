# 🌸 Mother's Day Website — Execution Plan

**Project:** Happy Mother's Day Wishing Website  
**Made by:** Vinayak & Aaadi  
**Tech:** Single `index.html` — Pure HTML + CSS + Vanilla JS  
**Source spec:** `Plan.md`

---

## Overview

Build a single-file Mother's Day wishing website with:
- Deep rose dark theme with falling pink heart animations
- Scroll-reveal photo cards (left/right alternating)
- Warm hero greeting and footer close

All code lives in **one `index.html` file**. No npm, no build tools, no libraries.

---

## Phase 1 — `<head>` & Design Foundation

**Goal:** Set up the HTML skeleton and the full CSS design system inside `<style>`.

### Tasks

1. Create `index.html` with proper HTML5 boilerplate (`<!DOCTYPE html>`, `lang="en"`, `charset="UTF-8"`)
2. Add SEO meta tags:
   - `<title>Happy Mother's Day — From Vinayak & Aaadi</title>`
   - `<meta name="description" ...>`
   - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
3. Add Google Fonts CDN links:
   - Playfair Display (headings): `ital,wght@0,400;0,700;1,400`
   - DM Sans (body): `wght@300;400`
4. Write the full `<style>` block with:
   - All CSS custom properties from Plan.md:
     ```
     --bg-primary: #0d0008
     --bg-section: #130010
     --accent-pink: #ff6b9d
     --accent-light: #ffb3d1
     --accent-rose: #e91e8c
     --text-white: #ffffff
     --text-soft: #ffd6e8
     --glow-shadow: 0 0 40px rgba(255, 107, 157, 0.4)
     --card-bg: rgba(255, 107, 157, 0.07)
     --card-border: rgba(255, 107, 157, 0.3)
     ```
   - Global reset: `*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }`
   - `html { scroll-behavior: smooth; }`
   - `body`: `background-color: var(--bg-primary)`, `color: var(--text-white)`, `font-family: 'DM Sans', sans-serif`, `overflow-x: hidden`
   - `#hearts-container`: `position: fixed`, `inset: 0`, `z-index: 0`, `pointer-events: none`, `overflow: hidden`
   - `.heart-span`: `position: absolute`, `top: -60px`, `animation: fall var(--fall-duration) var(--fall-delay) linear infinite`
   - `@keyframes fall` — per spec (translateY(-60px) → translateY(110vh), with opacity fade in/out)
   - Hero section styles: full `100vh`, flex-center, text-align center
   - `@keyframes fadeScale`: `from { opacity:0; transform: scale(0.9) } to { opacity:1; transform: scale(1) }`
   - `@keyframes bounceArrow`: `0%,100% { transform: translateY(0) } 50% { transform: translateY(8px) }`
   - Scroll reveal classes: `.reveal`, `.reveal-left`, `.reveal-right`, `.reveal-up`, `.reveal.active`
   - Photo card styles: `border-radius: 20px`, `border: 1px solid var(--card-border)`, `background: var(--card-bg)`, `box-shadow: var(--glow-shadow)`
   - Photo card `img`: `width: 100%`, `border-radius: 20px 20px 0 0`, `object-fit: cover`
   - Caption style: `color: var(--text-soft)`, `font-style: italic`, `padding: 16px`
   - Footer styles: `background: var(--bg-section)`, `text-align: center`, `padding: 60px 20px`
   - `@keyframes pulse`: `0%,100% { transform: scale(1) } 50% { transform: scale(1.15) }`
   - Static footer hearts: `display: inline-block`, `animation: pulse 2s infinite`, `color: var(--accent-pink)`, `font-size: 2rem`
   - Responsive: `@media (max-width: 600px)` — hero heading size ↓, photo cards max-width 90vw, centered

### Verification
- [ ] CSS variables defined correctly
- [ ] `@keyframes fall`, `fadeScale`, `bounceArrow`, `pulse` all present
- [ ] Fonts load from Google CDN
- [ ] `.reveal`, `.reveal-left`, `.reveal-right`, `.reveal-up`, `.reveal.active` defined

---

## Phase 2 — HTML Body Structure

**Goal:** Build all 4 sections of the page body.

### Tasks

1. **`#hearts-container`** — empty `<div id="hearts-container"></div>` (JS will inject `<span>` elements here)

2. **`#hero` — Section 1**
   ```html
   <section id="hero">
     <h1>Happy Mother's Day</h1>
     <p class="subheading">To the most wonderful Mummy in the world 🌸</p>
     <p class="credit">Made with love by Vinayak &amp; Aaadi ❤️</p>
     <div class="scroll-arrow">↓</div>
   </section>
   ```
   - `h1`: `font-family: 'Playfair Display'`, `font-size: clamp(2.5rem, 8vw, 5rem)`, fade+scale in animation (1.2s ease, no delay)
   - `.subheading`: `font-size: clamp(1rem, 3vw, 1.4rem)`, `color: var(--text-soft)`, fade in (0.4s delay)
   - `.credit`: `font-size: 0.9rem`, `font-style: italic`, `color: var(--accent-light)`, fade in (0.8s delay)
   - `.scroll-arrow`: `font-size: 2rem`, `color: var(--accent-pink)`, `animation: bounceArrow 1.5s infinite`, `margin-top: 40px`

3. **`#photo1` — Section 2**
   ```html
   <section id="photo1">
     <div class="photo-card reveal reveal-left">
       <img src="photo1.jpg" alt="A beautiful memory with Mummy" loading="lazy">
       <p class="caption">Every memory with you is a treasure, Mummy.</p>
     </div>
   </section>
   ```
   - Section: `background: var(--bg-section)`, `padding: 80px 20px`, `display: flex`, `justify-content: flex-start`, `padding-left: clamp(20px, 10vw, 15%)`

4. **`#photo2` — Section 3**
   ```html
   <section id="photo2">
     <div class="photo-card reveal reveal-right">
       <img src="photo2.jpg" alt="Forever home — with Mummy" loading="lazy">
       <p class="caption">You are our forever home, Mummy. We love you.</p>
     </div>
   </section>
   ```
   - Section: same background, but `justify-content: flex-end`, `padding-right: clamp(20px, 10vw, 15%)`

5. **`#footer` — Section 4**
   ```html
   <footer id="footer" class="reveal reveal-up">
     <div class="footer-hearts">
       <span>🩷</span><span>💕</span><span>🩷</span>
     </div>
     <h2>We love you, Mummy 🌸</h2>
     <p class="footer-credit">— Vinayak &amp; Aaadi</p>
   </footer>
   ```
   - `h2`: `font-family: 'Playfair Display'`, `font-size: 2.5rem`, `color: var(--accent-pink)`, `margin: 20px 0`
   - `.footer-credit`: `color: var(--text-soft)`, `font-size: 1rem`, `font-style: italic`

### Verification
- [ ] All 4 sections exist with correct IDs
- [ ] `photo-card` divs have both `reveal` + directional class
- [ ] Footer has `reveal reveal-up`
- [ ] `#hearts-container` is first child of body (before sections, so it underlays everything)

---

## Phase 3 — JavaScript (Hearts + Scroll Reveal)

**Goal:** Implement the two JS systems in a single `<script>` tag at end of `<body>`.

### Task A — Falling Hearts Generator

```javascript
(function generateHearts() {
  const container = document.getElementById('hearts-container');
  const heartChars = ['🩷', '💕', '♥'];
  const count = 30;

  for (let i = 0; i < count; i++) {
    const span = document.createElement('span');
    span.classList.add('heart-span');
    span.textContent = heartChars[Math.floor(Math.random() * heartChars.length)];

    const left     = Math.random() * 100;          // 0–100%
    const duration = 4 + Math.random() * 5;        // 4s–9s
    const delay    = Math.random() * 8;            // 0s–8s
    const size     = 14 + Math.random() * 18;      // 14px–32px
    const opacity  = 0.4 + Math.random() * 0.5;   // 0.4–0.9

    span.style.cssText = `
      left: ${left}%;
      --fall-duration: ${duration}s;
      --fall-delay: ${delay}s;
      font-size: ${size}px;
      --heart-opacity: ${opacity};
    `;

    container.appendChild(span);
  }
})();
```

### Task B — IntersectionObserver Scroll Reveal

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

### Verification
- [ ] 30 `<span>` elements injected into `#hearts-container`
- [ ] Each span has randomized `left`, `font-size`, duration, delay, opacity
- [ ] Hearts fall in a loop (infinite animation)
- [ ] `.reveal.active` is applied when scrolling to photo cards and footer
- [ ] No console errors on page load

---

## Phase 4 — Polish, Responsive & Final Checklist

**Goal:** Make it perfect before handing off for photo replacement and sharing.

### Tasks

1. **Mobile responsiveness** (`max-width: 600px`):
   - Hero `h1` → `font-size: 2.5rem` (clamp handles it automatically if used)
   - Photo sections → `justify-content: center`, `padding: 40px 16px`
   - `.photo-card` → `max-width: 90vw`

2. **Photo fallback styling** (for when `photo1.jpg` / `photo2.jpg` don't exist yet):
   - Add a `min-height: 280px` placeholder background on `img` tag
   - Style: `background: var(--card-bg)` with a subtle centered `🌸` text overlay

3. **Glow refinements:**
   - Add `text-shadow: 0 0 30px rgba(255,107,157,0.6)` to hero `h1`
   - Add subtle `filter: drop-shadow(0 0 12px var(--accent-rose))` to footer hearts

4. **Cross-browser test points:**
   - `IntersectionObserver` is supported in all modern browsers (Chrome, Firefox, Safari 12.1+, Edge)
   - `CSS custom properties` — same, full modern support
   - Emoji hearts render on all platforms (no fallback needed)

5. **Update the checklist in `Plan.md`:**
   - Mark implementation tasks as done
   - Leave photo replacement + mobile test items for Vinayak & Aaadi to do manually

### Final Handoff Checklist (for Vinayak & Aaadi)
- [ ] Drop `photo1.jpg` into the same folder as `index.html`
- [ ] Drop `photo2.jpg` into the same folder
- [ ] Edit captions in `index.html` if desired (lines clearly marked with `<!-- CAPTION -->` comments)
- [ ] Open `index.html` in Chrome — verify hearts fall, cards reveal on scroll
- [ ] Test on mobile by opening on phone or using DevTools responsive mode
- [ ] Share: either attach the `.html` file directly, or deploy to GitHub Pages

---

## File Output

```
mothers-day/
├── index.html        ← EVERYTHING lives here (HTML + CSS + JS)
├── photo1.jpg        ← add before sharing (placeholder style shown until added)
├── photo2.jpg        ← add before sharing
└── Plan.md           ← original spec (keep for reference)
```

---

## Build Order Summary

| Step | What | Phase |
|------|------|-------|
| 1 | `<head>`, fonts, full `<style>` with all CSS | Phase 1 |
| 2 | `#hearts-container` div | Phase 2 |
| 3 | `#hero` section | Phase 2 |
| 4 | `#photo1` section | Phase 2 |
| 5 | `#photo2` section | Phase 2 |
| 6 | `#footer` section | Phase 2 |
| 7 | `<script>` — hearts generator | Phase 3 |
| 8 | `<script>` — scroll reveal observer | Phase 3 |
| 9 | Polish, mobile, photo fallback, test | Phase 4 |

---

*Ready to execute? Say "build it" and the full `index.html` will be created.*
