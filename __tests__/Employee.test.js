const Employee = require('../lib/Employee')

test('creates employee object', () => {
    const employee = new Employee('John Doe', '2', 'something@something.com');

    expect(employee.name).toBe('John Doe');
    expect(employee.id).toBe('2');
    expect(employee.email).toBe('something@something.com');
});

test("gets employee's name", () => {
    const employee = new Employee('John Doe', '2', 'something@something.com');

    expect(employee.getName()).toEqual(expect.stringContaining('John Doe'));
});

test("gets employee's id", () => {
    const employee = new Employee('John Doe', '2', 'something@something.com');

    expect(employee.getId()).toEqual(expect.stringContaining('2'));
});

test("gets employee's email", () => {
    const employee = new Employee('John Doe', '2', 'something@something.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('something@something.com'));
})

test("gets employee's role", () => {
    const employee = new Employee('John Doe', '2', 'something@something.com')

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'))
})