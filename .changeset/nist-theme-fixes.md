---
"myst-to-react": patch
"@myst-theme/site": patch
"@myst-theme/book": patch
"@myst-theme/article": patch
---

Bug fixes and enhancements for nyst-theme:
- myst-to-react: Add field list directive renderer (fieldList/field nodes), add mystRole renderer for inline roles, simplify table/container width handling by removing normalizeWidth utility and abbreviationList node type
- site: Collapsible document outline — headings are rendered as a tree with chevron toggles; new collapseDepth and defaultOpen props control initial expand state
- book/article themes: Wire up outline_collapse_depth and outline_collapsed template options to the collapsible document outline
