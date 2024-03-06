class Person {
  constructor(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
    console.log(`constructor: ${this}`, this);
  }

  sayHello() {
    console.log(
      `My name is ${this.name}, I am ${this.age} years old, I like ${this.hobby}`
    );
  }

  walk() {
    console.log(`${this.name} is walking`);
  }
}

let joe = new Person("Joe", 20, "swimming");
joe.sayHello();
joe.walk();

//Class inheritance
class Student extends Person {
  constructor(name, age, hobby, school) {
    super(name, age, hobby); //必须手动call
    this.school = school;
  }

  //如果想override parent class的方法，直接定义就行，因为会附在最近的_proto_的node上
  goToSchool() {
    console.log(`this is ${this.name}, I go to ${this.school}`);
  }

  sayHello() {//override
    console.log(`I am a student, my name is ${this.name}`);
  }
}

var curry = new Student("Curry", 9, "basketball", "elementary school");
curry.sayHello();
curry.goToSchool();
