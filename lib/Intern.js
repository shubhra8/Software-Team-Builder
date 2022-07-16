const Employee = require('./Employee');
class Intern extends Employee {
  constructor(name1,id,email,school) {
    super(name1,id,email)
    this.school=school;
    //this.name1=name1;
    //this.id=id;
    //this.email=email;
  }
   getSchool(){
     return this.school;
}
getRole(){
  return "Intern"
}
}

module.exports = Intern;