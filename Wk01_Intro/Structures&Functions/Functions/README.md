## Functions

Functions in JS are fundamentally values.

### Function declaration
We can assign an identifier through an assignment statement\
```
let cube = function(x) { 
```
where cube is the identifier of a `function` with a parameter of 'x'\
or operate directy through function declaration:\
```
function quartic(x) {
```
Key differences are:
  - function via assignment statement needs to be defined before the identifier is used
  - function declaration is hoisted by the system to the top of the scope, so we may place the declaration anywhere in the file and still use it

