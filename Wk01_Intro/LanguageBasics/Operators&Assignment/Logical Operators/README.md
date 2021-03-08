### Logical Operators

Logical AND `&&` when used between expressions checks if both expressions are true.\
```
let x = 6; 
let y = 3;

console.log((x < 10 && y > 1)) //true, since both statements is true
console.log(x < 10 && y < 1)) //false, since y is not smaller than 1
```
  
Logical OR `||` when used between expressions checks if either one of the expressions is true.
```
let x = 6; 
let y = 3;

console.log((x == 6 || y == 0)) //true, x = 6 and only one expression needs to be true
console.log(x == 5 || y == 5)) //false, since neither expression is true
```

Logical NOT `!` when used infront of an expression `!a` checks if the expression is not true, making the expression true.
  ```
  let x = 6;
  let y = 3;
  
  console.log(!(x === y)) //true, 6 and 3 are not the same
  console.log(!(x > y)) // false since 6 is greater than 3
```

