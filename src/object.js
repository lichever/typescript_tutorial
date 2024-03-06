// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     1: 'one'
// };


// console.log(person.firstName);
// console.log(person['lastName']);
// console.log(person['1']);
// // console.log(person.1); error

// // person.'aa bb' = 'cc dd'; error
// person['aa bb'] = 'cc dd';
// console.log(person['aa bb']);

// delete person['1'];

// console.log(person);


let person = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function () {
        console.log('Hello, World!');
    },
    getFullName: function () {
        return this.firstName + ' ' + this.lastName; //no this, reference error
    }
};


console.log(person.getFullName());


function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    }
}


Student.greet = function () {
    console.log('Hello, ' + this.firstName + this.staticProperty1);//this.firstName is undefined
}

Student.staticProperty1 = 123;
let student1 = new Student('John', 'Doe');
// student1.greet(); //error : this is the Student function, not the student1 object

Student.greet();//Hello, undefined





