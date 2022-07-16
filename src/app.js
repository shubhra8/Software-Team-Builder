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
    <link rel="stylesheet" href="style.css" />
</head>
<img style="width: 20%;height: 10%;margin-left: 38%;"src="https://www.sasp-science.org/sites/default/files/pictures/TEAMS%20Logo.jpg"
				alt="image"></header>`
            }
const manager = (Array) => {
    return `<br>
    <br><body>
    <section id="main">
       
        <h2><b>Manager</b></h2>
        <section id="Project">


            <div div style="border-color: black;border-width: 2px;" class="card">
               
                <h5 id="Name">Name-${Array[0].ManagerName}</h5>
                <h5 id="id">Id-${Array[0].Empid}</h5>
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
       
        <h2><b>Engineer</b></h2>
        <section id="Project" >


            <div div style="border-color: black;border-width: 2px;" class="card">

               
                <h5 id="Name">Name-${engArray.Engineername}</h5>
                <h5 id="id">Id-${engArray.Empid}</h5>
                <a href="mailto:${engArray.Emailid}">Emailid- ${engArray.Emailid}</a>
                <a href="https://github.com/${engArray.Gituserid}">Githubid -https://github.com/${engArray.Gituserid}</a>
                
            </div>
            


        </section>
    </section>`
}
const Intern = (intArray) => {
    return `<br>
          <br>
    <section id="main">
       
        <h2><b>Intern</b></h2>
        <section id="Project" >

     <div div style="border-color: black;border-width: 2px;" class="card">

               
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