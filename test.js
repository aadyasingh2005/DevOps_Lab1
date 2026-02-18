// Simple unit test simulation
const assert = require('assert');

// Example test: Check if a basic function works
function add(a, b) {
  return a + b;
}

try {
  assert.strictEqual(add(2, 3), 5);
  console.log("Unit tests passed!");
} catch (error) {
  console.error("Unit tests failed:", error.message);
  process.exit(1);
}
