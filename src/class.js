const arr = [1, 11, , 2];

console.log(arr.slice(0, 2));

// for(let i = 0; i < arr.length; i++){
//     console.log(i , arr[i], this);
// }

// for(const [i, item] of arr.entries() ){
//     console.log(i, item, this);
// }

// for(const k in arr ){
//     console.log(k , arr[k], this);
// }

// arr.forEach((item, i) => {
//     console.log(i, item, this);

// } );

let employee = {
  firstName: "Peter",
  lastName: "Doe",
  employeeId: 1,
};

for (const [i, item] of Object.entries(arr)) {
  console.log(i, item, Math.random());
}

for (const [i, item] of Object.entries(employee)) {
  console.log(i, item, Math.random());
}

// console.log(employee[lastName]);//err

a = {};
b = [];
c = "";
console.log(a === true);
console.log(b === true);

if (a) {
  console.log("a is true");
}
if (b) {
  console.log("b is true");
}

if (!c) {
  console.log("c is false");
}
