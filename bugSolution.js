function myFunc(a, b) {
  // Check if a or b is undefined, null or NaN. Use Number.isNaN to properly check for NaN
  if (a === undefined || b === undefined || a === null || b === null || Number.isNaN(a) || Number.isNaN(b)) {
    return 0; // Handle undefined, null and NaN values
  }
  return a + b; //add only when both are numbers
}

console.log(myFunc(undefined, 5)); // Output: 0
console.log(myFunc(5, undefined)); // Output: 0
console.log(myFunc(null, null)); // Output: 0
console.log(myFunc(NaN, 5)); // Output: 0
console.log(myFunc(5, NaN)); // Output: 0
console.log(myFunc(5, 5)); // Output: 10