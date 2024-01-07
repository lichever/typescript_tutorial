interface IPerson{
    readonly ssn ?: string;
    name?: string;
    age ?: number;
    greet(phrase: string): void;
}


let person: IPerson = {
    name: 'John',
    age: 18,
    greet(phrase){
        console.log(`${phrase} ${this.name}`);
    }
}

person.greet("Hello");


interface IEmployee extends IPerson{
    salary: number;
    work(): void;
}

let e : IEmployee = {
    salary: 1000,
    work(){
        console.log("Working...");
    },
    greet(phrase){
        console.log(`${phrase} ${this.salary}`);
        
    }

}

e.greet("Hello");
