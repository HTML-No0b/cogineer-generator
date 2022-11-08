const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')

const generateHTML = require('./generateHTML')
function question(){ manager = inquirer
    .prompt(
        [{
            type: 'input',
            message: 'What is your manager ID?',
            name: 'managerId'

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
            if (answers.employee === 'Engineer'){
                inquirer
                .prompt([
                {
                    type:'input',
                    message:'What is your name?',
                    name:'name'
                }]
                )
                .then(
                    newAnswers =>{
                        console.log(newAnswers)
                    }
                )
            }
        }
    );
    }

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
    //     .then((inquirerresponses) => {
    //         console.log("Generating Team");
    //         writeFile('index.html', generateHTML({ ...inquirerresponses }))
    //     })
};

init();
    // writeFile();