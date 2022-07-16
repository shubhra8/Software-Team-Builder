const Manager = require('../lib/Manager');

test('Creates new manager', () => {
    const manager = new Manager('Shubhra', 1234, 'shubra@gmail.com',987452352);

    expect(manager.name1).toBe('Shubhra');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.offiNumber).toEqual(expect.any(Number));
})

test('Checks all methods for Manager class', () => {
    const manager = new Manager('Shubhra', 1234, 'shubra@gmail.com',987452352);

    expect(manager.getName()).toBe(manager.name1);
    expect(manager.getId()).toBe(manager.id);
    expect(manager.getEmail()).toBe(manager.email);
    expect(manager.getRole()).toBe('Manager');
})