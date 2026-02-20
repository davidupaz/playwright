Playwright + Cucumber BDD Automation Framework

End-to-end test automation framework built with Playwright + TypeScript + Cucumber (BDD).

This project demonstrates a scalable and maintainable automation architecture using:

Playwright for browser automation

Cucumber for BDD structure

TypeScript for type safety

Custom World for shared scenario state

Hooks for lifecycle management

🚀 Tech Stack

Node.js

TypeScript

Playwright

Cucumber

Chromium

📂 Project Structure
features/
│
├── auth/
├── ui/
├── async/
├── files/
├── api/
│
├── step-definitions/
├── support/
│   ├── hooks.ts
│   └── world.ts
│
fixtures/
│
cucumber.json
package.json
README.md

🧠 Framework Architecture
🔹 Custom World

Used to store scenario data (e.g., created user, IDs, shared state between steps).

🔹 Hooks

Launch and close browser per scenario

Isolated browser context per test

Configurable timeouts

Clean teardown

🔹 BDD Design

Background steps

Scenario Outline with Examples

Data Tables

Tag-based execution

Positive and negative coverage

▶️ How to Run

Install dependencies:

npm install


Run all tests:

npm test


Run tests by tag:

npx cucumber-js --tags "@smoke"

📌 Implemented Test Scenarios

Authentication (login success and failure)

Logout flow

Dynamic loading (async handling)

Dropdown selection

Checkbox state validation

Add/Remove dynamic elements

File upload

Basic authentication

🧪 Example Feature (BDD)
Scenario: Successful login with valid credentials
  Given I am on the Form Authentication page
  When I login with username "tomsmith" and password "SuperSecretPassword!"
  Then I should be redirected to the Secure Area
  And I should see a flash message containing "You logged into a secure area!"

📈 Design Goals

Clean separation of concerns

Maintainable step definitions

Resilient locators (role/label-based)

Reusable utilities

CI-ready structure

🔥 Future Improvements

HTML reporting

GitHub Actions CI pipeline

Screenshot capture on failure

Page Object Model layer

Environment configuration via .env

👨‍💻 Author

David Ureña Paz
Senior QA Leader | Automation | Quality Strategy | AI in Testing