// TODO: Write code to define and export the Employee class

// OOP module 18: Ins-Classes

module.exports = class Employee{
    constructor(name, email, id){
        this.name = name;
        this.email = email;
        this.id = id;
    }
    // function to get employees name

    getName(){
        return this.name;
    }
    getEmail(){
        return this.email;
    }
    getID(){
        return this.id;
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