class Car {
    constructor(name, brand, model, type, color, weight, age) {
        this.name = name;
        this.brand = brand;
        this.model = model;
        this.type = type;
        this.color = color;
        this.weight = weight;
        this.age = age;
    }

    displayInfo() {
        console.table(`Car Info: ${this.name} - ${this.color} ${this.brand} ${this.model}`);
        document.write(`<p>Car Info: ${this.name} - ${this.color} ${this.brand} ${this.model}</p>`);
    }
}

// Animal Class
class Animal {
    constructor(name, type, color, weight, age) {
        this.name = name;
        this.type = type;
        this.color = color;
        this.weight = weight;
        this.age = age;
    }

    makeSound() {
        console.table(`Animal Sound: Roar! ${this.name} is a ${this.color} ${this.type}.`);
        document.write(`<p>Animal Sound: Roar! ${this.name} is a ${this.color} ${this.type}.</p>`);
    }
}

// Person Class
class Person {
    constructor(name, type, age, gender) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.gender = gender;
    }

    introduce() {
        console.table(`Person Introduction: Hi, I'm ${this.name}, a ${this.age}-year-old ${this.gender}.`);
        document.write(`<p>Person Introduction: Hi, I'm ${this.name}, a ${this.age}-year-old ${this.gender}.</p>`);
    }
}

// Create Car objects
const car1 = new Car("Car1", "Toyota", "Camry", "Sedan", "Blue", 1500, 3);
const car2 = new Car("Car2", "Honda", "Accord", "Sedan", "Red", 1600, 2);
const car3 = new Car("Car3", "Ford", "Mustang", "Sports Car", "Yellow", 1700, 1);

// Create Animal objects
const lion = new Animal("Lion1", "Lion", "Golden", 200, 5);
const elephant = new Animal("Elephant1", "Elephant", "Gray", 5000, 10);
const tiger = new Animal("Tiger1", "Tiger", "Orange", 250, 4);

// Create Person objects
const person1 = new Person("Kofi", "Human", 25, "Male");
const person2 = new Person("Roselyn", "Human", 30, "Female");
const person3 = new Person("Fred", "Human", 22, "Non-binary");

// Call methods to display information
car1.displayInfo();
car2.displayInfo();
car3.displayInfo();

lion.makeSound();
elephant.makeSound();
tiger.makeSound();

person1.introduce();
person2.introduce();
person3.introduce();