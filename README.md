# `nyst-theme`

A fork of [`myst-theme`](https://github.com/jupyter-book/myst-theme) for use with [`nystmd`](https://github.com/regenscheid/nystmd), a fork of the [MyST Markdown CLI](https://github.com/jupyter-book/mystmd).

This repository contains:

- A **react renderer** for MyST AST and content, so you can render MyST node types as React components.
- A **book theme and an article theme** that use this renderer along with Remix to create two different website experiences using the react components.

## Deployment

The built themes deploy to:

- [`regenscheid/nyst-article`](https://github.com/regenscheid/nyst-article)
- [`regenscheid/nyst-book`](https://github.com/regenscheid/nyst-book)

## Upstream

This fork will track [`jupyter-book/myst-theme`](https://github.com/jupyter-book/myst-theme). 

> **Note**: This fork does not publish to npm. The `@myst-theme/*` package names remain unchanged to minimize merge conflicts with upstream.

# Development

All dependencies for `myst-theme` are included in this repository (a monorepo!).
The core themes are also included in this repository to aid in development.

## Local development and live server preview

See [the local development docs](./docs/developer/local.md).

## Architecture and tools we use

See [the architecture and tools guide](./docs/developer/architecture.md).

# Documentation guide

See [the documentation guide](./docs/developer/documentation.md).

## Releasing and deploying

To deploy the themes via GitHub Actions, add a changeset and merge to `main`:

```bash
npx changeset
git add .changeset/
git commit -m "Add changeset for release"
```

The release workflow will open a version-bump PR. Merging that PR triggers deployment to `nyst-article` and `nyst-book`.

To deploy manually:

```bash
make deploy-book
make deploy-article
```

This updates the git repository, and sometimes is a large diff and can cause git to hang, if that happens this command can help change the buffer size when sending the diff to GitHub:

```bash
git config --global http.postBuffer 157286400
```
