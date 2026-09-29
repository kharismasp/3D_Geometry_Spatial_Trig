# IB Mathematics AA HL — 3D Geometry & Spatial Trigonometry

Final Phase 4 deployment package.

## Run / deploy

This is a static site. Upload the entire folder to GitHub Pages, Netlify, or another static host and serve `index.html` at the project root.

No build step and no external JavaScript library are required.

## Included

- Complete bilingual English / Bahasa Indonesia lesson
- Persistent lesson map and progress
- Teacher Pass
- CORE / CHALLENGE / ADVANCED and INTI / TANTANGAN / LANJUTAN
- Seven canonical guided reasoning patterns
- Inline self-practice after major concepts
- Central structural question bank with 55 problem instances / structural variants
- `Change Problem` and `Previous Problem`
- Teacher-only variation selector
- Progressive hints and misconception-aware feedback
- Model-based SVG geometry
- Givens-only initial exercise visuals with staged structural reveals
- Moving-point high-ceiling investigation
- Contextual use of the supplied mascot PNGs only
- Responsive desktop / tablet / phone layout
- Local progress persistence
- Accessibility improvements for controls, live feedback, and reduced-motion preferences

## Phase 4 QA completed

- JavaScript syntax validation
- Rendered headless-browser checks on representative desktop and phone widths
- All 10 sections checked for horizontal overflow in both EN and ID modes
- SVG geometry bounding-box checks: no tested geometry extends beyond its viewBox
- Indonesian visible-text leakage audit across all 10 sections: no targeted accidental English UI strings found
- Interaction smoke tests: hints, checking, Change Problem, Previous Problem, plan checks, and moving-point slider
- Moving-point geometry tested at endpoint, near-endpoint, midpoint, and opposite-endpoint positions
- Central question-bank metadata check across 55 problems: bilingual prompts present, answer indices valid, numeric answers finite, hint counts aligned, and visual parameters non-degenerate

## Deployment note

Keep the folder structure unchanged because `index.html` loads `styles.css`, `app.js`, and the mascot PNGs through relative paths.
