// requires the Engineer class
const Employee = require ("./employee.js")

// Declares the Manager class and extends the Employee class
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
    // super perameters
    super(name, id, email)
    // Manager class info
    this.officeNumber = officeNumber;
    }

    // get methods for Manager class
    getOfficeNumber() {
        return this.officeNumber
    }
    getRole() {
        return "Manager"
    }
}

module.exports = Manager;




