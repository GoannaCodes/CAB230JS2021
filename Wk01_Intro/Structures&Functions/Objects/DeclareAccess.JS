//object declaration through JSON notation - comma separator excluding the end
let lucy = { //create object called lucy
  name: "Lucy", //name of lucy object is "Lucy"
  age: 6 //age of lucy object is 6
}

console.log(typeof lucy); //returns object
console.log(lucy); //returns { name: 'Lucy', age: 6 }

//Accessing object info
console.log(lucy.name); //uses dot notation to return Lucy
console.log(lucy["age"]); //uses bracket notation to return 6

//Can add properties to individual objects - try to avoid as it can become error prone
lucy.colour = "golden"; //new property called colour and state it is golden
console.log(lucy); //returns { name: 'Lucy', age: 6 , colour: 'golden' }
