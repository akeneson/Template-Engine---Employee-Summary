// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// MODULE 20: Ins Subclasses
const Employee = require("./Employee");

module.export = class Engineer extends Employee{
    constructor(name, email, id, github){
        super(name, email, id);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole(){
        return "Engineer";
    }
}

