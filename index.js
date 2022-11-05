const inquirer = require('inquirer')

inquirer
.prompt(
    {
        type:'input',
        message:'What is your name?',
        name:'name'
    },
    {
        type:'input',
        message:'What is your e-mail?',
        name:'email'
    },
    {
        type:'input',
        message:'What is your github?',
        name:'github'
    },
);