//function by assignment - need function to be declared before use
let cube = function (x){
  return x * x * x;
}

console.log(quartic(2)); //returns 16
console.log(cube(3)); //returns 27
console.log(square(12)); //error

//function by assignment - function not declared before use therefore error is thrown
let square = function(x){
  return x * x;
}

//function declaration - declaration can be made anywhere in file, even after being called. Hoisted to top of scope to do so
function quartic(x){
  return x * x * x * x;
}
