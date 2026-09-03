const assert = require('assert');

const User = require('../src/models/user.model');

const run = async () => {
    assert(User.schema.path('name'));
    assert(User.schema.path('email'));
    assert(User.schema.path('password'));

    assert.strictEqual(User.schema.path('name').isRequired, true);
    assert.strictEqual(User.schema.path('email').isRequired, true);
    assert.strictEqual(User.schema.path('password').isRequired, true);

    const user = new User({
        name: 'Test User',
        email: 'test@example.com',
        password: 'plain-text-password'
    });

    await User.schema.s.hooks.execPre('save', user);

    assert.notStrictEqual(user.password, 'plain-text-password');
    assert.strictEqual(user.password.startsWith('$2'), true);

    console.log('User model test passed');
};

run().catch((error) => {
    console.error(error);
    process.exit(1);
});
