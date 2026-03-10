---
"@myst-theme/site": patch
"@myst-theme/book": patch
"@myst-theme/article": patch
---

Add NIST header/footer integration:
- site: Add HeadInjections component to DocumentWithoutProviders; new inject_style and inject_script config options inject <link> and <script defer> tags into the page head, accepting a single URL or YAML list
- book theme: Add inject_style and inject_script template options; add nist.css (black nav + NIST blue footer overrides) and NIST logo SVGs to public/
- article theme: Same inject_style/inject_script options and public/ assets
