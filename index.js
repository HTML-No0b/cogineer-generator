const inquirer = require('inquirer')
    const fs = require('fs')
    const path= require('path')

const generateHTML = require('./generateHTML')

    const questions = [
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is your e-mail?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is your github?',
            name: 'github'
        },
        {
            type: 'list',
            message: 'What is your role?',
            choices: ['Intern', 'Engineer', 'Manager'],
            name: 'role'
        }
    ];
    

// const generateHTML = `<!DOCTYPE html>
// `<html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
//     <title>Cogineer Team</title>
// </head>

// <body>
//     <header>The best team in the world</header>
//     <div class="manager">
//         <div class="card-body">
//             <h4 class="card-title">Card title</h4>
//             <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
//             <p class="card-text">
//                 <!-- put id card here, email and office number -->
//             </p>
//             <a href="#!" class="card-link">
                
//             </a>
//     </div>
//     <div class=engineer>
//         <div class="card-body">
//             <h4 class="card-title">
              
//             </h4>
//             <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
//             <p class="card-text">
//                 <!-- put id card here, email and git hub -->
//             </p>
//             <a href="#!" class="card-link">Card link</a>
//             <a href="#!" class="card-link">Another link</a>
//         </div>
//     </div>
//     <div class="card">
//         <div class="card-body">
//             <h4 class="card-title">Card title</h4>
//             <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
//             <p class="card-text">
//                 <!-- put id card here, email and git hub -->
//             </p>
//             <a href="#!" class="card-link">Card link</a>
//             <a href="#!" class="card-link">Another link</a>
//         </div>
//     </div>
//     <div class="card">
//         <div class="card-body">
//             <h4 class="card-title">Card title</h4>
//             <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
//             <p class="card-text">
//                 <!-- put id card here, email and git hub -->
//             </p>
//             <a href="#!" class="card-link">Card link</a>
//             <a href="#!" class="card-link">Another link</a>
//         </div>
//     </div>
//     <div class="card">
//         <div class="card-body">
//             <h4 class="card-title">Card title</h4>
//             <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
//             <p class="card-text">
//                 <!-- put id card here, email and git hub -->
//             </p>
//             <a href="#!" class="card-link">Card link</a>
//             <a href="#!" class="card-link">Another link</a>
//         </div>
//     </div> </body>`

























































    function writeFile(filename,data) {
        return fs.writeFileSync(path.join(process.cwd(),filename),data)
    };

    function init(){
        inquirer.prompt(questions)
            .then((inquirerresponses)=>{
                console.log("Generating Team");
                writeFile('index.html', generateHTML({...inquirerresponses}))
            })
    };

    init();
    // writeFile();