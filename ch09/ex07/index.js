class Animal {

    eat() {
    }

    makeSound(sound) {
        return sound;
    }

}

class Dog {
    constructor() {
        this.animal = new Animal();
    }

    eat() {
        return this.animal.eat();
    }

    makeSound() {
        return this.animal.makeSound('ワン');
    }

    bite() {
    }

}


class Husky extends Dog {

}

class Cat {

    constructor() {
        this.animal = new Animal();
    }

    eat() {
        return this.animal.eat();
    }

    makeSound() {
        return this.animal.makeSound('ニャニャ');
    }

    scratch() {

    }
}

class Bird {

    constructor() {
        this.animal = new Animal();
    }

    eat() {
        return this.animal.eat();
    }

    makeSound() {
        return this.animal.makeSound('トゥルルルル');
    }

    fly() {

    }
}

class Fish {

    constructor() {
        this.animal = new Animal();
    }

    eat() {
        return this.animal.eat();
    }

    swim() {

    }
}

// const fish = new Fish();
// console.log(fish.makeSound()); // =>TypeError: fish.makeSound is not a function

const dog = new Dog();
console.log(dog.makeSound()); // ワン