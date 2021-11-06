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
    return "Employee"
}

}
module.exports = Employee;

