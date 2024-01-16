function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    }
}


const s1 = new Student('John', 'Doe');
console.log(s1.toString()); 

console.log(Student.prototype);
console.log(s1.__proto__);
console.log(Student.prototype === s1.__proto__); //true
console.log(Object.keys(s1));//[ 'firstName', 'lastName', 'getFullName' ]
console.log(Object.keys(Student));//[]
console.log(Object.values(s1));//[ 'John', 'Doe', [Function (anonymous)] ]



Student.prototype.greet = function (a) {
    console.log('Hello, ' + this.firstName + ' with age '+ a);//protype this 指向实例化对象
}

Student.prototype.global = 12;

s1.greet(10);//Hello, John with age 10
s1.__proto__.greet(12)//Hello, undefined with age 12  这个看笔记，这个s1.__proto__ 指回 Student的prototype 匿名对象了，然后找不到 firstName ，就继续往上Object找，结果没， 所以this.firstName是undefined
console.log(s1.__proto__ === Student.prototype );//true
console.log(Student.prototype === Object.getPrototypeOf(s1));//true

console.log(s1.global);//12
console.log(s1.__proto__.global);//12


let arr = [1,2,3]
arr.reverse();
console.log(arr);
arr.__proto__.reverse = function() { //override method in prototype: 注意这里不能用arrow func，因为arrow func没有this ， this指向的是global; 这里原型对象的this指向的是实例化对象
    for (let index = 0; index < this.length; index++) {
        this[index] = 2*this[index];
    }
}
arr.reverse()
console.log(arr);//[ 6, 4, 2 ]


//prototype chain: s1.__proto__ -> Student.prototype -> Object.prototype -> null
console.log(Student === Student.prototype.constructor);//true
console.log(Student === s1.__proto__.constructor);//true


//直接赋值，会覆盖原来的prototype 没有constructor
Student.prototype={
    greet: function (a) {
        console.log('Hello, ' + this.firstName + ' with age '+ a);
    }
}

s1.greet(10);//ok 
const s2 = new Student('ss', 'Doe');
s2.greet(10);//ok
//因为：
console.log(s2.__proto__ === Student.prototype);//true
console.log(s2.__proto__.constructor === Student);//false
console.log(s2.__proto__.constructor)
console.log(Student.__proto__)
console.log(Student.prototype)
console.log(Student.prototype.constructor)