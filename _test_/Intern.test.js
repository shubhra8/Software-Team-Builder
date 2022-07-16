const Intern = require('../lib/Intern');

test('Creates new Intern', () => {
    const intern = new Intern('Shubhra', 1234, 'shubra@gmail.com','little flower');

    expect(intern.name1).toBe('Shubhra');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})

test('Checks all methods for Intern class', () => {
    const intern = new Intern('Shubhra', 1234, 'shubra@gmail.com','little flower');

    expect(intern.getName()).toBe(intern.name1);
    expect(intern.getId()).toBe(intern.id);
    expect(intern.getEmail()).toBe(intern.email);
    expect(intern.getSchool()).toBe(intern.school);
    expect(intern.getRole()).toBe('Intern');
})