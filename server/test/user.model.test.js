const assert = require('assert');

const User = require('../src/models/user.model');

assert(User.schema.path('name'));
assert(User.schema.path('email'));
assert(User.schema.path('password'));

assert.strictEqual(User.schema.path('name').isRequired, true);
assert.strictEqual(User.schema.path('email').isRequired, true);
assert.strictEqual(User.schema.path('password').isRequired, true);

console.log('User model test passed');
