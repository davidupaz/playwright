<!-- Copilot / AI agent instructions for the Playwright + Cucumber demo repo -->
# Playwright + Cucumber — AI agent guidance

This repository is a BDD-style Playwright automation framework written in TypeScript. The tests are authored as Cucumber features and implemented with Playwright in TypeScript step-definitions.

- Project entry points:
  - `package.json` — `npm test` runs `cucumber-js --profile default`.
  - `cucumber.json` — profile `default` configures `paths`, `require` (includes `ts-node/register`) and `format`.
  - `features/` — feature files organized by area (`ui/`, `auth/`, `async/`, `files/`, `api/`).
  - `features/step-definitions/` — TypeScript step definition files (`*.steps.ts`).
  - `features/support/world.ts` — `CustomWorld` exposes `browser`, `context`, `page`, and a `state` object shared across steps.
  - `features/support/hooks.ts` — `Before`/`After` hooks launch an isolated browser context per scenario and set timeouts.

- Big picture / architecture:
  - Cucumber (feature files) is the BDD layer; step-definitions call Playwright to drive browsers.
  - `CustomWorld` is the primary shared object for cross-step state and Playwright handles (`page`, `context`, `browser`). Use `this.page` inside step functions.
  - Each scenario runs in a fresh Playwright `BrowserContext` (isolation) — avoid relying on global state across scenarios.

- Key runtime facts agents must know:
  - Tests are TypeScript executed via `ts-node/register` (configured in `cucumber.json`). Do not compile to JS before running; edit TypeScript directly.
  - The `test` script maps to the `default` profile: `npm test` == `cucumber-js --profile default`.
  - To run tagged scenarios: `npx cucumber-js --tags "@smoke"`.
  - `features/support/hooks.ts` sets `setDefaultTimeout(30000)` and Playwright page timeouts; keep step durations under these or adjust timeouts via the hooks file.

- Conventions & patterns specific to this repo:
  - Step files end with `.steps.ts` and live in `features/step-definitions/`.
  - Prefer accessibility-first locators (role/label) — README mentions resilient locators; look for this pattern in existing step definitions.
  - Shared scenario data lives in `this.state` on `CustomWorld` (use it for IDs, created users, etc.).
  - Hooks create `this.page` and set navigation/action timeouts; step code should use `await this.page` APIs and not re-launch browsers.

- Editing guidance for agents:
  - When adding a new step file, place it in `features/step-definitions/` and export functions per Cucumber step patterns; no additional config is required thanks to `cucumber.json` `require` entry.
  - When changing runtime behavior (timeouts, headless mode), update `features/support/hooks.ts`. Note: `headless: false` is currently set — change cautiously.
  - If adding dependencies, update `devDependencies` in `package.json` and run `npm install` locally before running tests.

- Files to inspect for context/examples:
  - `features/support/world.ts` — shows the `CustomWorld` shape.
  - `features/support/hooks.ts` — browser/context/page lifecycle and timeouts.
  - `cucumber.json` — profile + `ts-node/register` usage.
  - `features/step-definitions/add_remove_elements.steps.ts` — small example of step implementation style.
  - `README.md` — high-level design goals and run examples.

- Run & debug commands (copy-paste):
  - Install deps: `npm install`
  - Run all tests: `npm test`
  - Run by tag: `npx cucumber-js --tags "@smoke"`

- Helpful checks for changes made by the agent:
  - After editing `*.ts` step files, run `npm test` locally (or run a single feature with `npx cucumber-js path/to/feature`) to validate runtime behavior.
  - If tests cannot find step definitions, confirm `cucumber.json` `require` paths and that `ts-node/register` is present.

If any of the above is unclear or you'd like me to include examples of common refactors (e.g., moving to Page Objects or adding a GitHub Actions workflow), tell me which area to expand and I will iterate.
