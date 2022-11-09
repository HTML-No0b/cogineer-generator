const Employee = require('./employee')


class Engineer extends Employee {
    constructor(name, id, email, officeNumber, github) {
        super(name, id, email, officeNumber, github)
        this.officeNumber = officeNumber,
            this.github = github
    }
  getGithub(){
   return this.github
  }
    getRole(){
        return 'Engineer'
    };
};





module.exports = Engineer