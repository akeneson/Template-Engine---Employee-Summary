// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// MODULE 20: Ins Subclasses
const Employee = require("./Employee");

module.exports = class Engineer extends Employee{
    constructor(name, email, id, github){
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole(){
        return "Engineer";
    }
}

