const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const genDetails = require("./lib/Manager.js");
const head = require(`./src/app.js`);
const tail = require(`./src/app.js`);
const mang = require(`./src/app.js`);
const engi = require(`./src/app.js`);
const Inter = require(`./src/app.js`);
const Employee = require('./lib/Employee');
const internal = require('stream');
const engArray = [];
const intArray = [];
const Array = [];
const promptManager = () => {
return inquirer.prompt([
    {
      type: 'input',
      name: 'ManagerName',
      message: 'Enter the Name of the Manager?',
     
    },
    {
      type: 'input',
      name: 'Empid',
      message: 'Enter Emp id',
      
    },
    {
      type: 'input',
      name: 'Emailid',
      message: 'Enter Email id',
      
    },
    {
       type: 'input',
      name: 'Phone',
      message: 'Enter Phone Number',  
    },
   
      ]);
 
};
const init1 = () => {
  promptManager()
    .then((man) => {
       Array.push(man);
       return chooseEmployee();

})
}
//function to choose employees
     const chooseEmployee = () => {
     return inquirer.prompt([
         {
           name: "Teammember",
           type: "list",
           message: 'Choose Team for your Project',
           choices: ["Engineer", "Intern", "Finish"],
         }
       ])
     
       .then((Int) => {
       if (Int.Teammember === "Engineer") {
         return chooseEngineer();

       }
       else if (Int.Teammember === "Intern") {
         return chooseIntern();
       }
        else if (Int.Teammember === "Finish") {
         console.log("Done");
        // console.log(Array);
       makefileHtml()
       }
      }
       )}
      
    //Enter details of Engineer

   const chooseEngineer =() =>{
    return inquirer.prompt([
    {
      type: 'input',
      name: 'Engineername',
      message: 'Enter the Name of the Engineer',
     
    },
    {
      type: 'input',
      name: 'Empid',
      message: 'Enter Emp id',
      
    },
    {
      type: 'input',
      name: 'Emailid',
      message: 'Enter Email id',
      
    },
    {
      type: 'input',
      name: 'Gituserid',
      message: 'Enter Github user id',
    },
  ])
.then((eng) => {
  engArray.push(eng);
  return chooseEmployee();
}
  )}

//Enter details of Intern

     const chooseIntern =() =>{
    return inquirer.prompt([
    {
      type: 'input',
      name: 'Internname',
      message: 'Enter the Name of the Intern',
     
    },
    {
      type: 'input',
      name: 'Empid',
      message: 'Enter Emp id',
      
    },
    {
      type: 'input',
      name: 'Emailid',
      message: 'Enter Email id',
      
    },
    {
      type: 'input',
      name: 'school',
      message: 'Enter School Name',
    },
  ])
.then((Int) => {
  intArray.push(Int);
  console.log(intArray);
  return chooseEmployee();
}
  )}

  
  //----------------------------------------------------------------------------
      


init1();
//This function will generate HTML file
function makefileHtml() {
    
      const fileName = './dist/index.html';
        const first = head.header();
         const second = mang.manager(Array);
         const fifth = tail.tail();
         const third = engi.engineer(engArray);
        const fourth = Inter.Intern(intArray);
        let content,tempcontent,tempcontent1;
        let i = engArray.length;
        let j =intArray.length;

       //Conditions to check the length of Array of Enginner/Intern and it also provide position of employees in index.html
        if(i>0 && j>0)
        {
           while(i>0){
            tempcontent += engi.engineer(engArray[i-1]);
           i--;
          }
           while(j>0){
            
            tempcontent += Inter.Intern(intArray[j-1]);
           j--;
         
          }
          content =first+second+tempcontent+fifth;
       
        }
        else if (engArray.length>0) 
         {
           
           while(i>0){
            
            tempcontent += engi.engineer(engArray[i-1]);
           i--;
           
          }
          content =first+second+tempcontent+fifth;
          
        }
        else if (intArray.length>0)
        { 
           while(j>0){
            console.log(intArray[j-1]);
            tempcontent += Inter.Intern(intArray[j-1]);
           j--;
          }
          content =first+second+tempcontent+fifth;
        }
        
        else if (engArray.length==0 && intArray.length==0)
        {
        
         content = first+second+fifth;
         
        }
        
      
    writeToFile(fileName, content)
//  function to write Index.html file
function writeToFile(fileName, content) {
    fs.writeFile(fileName, content, (err) =>
  err ? console.error(err) : console.log('Success!')
    );
}
}