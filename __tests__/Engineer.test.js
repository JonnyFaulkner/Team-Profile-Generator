const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('John Doe', '2', 'something@something.com', 'github.com/JohnDoe');

    expect(engineer.name).toBe('John Doe');
    expect(engineer.id).toBe('2');
    expect(engineer.email).toBe('something@something.com');
    expect(engineer.github).toBe('github.com/JohnDoe');
});

test('gets engineer github', () => {
    const engineer = new Engineer('John Doe', '2', 'something@something.com', 'github.com/JohnDoe');

    expect(engineer.getGithub()).toEqual(expect.stringContaining('github.com/JohnDoe'));
});

test('gets engineer role', () => {
    const engineer = new Engineer('John Doe', '2', 'something@something.com', 'github.com/JohnDoe');

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'))
})