# Unhandled Undefined/NaN Values in Addition Function

This repository demonstrates a common error in JavaScript where undefined or NaN values aren't explicitly handled, leading to unexpected results. The `myFunc` function adds two numbers. However, if either input is `undefined`, `NaN`, or `null`, it will produce an unexpected output. This can cause unexpected behavior in your application.

## Bug
The `bug.js` file contains the buggy code. The function does not explicitly check for `undefined` or `NaN` inputs. This is a subtle bug that can be easily overlooked.

## Solution
The `bugSolution.js` file provides a corrected version of the function. This version includes explicit checks for `undefined`, `NaN`, and `null` values, handling them appropriately. It also demonstrates more robust input validation techniques.

## How to run
1. Clone this repository.
2. Navigate to the directory.
3. Open `bug.js` and `bugSolution.js` in your preferred text editor.
4. You can run the files in a browser's console or using Node.js.