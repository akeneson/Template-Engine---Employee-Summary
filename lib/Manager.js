// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.


const Employee = require("./Employee");

module.exports = class Manager extends Employee{
    constructor(name, email, id, phone){
        super(name, email, id);
        this.phone = phone;
    }
    getPhone() {
        return this.phone;
    }
    getRole(){
        return "Manager";
    }
}