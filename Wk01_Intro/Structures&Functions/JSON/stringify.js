var obj = {name: "John", age: 30, city: "New York"};
var myJSON = JSON.stringify(obj); //above converted to string which displays: {"name":"John","age":30,"city":"New York"}

/* Output using document.getElementById("demo").innerHTML= myJSON;
   if above code was enclosed in 
   <p id = "demo"></p> 
   <script>
      HERE
   </script>
*/

//Possible to stringify arrays
var arr = [ "John", "Peter", "Sally", "Jane" ];
var arrJSON = JSON.stringify(arr);

//Date objects are not allowed in JSON, but can covert any dates into strings
var obj = { name: "John", today: new Date(), city : "New York" };
var myJSON = JSON.stringify(obj);
//can covert the string back into a date object at the receiver

/* Functions are also not allowed as object values in JSON
   JSON.stringify() will remove functions from JS object, both the key and value
   */
var funObj = { name: "John", age: function () {return 30;}, city: "New York"};
var funJSON = JSON.stringify(funObj); //would only return {"name":"John","city":"New York"} if displayed

//This can be omitted if functions are converted to strings before running JSON.stringify()
var funObj2 = { name: "John", age: function () {return 30;}, city: "New York" };
funObj2.age = funObj2.age.toString();
var funObj2JSON = JSON.stringify(funObj2); //{"name":"John","age":"function () {return 30;}","city":"New York"}

//If sending functions using JSON, function will lose scope. Receiver would have to use eval() to convert back into functions
