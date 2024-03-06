var { name: othername, age = 1 } = { name: "Joe" };

// console.log(othername, age);

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, a: 3 };
let obj3 = { a: 3, ...obj1 };

// console.log(obj2, obj3);

function fn() {
  console.log("fn ", this);

  //   const run = () => {
  //     console.log(this); //item
  //     console.log(this.a);//item.a
  //   };

  function run() {
    console.log(this); // window
    console.log(this.a);//undefined
  }

  run();
}

var item1 = {
  a: 1,
  fn: fn,
};
var item2 = {
  a: 100,
  fn: fn,
};

item1.fn(); //? item1, item1, 1
item2.fn(); //? item2, item2, 100
