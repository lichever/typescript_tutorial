// (function () {
//   var name = "Barry";
//   console.log(`Hi, ${name}!`);
// })();

(function () {
  // Example 1
  // only works with var!
  console.log(x === undefined);
  var x = 3;
  // what would happen if we removed the above line?

  // Example 2
  banana();

  //   const banana = () => {
  //     console.log("hello, banana");
  //   };

  function banana() {
    console.log("hello, banana");
  }
})();

const fruit = 1;
  
switch (fruit) {
case "banana":
  console.log("bananas are yellow");
  break;
case "apple":
  console.log("apples are red, and sometimes green");
  break;
case 1:
    console.log("this is a number");
    break;
default:
  console.log("you didn't choose a fruit!");
}