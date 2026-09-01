# Calculator

A browser-based calculator built with HTML, CSS, and JavaScript as part of [The Odin Project](https://www.theodinproject.com/) Foundations course.

The goal of this project is to combine the JavaScript fundamentals covered so far with DOM manipulation and event handling.

## Live Demo

[View Live Demo](#)

## Features

- Basic arithmetic operations:
  - Addition
  - Subtraction
  - Multiplication
  - Division
- Calculator display
- Clear button
- Chained calculations
- Consecutive operator handling
- Division-by-zero protection
- Long decimal result rounding
- Starting a new calculation after displaying a result

## Extra Features

- Decimal number input
- Backspace button
- Keyboard support

## Built With

- HTML
- CSS
- JavaScript

## Project Requirements

The calculator should:

- Store the first number, operator, and second number separately.
- Use an `operate()` function to perform calculations.
- Update the display when digits are entered.
- Evaluate an expression only when two numbers and an operator are available.
- Evaluate chained operations one pair at a time.

For example:

```text
12 + 7 - 1 =
```

should be processed as:

```text
12 + 7 = 19
19 - 1 = 18
```

rather than evaluating the whole expression at once.

### Edge Cases

The calculator should correctly handle:

- Pressing `=` before a complete operation exists.
- Pressing operators multiple times consecutively.
- Clearing all stored calculator state.
- Dividing by zero.
- Results with long decimal values.
- Entering a digit after a result has already been displayed.
- Preventing multiple decimal points in the same number.

## Important

This project does **not** use `eval()` or `new Function()` to evaluate mathematical expressions.

The calculation logic is implemented manually using JavaScript functions.

## What I Practice

This project focuses on:

- JavaScript functions
- Objects and variables
- Conditional logic
- DOM manipulation
- Event listeners
- Event handling
- Managing application state
- Working with user input
- Debugging edge cases
- Breaking a larger problem into smaller functions

## Project Structure

```text
calculator/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Credits

Project assignment from [The Odin Project – Calculator](https://www.theodinproject.com/lessons/foundations-calculator).