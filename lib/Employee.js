// TODO: Write code to define and export the Employee class

// OOP module 18: Ins-Classes

module.exports = class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // function to get employees name

    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee";
    }

    
    // printInfo(){
    //     console.log(`Name: ${this.name}`);
    //     console.log(`email: ${this.email}`);
    //     console.log(`ID: ${this.id}`);
    // }

}