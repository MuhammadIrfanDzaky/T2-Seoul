# Introduction to Unit Testing

---

## What is Testing?

Software testing is the process of evaluating and verifying that a software product or application does what it's **supposed to do**.

---

## Why is Software Testing Important?

Poor testing has led to real-world disasters:

- **Cyberpunk 2077**: The game shipped with so many bugs and glitches because it was not properly tested, leading to massive refunds and reputational damage.
- **Boeing 737 Max**: The plane crashed due to poorly tested software. Boeing's 737 Max software was outsourced to $9-an-hour engineers, resulting in fatal consequences.

These examples show that untested software isn't just a technical problem — it can have serious business, legal, and human consequences.

---

## Types of Software Testing

| Type | Description | Common Tools |
|---|---|---|
| **Unit Testing** | Tests individual components in isolation | Jest, pytest, JUnit |
| **Integration Testing** | Tests how multiple components interact | Cucumber, Selenium, SoapUI |
| **System Testing** | Tests the entire system as a whole | Selenium, Appium, JMeter |
| **Load Testing** | Tests performance under expected load | JMeter, Gatling, Load Runner |
| **Error Testing** | Simulates failures to test system resilience | Gremlin |
| **Test Automation** | Automates test execution in CI/CD pipelines | Jenkins, CircleCI, GitHub Actions |

---

## What is Unit Testing?

**Unit Testing** ensures individual code components work **correctly in isolation**.

A "unit" is the smallest testable part of an application — typically a single function, method, or class. Unit tests validate that each unit behaves as expected for a given input.

---

## Benefits of Unit Testing

### 1. Efficient Bug Discovery

If there are any input, output, or logic-based errors within a code block, unit tests help catch them before the bugs reach production. When code changes, you run the same set of unit tests — alongside other tests such as integration tests — and expect the same results. If tests fail (also called **broken tests**), it indicates regression-based bugs.

Unit testing also helps find bugs faster. Developers don't spend a large amount of time on debugging activities — they can quickly pinpoint the exact part of the code that has an error.

### 2. Documentation

Unit tests act as a form of **living documentation**. Other developers read the tests to understand what behaviors the code is expected to exhibit when it runs. They use this information to modify or refactor code safely. You can run the unit tests again to confirm that the code still works as expected after changes.

---

## Unit Testing Strategies

To create unit tests, you can follow some basic techniques to ensure coverage of all test cases.

- **Logic checks**: Does the system perform the right calculations and follow the right path through the code given a correct, expected input? Are all paths through the code covered by the given inputs?

- **Boundary checks**: For the given inputs, how does the system respond to typical inputs, edge cases, or invalid inputs? For example, if you expect an integer input between 3 and 7, how does the system respond when you use a 5 (typical input), a 3 (edge case), or a 9 (invalid input)?

- **Error handling**: When there are errors in inputs, how does the system respond? Is the user prompted for another input? Does the software crash?

- **Object-oriented checks**: If the state of any persistent objects is changed by running the code, is the object updated correctly?

---

## Unit Testing Key Aspects

- **Isolation**: Unit tests are designed to test a specific piece of functionality in isolation from the rest of the codebase. This is achieved by using mock objects or stubs to simulate the behavior of external dependencies.

- **Automated**: Unit tests are typically automated, meaning they can be executed by a testing framework without manual intervention. This allows for quick and repeatable testing.

- **Fast Execution**: Unit tests are meant to be fast — completing in milliseconds or seconds — allowing for rapid feedback during development.

- **Repeatable**: Unit tests should produce consistent results each time they are run. If the code hasn't changed, the tests should always pass.

---

## How Do Developers Use Unit Tests?

Developers leverage unit tests at various stages of the software development lifecycle, often following **Test-Driven Development (TDD)** and **Behavior-Driven Development (BDD)** practices.

---

### Test-Driven Development (TDD)

TDD is a development approach where developers **write tests before writing the actual code**.

- Developers create unit tests first, based on functional requirements
- Then they implement the code to make those tests pass
- TDD ensures the code meets specified requirements, improves code quality, and provides a safety net for refactoring

**Example — Write the test first:**

```js
// calculator.test.js
const Calculator = require('./calculator');

describe('Calculator', () => {
  test('add method should return the sum of two numbers', () => {
    const calc = new Calculator();
    expect(calc.add(2, 3)).toBe(5);
  });
});
```

**Then implement the code to pass the test:**

```js
// calculator.js
class Calculator {
  add(a, b) {
    return a + b;
  }
}

module.exports = Calculator;
```

Run the tests with:
```
npx jest
```

---

### Behavior-Driven Development (BDD)

BDD is an agile methodology that focuses on defining the **behavior or functionality of software from the end user's perspective**.

- Tests are written in a **human-readable format** using a **Given-When-Then** structure
- BDD tests verify behavior of the software as a whole, covering multiple units of code working together
- Involves the **whole team** (developers, QA, product) — not just developers

**Example — User Login feature:**

```
Feature: User Login

  Scenario: Successful login with valid credentials
    Given a user with the username "johndoe" and password "password123" exists
    When the user attempts to log in with the username "johndoe" and password "password123"
    Then the user should be redirected to the dashboard

  Scenario: Failed login with invalid credentials
    Given a user with the username "johndoe" exists
    When the user attempts to log in with the username "johndoe" and password "wrongpassword"
    Then the user should see an error message "Invalid username or password"
```

---

### TDD vs BDD — Key Differences

| | TDD | BDD |
|---|---|---|
| **Focus** | Code correctness | System behavior |
| **Written by** | Developers only | Whole team |
| **Language** | Code | Prose (human-readable) |
| **Level** | Low level | High level |
| **Goal** | Build the thing right | Build the right thing |
| **Shared** | Test first, automation | Test first, automation |

---

## When is Unit Testing Less Beneficial?

Unit testing isn't always required for every code block in every project. Here are situations where it may be omitted or deprioritized:

### 1. When Time is Constrained

Writing new unit tests takes significant developer time. While input/output-based tests may be easy to generate, logic-based checks are harder. Developers may also get distracted by refactoring opportunities when writing tests, leading to extended timelines and budget issues.

### 2. UI/UX Applications

When the main concern is look and feel rather than logic, there may not be many meaningful unit tests to write. Manual or visual testing is a better strategy in these cases.

### 3. Legacy Codebases

Writing tests around existing legacy code can be near impossible depending on how it was written. Unit tests require dummy data, and highly interconnected systems with complex data parsing make this especially time-intensive.

### 4. Rapidly Evolving Requirements

If the software is likely to change direction or have features scrapped altogether in any given sprint, there's little value in writing unit tests each time a block of code is developed.

---

## Testing with Jest

### What is Jest?

Jest is a delightful JavaScript testing framework with a focus on simplicity. It works with projects using Babel, TypeScript, Node.js, React, Angular, Vue.js, and more. Jest provides a rich set of features for writing and managing tests, including assertions, mocking, and code coverage reporting.

### Key Features

- **Zero Configuration**: Jest comes preconfigured with sensible defaults, so you can start writing tests right away with minimal setup.
- **Built-in Test Runner**: Jest provides a built-in test runner that executes your tests and provides real-time feedback. It can run tests in parallel, optimizing the testing process.
- **Automatic Mocking**: Jest automatically mocks dependencies, allowing you to focus on the specific behavior of your code without worrying about its dependencies.
- **Snapshot Testing**: Allows you to capture a "snapshot" of your component or data structure and compare it against future snapshots to detect unintended changes.
- **Matchers**: Jest provides a wide range of built-in matchers for making assertions, from common ones like `expect(x).toBe(y)` to more complex ones for different data types.
- **Mock Functions**: Jest provides a way to create mock functions to spy on function calls and control their behavior in tests.
- **Code Coverage**: Jest can generate code coverage reports, showing which parts of your code are covered by tests and which are not.
- **Test Suites and Test Cases**: Jest organizes tests into suites and test cases, making it easy to group related tests and run them selectively.
- **Extensibility**: Jest is highly extensible, allowing you to customize its behavior with plugins and configurations.

---

### Setting Up Jest

1. Set up a TypeScript project as usual
2. Install Jest and its dependencies:
   ```
   npm install jest @types/jest ts-jest --save-dev
   ```
3. Update `tsconfig.json` to include Jest configuration for TypeScript
4. Add Jest configuration in `package.json`
5. Run the tests:
   ```
   npx jest
   ```

---

### Writing Your First Test

In Jest, tests are written using the `test` function. Each test typically follows this pattern:

```js
test('description of the test', () => {
  // Test logic goes here
});
```

Inside the test function, you write the logic to exercise the code you want to test and use Jest's assertion functions to verify the expected behavior.

---

### Jest Concepts

1. **Test**: A piece of code that verifies whether a specific portion of your program behaves as expected under certain conditions. Tests are written to cover different functionalities of your application, ensuring each part works correctly.

2. **Test Suite**: A collection of test cases or test files that focus on testing a specific module, component, or functionality. Test suites help organize your tests and make it easier to run them together.

3. **Pass/Fail**: Each test case will either pass or fail. A test passes if the actual outcome matches the expected outcome. A test fails if the actual outcome differs from the expected outcome, indicating a problem in your code.

---

### Jest Assertions

Jest provides a variety of assertion functions to check for different conditions:

```js
expect(value).toBe(expected)
// Asserts that value is equal to expected.

expect(value).toEqual(expected)
// Asserts that value is deeply equal to expected.

expect(value).not.toBe(expected)
// Asserts that value is not equal to expected.
```

---

### Jest Lifecycle

**`beforeAll`**: Called once before any of the test cases in a test suite are executed. Typically used to set up common resources or perform initializations required by all tests within the suite.

```js
beforeAll(() => {
  // Perform setup operations here, such as initializing a database connection
  initializeDatabase();
});
```

**`afterAll`**: Called once after all the test cases in a test suite have finished running. Commonly used to clean up resources or perform finalizations after all tests have completed.

```js
afterAll(() => {
  // Perform teardown operations here, such as closing a database connection
  closeDatabaseConnection();
});
```
