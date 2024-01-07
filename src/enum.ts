enum Dir {UP=2, DOWN, LEFT, RIGHT }

function f(dir:Dir) {
    console.log(dir);
}

f(Dir.UP);
f(Dir.DOWN);

console.log(Dir[2] === 'UP');//true
console.log(Dir['3']);
console.log(Dir['UP']);

console.log(Dir); //enum is compiled to object, numeric enum is compiled to reverse mapping, but string enum is just a normal object


enum Dir2 {UP='UP', DOWN='DOWN', LEFT='LEFT', RIGHT='RIGHT' }
console.log(Dir2.UP === 'UP');//true
console.log(Dir2);

console.log(Dir2['UP'] === 'UP');//true





// literal + union
function f2(dir:'UP'|'DOWN'|'LEFT'|'RIGHT') {
    console.log(dir);
}

f2('UP');