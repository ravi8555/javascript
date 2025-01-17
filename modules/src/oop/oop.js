// class Person{
//     constructor(name, age){
//          this.name  = name;
//          this.age =  age;
//     }

//     greet(){
//         return `Hello my Name is ${this.name} and age is ${this.age}`
//     }
// }
// const person1 = new Person("Ravindra", 42);
// console.log(person1.greet());
// export default Person;


/* Create a Car Class

Define a Car class with a constructor that takes make, model, and year as parameters.

Implement a method called getDetails that returns a string in the format: This car is a [year] [make] [model].

Create an instance of the Car class and call the getDetails method to test it.*/

// class Car{
//     constructor(make, model, year){
//         this.make = make;
//         this.model = model;
//         this.year = year
//     }
//     getDetails(){
//         return `This car is a ${this.year} ${this.make} ${this.model}`
//     }
// }
// const myCar = new Car("Honda", "Amaze", "2025");
// const myCarDetails = myCar.getDetails();
// console.log(myCarDetails);
// export default Car;

// class Book{
//     constructor(title, author, isbn, isAvailable){
//         this.title = title;
//         this.author = author;
//         this.isbn = isbn;
//         this.isAvailable = isAvailable
//     }
//     markAsBorrowed(){
//         this.isAvailable = true
//     }
//     markAsReturned(){
//         this.isAvailable = false
//     }
// }

// const newBook = new Book("Rich Dad Poor Dad", "Robert Kiyosaki", "150002020");;
// console.log(newBook);

// export default Book

function classInheritance (){

class Person{
    constructor(firstName, lastName){
        if (!firstName || !lastName) {
            throw new Error("Both firstName and lastName are required");
        }
        this.firstName = firstName;
        this.lastName = lastName
    }

    fullName(){
        return `MY Full Name Is ${this.firstName} ${this.lastName}`
    }

    

}


class Employee extends Person{
    constructor(firstName, lastName, position, salary){
        super(firstName, lastName);

        if (typeof position !== "string" || position.trim() === "") {
            throw new Error("Position must be a valid string");
        }
        if (typeof salary !== "number" || salary < 0) {
            throw new Error("Salary must be a positive number");
        }

        this.position = position;
        this.salary = salary
    }
    toString(){
       return `${this.fullName()}, Position: ${this.position}, Salary ${this.salary}`
    }
}


const emp = new Employee("Prafulla", "Patil", "Front End Dev", 500);
console.log(emp.toString());

}
classInheritance()

