# SauceDemo Automation Test Suite

This project is an automated test suite for the SauceDemo website using WebdriverIO.

## Features
- Positive login tests for multiple users
- Negative login tests for invalid credentials
- Uses Page Object Model (POM)

## Test Coverage

The following users are tested:

- standard_user (valid login)
- locked_out_user (blocked login)
- problem_user (valid login)
- performance_glitch_user (valid login)

## Technologies Used
- JavaScript
- WebdriverIO
- Node.js

## How to Run the Tests

1. Install dependencies:
npm install

2. Run the test suite:
npx wdio run wdio.conf.js