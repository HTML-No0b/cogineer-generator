const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
//dont forget to requre the exports
//make array to push teamArray
const teamArray = [];
const generateHTML = require('./generateHTML');
const Manager = require('./manager');
const Employee = require('./employee');
const Intern = require('./intern');
const Engineer = require('./engineer');


function startApp() {
    function addManager() {
        inquirer
            .prompt(
                [{
                    type: 'input',
                    message: 'What is your name?',
                    name: 'name'

                },
                {
                    type: 'input',
                    message: 'What is your managerID',
                    name: 'managerID'

                },
                {
                    type: 'input',
                    message: 'What is your E-mail?',
                    name: 'email'

                },
                {
                    type: 'input',
                    message: 'What is your Office Number?',
                    name: 'officeNumber'

                },
                {
                    type: 'list',
                    choices: ['Intern', 'Engineer'],
                    message: 'Would you like to add an employee?',
                    name: 'employee'

                }],
            )
            .then(answers => {
                const manager = new Manager(answers.name, answers.mangerID, answers.email, answers.officeNumber);
                teamArray.push(manager)
                startTeam();
            })
    };

    function startTeam() {
        // function startTeam(){
        inquirer
            .prompt([{
                type: 'list',
                message: 'Which employee would you like to add to your team?',
                name: 'teamList',
                choices: ['Manager', 'Engineer', 'Intern', 'None']
            }
            ])
            .then(function (userAnswers) {
                switch (userAnswers.teamList) {
                    case 'Manager':
                        addManager();
                        break
                    case 'Enginner':
                        addEngineer();
                        break
                    case 'Intern':
                        addintern();
                        break
                    default:
                        generateHTML();
                }
            })
    }

    function addintern() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is your name?',
                    name: 'name'
                },
                {
                    type: 'input',
                    message: 'What is your email?',
                    name: 'email'
                },
                {
                    type: 'input',
                    message: 'What school do you go to ?',
                    name: 'school'
                },
                {
                    type: 'input',
                    message: 'What is your Github Username?',
                    name: 'github'
                },
            ])
            .then(answers => {
                const intern = new Intern(answers.name, answers.email, answers.school, answers.github);
                teamArray.push(intern);
                startTeam();
            })
    };
    function addEngineer() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is your name?',
                    name: 'name'
                },
                {
                    type: 'input',
                    message: 'What is your employee ID?',
                    name: 'id'
                },
                {
                    type: 'input',
                    message: 'What is your email?',
                    name: 'email'
                },
                {
                    type: 'input',
                    message: 'What is your Github Username?',
                    name: 'github'
                }

            ])
            .then(answers => {
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                teamArray.push(engineer);
                startTeam();
            })
       
    };
 function generateHTML() {
            console.log(teamArray)
            fs.writeFileSync(generateHTML(teamArray), 'UTF-8')
        }


    addManager();
};


// function addManager() {
//     inquirer
//         .prompt(
//             [{
//                 type: 'input',
//                 message: 'What is your name?',
//                 name: 'name'

//             },
//             {
//                 type: 'input',
//                 message: 'What is your managerID',
//                 name: 'managerID'

//             },
//             {
//                 type: 'input',
//                 message: 'What is your E-mail?',
//                 name: 'email'

//             },
//             {
//                 type: 'input',
//                 message: 'What is your Office Number?',
//                 name: 'officeNumber'

//             },
//             {
//                 type: 'list',
//                 choices: ['Intern', 'Engineer'],
//                 message: 'Would you like to add an employee?',
//                 name: 'employee'

//             }],
//         )
//         .then(answers => {
//             const manager = new Manager(answers.name, answers.mangerID, answers.email, answers.officeNumber);
//             teamArray.push(manager)
//             startTeam();
//         })
// };
// function addintern() {
//     inquirer
//         .prompt([
//             {
//                 type: 'input',
//                 message: 'What is your name?',
//                 name: 'name'
//             },
//             {
//                 type: 'input',
//                 message: 'What is your email?',
//                 name: 'email'
//             },
//             {
//                 type: 'input',
//                 message: 'What school do you go to ?',
//                 name: 'school'
//             },
//             {
//                 type: 'input',
//                 message: 'What is your Github Username?',
//                 name: 'github'
//             },
//         ])
//         .then(answers => {
//             const intern = new Intern(answers.name, answers.email, answers.school, answers.github);
//             teamArray.push(intern);
//             startTeam();
//         })
// };
// function addEngineer() {
//     inquirer
//         .prompt([
//             {
//                 type: 'input',
//                 message: 'What is your name?',
//                 name: 'name'
//             },
//             {
//                 type: 'input',
//                 message: 'What is your employee ID?',
//                 name: 'id'
//             },
//             {
//                 type: 'input',
//                 message: 'What is your email?',
//                 name: 'email'
//             },
//             {
//                 type: 'input',
//                 message: 'What is your Github Username?',
//                 name: 'github'
//             }

//         ])
//         .then(answers => {
//             const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
//             teamArray.push(engineer);
//             generateHTML();
//         })
//     function generateHTML(){
//         console.log('team made')
//         fs.writeFileSync(generateHTML(teamArray),'UTF-8')
//     }
// };
console.log('team')
startApp();
// generateHTML();