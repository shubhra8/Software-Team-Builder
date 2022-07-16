const { getDiffieHellman } = require("crypto");
const inquirer = import("inquirer");
const { getSystemErrorName } = require("util");

class Employee {
  // Just like constructor functions, classes can accept arguments
  constructor(name1, id,email) {
   this.name1=name1;
   this.id=id;
   this.email=email;
  }
   printInfo() {
    console.log(`Name: ${this.name1}`);
    console.log(`id: ${this.id}`);
    console.log(`id: ${this.email}`);
  }
  getName() {
   return this.name1;
  }
  getId(){
  return this.id;
  }
   getEmail() {
   return this.email;
  }
   getRole() {
    return 'Employee'
 }
 
}
 
//getName();
//getId();
//getEmail();
//getRole();
//const employee = new Employee('Shivansh', 1,'shivu@gmail.com');
//employee.printInfo();
//employee.getName();
//employee.getId();
//employee.getEmail();
//employee.getRole('EMPLOYEE');
module.exports = Employee;