// requires the Engineer class
const Employee = require ("./employee.js")

// Declares the Engineer class and extends the Employee class
class Engineer extends Employee {
    constructor (name, id, email, github) {
    // super perameters
    super(name, id, email)
    // Engineer class info
    this.github = github;
    }

    // get methods for Engineer class
    getGithub() {
        return this.github
    }
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;