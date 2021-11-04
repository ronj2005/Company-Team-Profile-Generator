// declares Employee class
class Employee {
    constructor (name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
// get methods for the Employee class
getName() {
    return this.name
}
getId() {
    return this.id
}
getEmail() {
    return this.email
}
getRole() {
    return this.role
}

}
module.exports = Employee;

// requires the   class
// Declares the   class and extends the Employee class
// super perameters
//   class info
// get methods for   class