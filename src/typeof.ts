let obj = {x:0, y : "aa"}


console.log(typeof obj);


function test(o:typeof obj) {
    console.log(typeof o);
    
    console.log(o.x);
    console.log(o.y);   
}

let obj2 = {x:0, y : "bb"}
let obj3 = {x:0, y : 22}

test(obj2)

// test(obj3)