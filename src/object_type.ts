let person: { name: string; age: number; sayHi(name: string): void } = {

    name: "John",
    age: 18,
    sayHi(who) {
        console.log(`Hello ${who}`);
    }
};

console.log(person.name);
console.log(person.age);
person.sayHi("John");



function myAxios(config: {url : string; method?:string} ):void{

    console.log(config.url, config.method);

}

myAxios({url: "http://google.com"});