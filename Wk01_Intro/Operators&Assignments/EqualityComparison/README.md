## Equality Comparisons in JS
JS has two sets of equality operators `===, !==` and `==, !=`. 

`===` and `!==` work as expected. If two operands are of the same type and have the same value, then `===` produces true & `!==` produces false.

`==` and `!=` do the correct thing when operands are of the same type, but produce different results if values are different types.

Noteable cases:
```
'' == 0            //false
0 == ''            //true
0 == 0             //true - same type and value

false == 'false'   //false - matching bool with string
false == '0'       //true

false == undefined //false
false == null      //false
null == undefined  //true

' \t\r\n ' == 0    //true
```
Lack of transitivity is alarming, so it is best to always use `===` and `!==`. All of the comparisons above will produce false with the `===` operator
