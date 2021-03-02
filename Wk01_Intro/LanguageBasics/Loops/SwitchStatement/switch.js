
let intDay = 3;
let strWeekDay = "";

//Based on intDay, determine if it is a week day or the weekend
switch (intDay){
  /*case 0 and 6 share the same code as they both represent the weekend (Sun, Sat) */
    
  //if intDay = 0 or 6, state it is the weekend
  case 0:
  case 6:
    strWeekDay = "Weekend";
    break;
  
  /* case 1, 2, 3, and 4 share the same code block as 5 
     as they all represent week days (Mon, Tues, Wed, Thurs, Fri)*/
    
  //if intDay = 1, 2, 3, 4 or 5 state it is a weekday
  case 1: 
  case 2:
  case 3:
  case 4:
  case 5:
    strWeekDay = "Week Day";
    break;
    
  //if intDay doesn't satisfy previous conditions, state it is an invalid day
  default: //runs this code if there is no case match
    strWeekDay = "Invalid day";
}
