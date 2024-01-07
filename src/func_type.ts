function greet(name: string) {//void can be ignored
  console.log(`Hello ${name}`);
}


greet("John");




function mySlice(start?: number, end?: number): void {
    console.log(start, end);
    
}

mySlice();
mySlice(1, 2);