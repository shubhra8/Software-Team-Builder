const Employee = require('../lib/Employee');

test('Creates new employee', () => {
    const employee = new Employee('Shubhra', 1234, 'shubra@gmail.com');

    expect(employee.name1).toBe('Shubhra');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test('Checks all methods for Employee class', () => {
    const employee = new Employee('Shubhra', 1234, 'shubra@gmail.com');

    expect(employee.getName()).toBe(employee.name1);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe('Employee');
})