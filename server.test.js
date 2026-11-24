const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');

test('Login page should exist', () => {
    assert.strictEqual(fs.existsSync('login.html'), true);
});

test('Registration page should exist', () => {
    assert.strictEqual(fs.existsSync('register.html'), true);
});

test('Login page should contain an email field', () => {
    const content = fs.readFileSync('login.html', 'utf8');
    assert.ok(content.includes('email'));
});

test('Registration page should contain a phone field', () => {
    const content = fs.readFileSync('register.html', 'utf8');
    assert.ok(content.includes('phone'));
});
