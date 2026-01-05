# Repository Guidelines

## Project Structure & Module Organization
- `hugo.yml` holds primary configuration; `config.yml` may remain for legacy hosts—keep both in sync when touching shared settings.
- Content lives in `content/` (e.g., posts under `content/posts/<Title>/index.md`). Assets bundled with a post should sit beside its Markdown file for Hugo Page Bundles.
- Global static assets and favicons belong in `static/`; Hugo copies them verbatim to `public/`.
- The Dream theme is vendored in `themes/dream/`; prefer editing there instead of pulling from upstream to keep customizations versioned.
- `build.sh` provisions the toolchain (Go, Hugo extended, Dart Sass, Node) for Cloudflare Worker deploys, while `wrangler.toml` stores Worker-specific settings.

## Build, Test, and Development Commands
- `hugo server -D` — run a live-reloading preview (drafts included). Visit https://localhost:1313 to verify layout changes quickly.
- `hugo` — perform a production build to `public/`; fail the pipeline on template or content errors.
- `bash build.sh` — reproduce the CI environment locally, including exact tool versions; use before shipping major theme edits.

## Coding Style & Naming Conventions
- Markdown uses YAML front matter with two-space indentation; prefer lowercase taxonomy values (`categories`, `tags`).
- Shortcodes should use Hugo’s `relref`/`ref` helpers for internal links so multilingual routes stay intact.
- In SCSS/JS tweaks under `themes/dream`, follow existing two-space indenting and snake-case asset names (e.g., `post.js`).

## Testing Guidelines
- No formal test suite exists; rely on `hugo` builds completing without WARN/ERROR (the GA4 migration warning is currently tolerated).
- Manually spot-check critical pages (`/`, `/posts`, `/categories/*`, `/404`) in `hugo server` to catch layout regressions, especially after theme changes.

## Commit & Pull Request Guidelines
- Follow the existing conventional style (`feat(scope): summary`, `fix(scope): summary`); scope can reflect feature areas such as `netflix` or `href`.
- Each PR should describe the change, list manual verification steps (`hugo`, `hugo server -D`), and include screenshots/GIFs for visual updates.
- Reference related issues or deployment tickets, and call out config touches (e.g., `wrangler.toml`, `hugo.yml`) so reviewers can audit secrets separately.
