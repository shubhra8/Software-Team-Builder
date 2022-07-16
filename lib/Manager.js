const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name1,id,email,offiNumber) {
    super(name1,id,email)
    this.offiNumber=offiNumber;
    //this.name1=name1;
    //this.id=id;
    //this.email=email;
  }
  getRole() {
        return 'Manager'
    }
 
}


      //var name=document.getElementById("Name");
      //name=`${data.ManagerName}`;
module.exports = Manager;


