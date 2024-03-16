
export class Person {
  // public name: string;
  // private address: string;
  constructor(
    public name: string,
    private address: string
    ) {}
    
}

// export class Hero extends Person {

//   constructor(
//     public alterEgo: string,
//     public age: number,
//     public realName: string,
//     name: string, 
//     address: string) {
//     super(name, address);
    
//   }
// }
export class Hero {

  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person) {
  }
}

// const ironman = new Person('ironman', 'NY');
const ironman = new Hero('IronMan', 30, 'Tony', new Person('Tony', 'NY'));

console.log(ironman);