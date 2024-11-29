import { isScience } from "../interfaces/isScience.js";

export class Science implements isScience {
  constructor(
    public name: string,
    private age: number,
    readonly country: string
  ) {}
  getAge() {
    return this.age;
  }
  play() {
    console.log(
      `My name is${this.name} my age is ${this.age} from ${this.country}`
    );
  }
}
