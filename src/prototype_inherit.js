function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayAge = function () {
    console.log('I am ' + this.age + ' years old');
}
Person.prototype.sayHi = function () {
    console.log('Hi, I am ' + this.name);
}

function Student(name, age, grade) {
    Person.call(this, name, age);//call the parent constructor, 注意要把child class的this传进去
    this.grade = grade;
}

Student.prototype = Object.create(Person.prototype);//Student的prototype继承Person的prototype
Student.prototype.constructor = Student;//记得给这个新的 prototype赋值constructor 指回自己

Student.prototype.sayGrade = function () {
    console.log('I am at grade ' + this.grade);
}

function Teacher(name, age, salary) {
    Person.call(this, name, age);//call the parent constructor, 注意要把child class的this传进去
    this.salary = salary;
}

Teacher.prototype = Object.create(Person.prototype);//Teacher的prototype继承Person的prototype
Teacher.prototype.constructor = Teacher;//记得给这个新的 prototype赋值constructor 指回自己

Teacher.prototype.saySalary = function () {
    console.log('my salary is ' + this.salary);
}


const student = new Student('John', 20, 3);
const teacher = new Teacher('AA', 11, 113);

console.log(student);
console.log(teacher);
console.log(Student.prototype);
console.log(Teacher.prototype);
console.log(Teacher.prototype === Student.prototype);
