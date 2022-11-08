class Engineer extends Employee {
    constructor(officeNumber, github) {
        super(officeNumber,github)
        this.officeNumber = officeNumber,
            this.github = github
    }
}
module.exports = Engineer