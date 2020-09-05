// TODO: Write code to define and export the Employee class

// OOP module 18: Ins-Classes

class Employee{
    constructor(name, email, id){
        this.name = name;
        this.email = email;
        this.id = id;
    }
    // function to get employees name
    printInfo(){
        console.log(`Name: ${this.name}`);
        console.log(`email: ${this.email}`);
        console.log(`ID: ${this.id}`);
    }
}

const employee = new Employee("ak", "ak@gmail.com", "0312");

employee.printInfo();