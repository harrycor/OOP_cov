class Person {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
    }
    greet() {
        console.log(`Hello my name is ${this.name}, I am ${this.age} years old, and i live in ${this.city}`);
    };
};



// vehicle classes
class Vehicle {
    constructor(manufacter, wheelAmount, vType) {
        this.manufacter = manufacter;
        this.wheelAmount = wheelAmount;
        this.vType = vType;
    }

    aboutVehicle() {
        console.log(`This vehicle is a ${this.vType}, The manufacturer is ${this.manufacter}, and it has ${this.wheelAmount} wheels.`)
    }
}

class Trucks extends Vehicle {
    constructor(manufacter, wheelAmount, doors, bed) {
        super(manufacter, wheelAmount);
        this.vType = 'Truck';
        this.doors = doors;
        this.bed = bed;
    }
}
// 


class Sedan extends Vehicle {
    constructor(manufacter, size, mpg) {
        super(manufacter);
        this.wheelAmount = 4;
        this.size = size;
        this.mpg = mpg;
        this.vType = 'Sedan';
    }
}

class Motorcyles extends Vehicle {
    constructor(manufacter) {
        super(manufacter);
        this.wheelAmount = 2;
        this.handlebars = true;
        this.noDoors = true;
        this.vType = 'Motorcycle';
    }
}

// Person.prototype.greet = function() {
//     console.log(`Hello my name is ${this.name}, I am ${this.age} years old, and i live in ${this.city}`);
// }

// let person1 = {
//     name: 'john',
//     greet: function sayHell() {
//         console.log(`Hello my name is ${this.name}`)
//     }
// };
// let person2 = {
//     name: "matt",
//     greet: function sayHell() {
//         console.log(`Hello my name is ${this.name}`)
//     }
// };
// let person3 = {
//     name: "timmy",
//     greet: function sayHell() {
//         console.log(`Hello my name is ${this.name}`)
//     }
// };
// let person4 = {
//     name: "Jason",
//     greet: function sayHell() {
//         console.log(`Hello my name is ${this.name}`)
//     }
// };
// let person5 = {
//     name: "michelle",
//     greet: function sayHell() {
//         console.log(`Hello my name is ${this.name}`)
//     }
// };

let one = new Person('jonh', 'NY', 20);
let two = new Person('timmy', 'GA', 32);
let three = new Person('jason', 'CA', 11);
let four = new Person('michelle', 'MI', 54);
let five = new Person('jamal', 'MA', 30);

one.greet();
two.greet();
three.greet();
four.greet();
five.greet();

let truck = new Trucks('Dodge', 6, 4, true);
console.log(truck);
console.log(truck.aboutVehicle());
// truck.aboutVehicle();

let sed = new Sedan('Toyota', 'Large', 65);
console.log(sed);
console.log(sed.aboutVehicle());

let moto = new Motorcyles('Harley');
console.log(moto);
moto.aboutVehicle();