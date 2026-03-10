---
"myst-to-react": patch
"@myst-theme/styles": patch
"@myst-theme/article": patch
"@myst-theme/book": patch
---

Fork customizations for nyst-theme:
- myst-to-react: Add normalizeWidth utility for container/table widths, add abbreviationList node type, apply explicit column widths and table widths, add BibliographyRenderer component
- styles: Add col-widths CSS class for fixed table layout when column widths are specified
- article theme: Add hasBibliographyNode check to avoid duplicate bibliographies, rename outline title to "In this publication"
- book theme: Add hasBibliographyNode check to avoid duplicate bibliographies
- Build/deploy: Update deployment targets, CI, and metadata for regenscheid/nyst-theme fork
