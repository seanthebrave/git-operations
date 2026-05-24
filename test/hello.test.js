const { hello } = require('../src/hello');

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL: ${message}`);
    process.exit(1);
  }
  console.log(`PASS: ${message}`);
}

assert(hello('World') === 'Hello, World!', 'hello returns greeting with name');
assert(hello('Claude') === 'Hello, Claude!', 'hello works with different names');

console.log('\nAll tests passed!');