const inquirer = require('inquirer')

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
    

    function writeFile(filename,data) {
        return fs.writeFileSync(path.join(process.cwd(),filename),data)
    };

    function init(){
        inquirer.prompt(questions)
            .then((inquirerresponses)=>{
                console.log("Generating Team", generateHTML({...inquirerresponses}))
            })
    }

    init();