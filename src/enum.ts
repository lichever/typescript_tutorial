enum Dir {UP=2, DOWN, LEFT, RIGHT }

function f(dir:Dir) {
    console.log(dir);
}

f(Dir.UP);
f(Dir.DOWN);

console.log(Dir[2] === 'UP');//true
console.log(Dir.DOWN === 3);//true


// literal + union
function f2(dir:'UP'|'DOWN'|'LEFT'|'RIGHT') {
    console.log(dir);
}

f2('UP');