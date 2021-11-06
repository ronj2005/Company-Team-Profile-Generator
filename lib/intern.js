// requires the Employee class
const Employee = require ("./Employee.js")

// Declares the intern  class and extends the Employee class
class Intern extends Employee {
    constructor (name, id, email, school) {
    // super perameters
    super(name, id, email)
    // Intern class info
    this.school = school;
    }

   // get methods for Intern class
    getSchool() {
        return this.school
    }
    getRole() {
        return "Intern"
    }
}

module.exports = Intern;