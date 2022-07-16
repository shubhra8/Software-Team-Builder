const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name1,id,email,gituserName) {
    super(name1,id,email)
    this.gituserName=gituserName;
    this.name1=name1;
    this.id=id;
    this.email=email;
  }
  getRole() {
		return 'Engineer';
	}
  getGithub() {
   return this.gituserName;
  }
}
//const engineer = new Engineer('shubhra8','shubhra',23,'shubh@gmail.com');
//engineer.printInfo();
//engineer.getRole('ENGINEER');
//engineer.getGithub();

module.exports = Engineer;