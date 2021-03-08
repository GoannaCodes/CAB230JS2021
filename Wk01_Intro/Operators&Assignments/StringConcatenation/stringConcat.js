//Initial values
let hello = "Hello World";
let again = "Hello Cruel World";

//Concats hello and again; doesn't affect string stored in hello
let text = hello + " , " + again;
console.log(text); //displays Hello World, Hello Cruel World

//Appends onto hello variable "," and string stored in again; changes overall string of hello
hello += ", " + again;
console.log(hello); //displays Hello World, Hello Cruel World

//Can also pass strings to concat together as parameters to console.log()
//Spaces are automatically placed between words
console.log(hello, world, hello, cruel, world,); //displays hello world hello cruel world
