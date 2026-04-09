# Cypress Web QA Challenge

## Non-Negotiable Rule
All final submission code must be authored by the developer.
Do not submit ready-to-use AI-generated code as the final delivery.

## Project Description
Web automation project with Cypress to validate flows for:
- Forms
- Inputs
- Alerts / Modals

Application under test: https://demoqa.com/

## Prerequisites
- Node.js LTS
- npm
- Chromium-based browser

## Installation
1. Install dependencies:
   ```bash
   npm install
   ```
2. Validate Cypress installation:
   ```bash
   npx cypress --version
   ```

## Test Execution
- Headless:
  ```bash
  npm run test:headless
  ```
- Headed:
  ```bash
  npm run test:headed
  ```
- Single default command:
  ```bash
  npm test
  ```

## How to View Results
- Terminal: execution status per spec
- Local artifacts:
  - `cypress/screenshots`
  - `cypress/videos`

## Structure and Conventions
- `cypress/e2e`: specs organized by feature
- `cypress/pages`: Page Object Model
- `cypress/fixtures`: test data
- `cypress/support`: custom commands and utilities

## Mandatory Quality Standards
- POM is required
- Use robust selectors (avoid fragile CSS paths)
- DRY and code reuse
- No hard waits (`cy.wait` with fixed time)
- Prioritize quality over quantity
