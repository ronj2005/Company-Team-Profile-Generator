// requires the Contractor class
const Employee = require ("./employee.js")

// Declares the Contractor class and extends the Employee class
class Contractor extends Employee {
    constructor (name, id, email, github) {
    // super perameters
    super(name, id, email)
    // Contractor class info
    this.github = github;
    }

    // get methods for Contractor class
    getGithub() {
        return this.github
    }
    getRole() {
        return "Contractor"
    }
}

// Export the Contractor module
module.exports = Contractor;