const header = () => {
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Project Team Webpage</title>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400&family=Merriweather:wght@700&display=swap"
        rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="./Assets/css/style.css" />
</head>
<div><img style="width: 20%;height: 10%;margin-left: 38%;"src="https://www.sasp-science.org/sites/default/files/pictures/TEAMS%20Logo.jpg"
				alt="image"></div></header>`
            }
const manager = (Array) => {
    return `<br>
    <br><body style="background-color: rgb(131, 119, 119);">
    <section id="main">
       
        <h2 style="margin-left: 35%"><b>Manager</b></h2>
        <section id="Project">


            <div style="margin-left: 35%;width: 400px;height: 200px;border-color: blue" class="card">
               
                <h5 id="Name">Name-${Array[0].ManagerName}</h5>
                <h5 id="id">Id-${Array[0].Empid}</h5>
                <h5 id="Email">Email-</h5>
                <a href="mailto:${Array[0].Emailid}">Email id ${Array[0].Emailid}</a>
                <h5 id="Phone">Phone-${Array[0].Phone}</h5>
              
            </div>
            
        </section>
    </section>
    `
}

const engineer = (engArray) => {
    return `<br>
    <br>
    <section id="main">
       
        <h2 style="margin-left: 35%"><b>Engineer</b></h2>
        <section id="Project" >


            <div style="margin-left: 35%;width: 400px;height: 200px;border-color: blue" class="card">

               
                <h5 id="Name">Name-${engArray.Engineername}</h5>
                <h5 id="id">Id-${engArray.Empid}</h5>
                <a href="mailto:${engArray.Emailid}">Email id ${engArray.Emailid}</a>
                <a href="https://github.com/${engArray.Gituserid}">Git hub User id -https://github.com/${engArray.Gituserid}</a>
                
            </div>
            


        </section>
    </section>`
}
const Intern = (intArray) => {
    return `<br>
          <br>
    <section id="main">
       
        <h2 style="margin-left: 35%"><b>Intern</b></h2>
        <section id="Project" >


            <div style="margin-left: 35%;width: 400px;height: 200px;border-color: blue" class="card">

               
                <h5 id="Name">Name-${intArray.Internname}</h5>
                <h5 id="id">Id-${intArray.Empid}</h5>
                <a href="mailto:${intArray.Emailid}">Email id ${intArray.Emailid}</a>
                <h5 id="Phone">Phone-${intArray.school}</h5>
            </div>
            


        </section>
    </section>`
}
const tail = () => {
    return `</body>`
}


module.exports = { header, manager, engineer,Intern,tail};