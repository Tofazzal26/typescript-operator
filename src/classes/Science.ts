export class Science {
  constructor(
    public name: string,
    private age: number,
    readonly country: string
  ) {}
  play() {
    console.log(
      `My name is${this.name} my age is ${this.age} from ${this.country}`
    );
  }
}
