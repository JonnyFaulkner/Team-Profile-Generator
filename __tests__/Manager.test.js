const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const manager = new Manager('John Doe', '2', 'something@something.com', '12');

    expect(manager.name).toBe('John Doe');
    expect(manager.id).toBe('2');
    expect(manager.email).toBe('something@something.com');
    expect(manager.office).toBe('12');
});

test('gets managers role', () => {
    const manager = new Manager('John Doe', '2', 'something@something.com', '12');

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'))
})