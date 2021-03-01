{
  //declaring with const restricts scope of 'cube' to braces surrounding code block
  const cube = function (x){
    return x * x * x;
  }
  
  //both functions visible in scope
  console.log(quartic(2)); //returns 16
  console.log(cube(3)); //returns 27
  
  //function scope is global
  function quartic(x){
    return x * x * x * x;
  }
}

console.log(quartic(3)); //returns 81
console.log(cube(4)); //not able to call as function is out of scope
