const Intern = require('../lib/Intern')

test('creates intern object', () => {
    const intern = new Intern('John Doe', '2', 'something@something.com', 'UTA');

    expect(intern.name).toBe('John Doe');
    expect(intern.id).toBe('2');
    expect(intern.email).toBe('something@something.com');
    expect(intern.school).toBe('UTA');
})

test('gets interns school', () => {
    const intern = new Intern('John Doe', '2', 'something@something.com', 'UTA');

    expect(intern.getSchool()).toEqual(expect.stringContaining('UTA'));
})

test('gets interns role', () => {
    const intern = new Intern('John Doe', '2', 'something@something.com', 'UTA');

    expect(intern.getRole()).toBe('Intern')
})