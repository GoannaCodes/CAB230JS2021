//Simple constructor for dog object
function Dog(name, age){
  this.name = name; //assign object name with provided name
  this.age = age; //assign object age with provided age
  this.toString = function() { return"<" + this.name + ","  
                                 + this.age + ">";}; //constructor - when called, display the provided code 
}

{
  console.log(Dog.toSring); //returns [Function: toString]
  
  //create new object instances of dog objects
  let lucy= new Dog("Lucy", 6);
  const sam = new Dog("Sam", 15);
  
  console.log(lucy); //returns Dog { name: 'Lucy', age: 6, toSring: [Function] }
  console.log(lucy.toString()); //returns <Lucy, 6> as according to toString constructor
  
  console.log(sam); //returns Dog { name: 'Sam', age: 15, toSring: [Function] }
  console.log(sam.toString());//returns <Sam, 15> as according to toString constructor
  
