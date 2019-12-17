// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
  
let myFunction = () => {
    console.log('Function was Invoked');
}

myFunction();


let anotherFunction = param => param;

console.log(anotherFunction('Example!'));

//with one parameter- we dont have to include the parentheses or the brackets around it 


 let add = (param1, param2) => {
   return param1 + param2;
  }
  
  console.log(add(1,2));



 let subtract = (param1, param2) => {
   return param1 - param2;
   }
  
  console.log(subtract(1,2));


// Stretch

exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);

const triple = exampleArray.map((num => {
  return num * 3;
}))
console.log(triple);