let myCredits = 156;

const graduate = 288;
const second = 192;
const first = 96;

//if credits is equal to or greater than 'graduate' credit
if (myCredits >= graduate) {
  //display message indicating they have graduated
  console.log("Bachelor of IT Graduate");
  //if credits are equal to or above 'second year' credit threshold
} else if (myCredits >= second){
  //they are a third year student
  console.log("Third Year Student");
  //if credits are equal to or greater than first year credit threshold
} else if (myCredits >= first){
  //they are a second year student
  console.log("Second Year Student");
  //if credits don't satisfy above credit scores
} else {
  //then they must be a first year student
  console.log("First Year Student");
