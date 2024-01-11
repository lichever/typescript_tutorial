let arr = [];
let rows = 4;
let columns = 3;

// // creating two-dimensional array
// for (let i = 0; i < rows; i++) {
//   arr[i] = [];
//   for (let j = 0; j < columns; j++) {
//     arr[i][j] = j;
//   }
// }

// arr = new Array(rows).map(() => new Array(columns).fill(1));



// arr = new Array(rows)
// arr = new Array(rows).fill().map(() => new Array(columns).fill(1));


// console.log(arr);
// console.log(typeof arr[0]);
// arr = new Array(rows).fill()
// console.log(typeof arr[0]);



const arr1 = new Array(3).fill().map(() => new Array(2).fill(1));
arr1[0][0] = 999; // Modifying one element affects all elements
console.log(arr1); 


const arr2 = new Array(3)
console.log(arr2.length); // Output: [ [ 1, 1 ], [ 1, 1 ], [ 1, 1 ] ]
for (let index = 0; index < 3; index++) {
    console.log(arr2[index]);//undefined
    
}

arr3 = arr2.map(() => new Array(2).fill(1));
console.log(arr3);//[ <3 empty items> ]



const arr4 =  Array.from({length: rows}, ()=> 1 );
const arr5 =  Array.from({length: rows}, ()=> Array(columns).fill(2) );
console.log(arr5);


//deep copy 这个 只针对 数组嵌套有用，如果是对象嵌套，就不行了
function deepCopy(val) {
    return Array.isArray(val) ? Array.from(val, deepCopy) : val;
}
arr6 = deepCopy(arr5);
console.log(arr5[0] === arr6[0]);//false
console.log(arr6);

ob1 = {'age':1, b:2};
arr7 = [ob1, 2]
arr8 = deepCopy(arr7);
console.log(arr7[0] === arr8[0]);//true

let resultB = Array(3).fill({});
console.log(resultB[0] === resultB[1]);//true

resultB = new Array(2).fill(null).map(_ => ({}))
// console.log(resultB);
console.log(resultB[0] === resultB[1]);//true