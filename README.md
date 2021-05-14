# cypress-test-automation
cypress test automation 
 
Installation and Environment Setup for Cypress Test
 1. install VS code IDE and npm 
 2. install cypress 

 Commands:
 -> npm install cypress --save-dev
 -> npx cypress (To launch cypress) 
 -> npx cypress run (Run in CI/CD) 

 Cypress folders and files:
 -> cypress.json - all cypress settings
 -> cypress/ integration  - test spec.js files
 -> cypress/ fixtures - to place mock data
 -> cypress/ plugins - extending cypress 
 -> cypress/support - shared common commands for code reusability

plugins used in VSCode:
-> Prettier - code format
-> cypress snippets



Application setup for testing
1. Download or Clone Angular App from https://codebase.show/projects/realworld 
2. Install Angular CLI 
3. Install Yarn to build locally and  to download the project dependencies(use  command yarn install) 
4. ng serve and then Navigate to http://localhost:4200/ to ensure app is up and running