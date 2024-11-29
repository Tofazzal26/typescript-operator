export class Science {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    getAge() {
        return this.age;
    }
    play() {
        console.log(`My name is${this.name} my age is ${this.age} from ${this.country}`);
    }
}
