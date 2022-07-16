const Engineer = require('../lib/Engineer');

test('Creates new employee', () => {
    const engineer = new Engineer('Shubhra', 1234, 'shubra@gmail.com','shubhra8');

    expect(engineer.name1).toBe('Shubhra');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
})

test('Checks all methods for Engineer class', () => {
    const engineer = new Engineer('Shubhra', 1234, 'shubra@gmail.com','shubhra8');

    expect(engineer.getName()).toBe(engineer.name1);
    expect(engineer.getId()).toBe(engineer.id);
    expect(engineer.getEmail()).toBe(engineer.email);
    expect(engineer.getGithub()).toBe(engineer.gituserName);
    expect(engineer.getRole()).toBe('Engineer');
})