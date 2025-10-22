# CI/CD Test Application

A simple Node.js application demonstrating Continuous Integration and Continuous Deployment (CI/CD) practices using GitHub Actions.

## Overview

This project showcases a complete CI/CD pipeline with:
- Automated testing
- Code coverage reporting
- Multi-version Node.js testing
- Automated deployment workflow

## Features

- **Simple Calculator**: Basic arithmetic operations (add, subtract, multiply, divide)
- **Comprehensive Tests**: Full unit test coverage with Jest
- **CI/CD Pipeline**: Automated workflows using GitHub Actions
- **Code Quality**: ESLint for code linting

## Installation

```bash
npm install
```

## Usage

Run the application:
```bash
npm start
```

Run tests:
```bash
npm test
```

Run tests with coverage:
```bash
npm run test:coverage
```

Run linter:
```bash
npm run lint
```

## CI/CD Workflows

### Continuous Integration (CI)
- **Trigger**: Push to `main` or PR branches, Pull requests to `main`
- **Actions**:
  - Runs tests on Node.js 18.x and 20.x
  - Generates code coverage reports
  - Uploads coverage to Codecov

### Continuous Deployment (CD)
- **Trigger**: Push to `main` branch or version tags (`v*`)
- **Actions**:
  - Runs all tests
  - Builds the application
  - Simulates deployment
  - Creates deployment artifacts

## Project Structure

```
.
├── src/
│   └── index.js          # Main application code
├── test/
│   └── index.test.js     # Unit tests
├── .github/
│   └── workflows/
│       ├── ci.yml        # CI workflow
│       └── cd.yml        # CD workflow
├── .eslintrc.json        # ESLint configuration
├── jest.config.js        # Jest configuration
├── package.json          # Project dependencies
└── README.md             # This file
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT