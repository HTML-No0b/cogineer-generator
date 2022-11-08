const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
//dont forget to requre the exports
//make array to push teamArray
const generateHTML = require('./generateHTML');
const Manager = require('./manager');
function question() {
    manager = inquirer
        .prompt(
            [{
                type: 'input',
                message: 'What is your name?',
                name: 'name'

            },
            {
                type: 'input',
                message: 'What is your manager ID?',
                name: 'managerId'

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
        .then(
            answers => {
                if (answers.employee === 'Engineer') {
                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                message: 'What is your name?',
                                name: 'name'
                            },
                            {
                                type: 'input',
                                message: 'What is your ID',
                                name: 'ID'
                            },
                            {
                                type: 'input',
                                message: 'What is your github?',
                                name: 'github'
                            }]
                        )
                }
                if (answers.employee === 'Intern') {
                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                message: 'What is your name?',
                                name: 'name'
                            },
                            {
                                type: 'input',
                                message: 'What is your power',
                                name: 'power'
                            },
                            {
                                type: 'input',
                                message: 'What school do you go to ?',
                                name: 'school'
                            }]
                        )
                }
            }
        );
}

function intern(){
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is your id?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What school do you go to ?',
            name: 'email'
        }]
    )
    .then((answers)=>{
        const manager = new Manager(answers.name,answers.id,answers.email,answers.officeNumber)
    })//constructing new class that im inporting. Creat
}// push new object into array

//add loop to ask question on what type of employee(loops )
// const questions = [
// {
//     type: 'input',
//     message: 'What is your name?',
//     name: 'name'
// },
// {
//     type: 'input',
//     message: 'What is your e-mail?',
//     name: 'email'
// },
// {
//     type: 'input',
//     message: 'What is your github?',
//     name: 'github'
// },
// {
//     type: 'list',
//     message: 'What is your role?',
//     choices: ['Intern', 'Engineer', 'Manager'],
//     name: 'role'
// }
// ];

// const intern = [

// ]

function writeFile(filename, data) {
    return fs.writeFileSync(path.join(process.cwd(), filename), data)
};

function init() {
    question()
    // inquirer.prompt(manager)
    //     .then((answers) => {
    //         console.log("Generating Team");
    //         writeFile('index.html', generateHTML({ ...answers }))
    //     })
};

init();
// writeFile();