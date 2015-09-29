var test_case1 = {

  cardNumber : "21378",
  expected : "VALID"

},

test_case2 = {

  cardNumber : "31378",
  expected : "INVALID"

}

test_case3 = {

  cardNumber : "11111101",
  expected : "VALID"

}

test_case4 = {

  cardNumber : "50005",
  expected : "VALID"

}

test_case5 = {

  cardNumber : "542987223412",
  expected : "INVALID"

}

console.log("\n Case 1, Expected Result: "+test_case1.expected+", Output: "+checkDigits(test_case1.cardNumber));
console.log("\n Case 2, Expected Result: "+test_case2.expected+", Output: "+checkDigits(test_case2.cardNumber));
console.log("\n Case 3, Expected Result: "+test_case3.expected+", Output: "+checkDigits(test_case3.cardNumber));
console.log("\n Case 4, Expected Result: "+test_case4.expected+", Output: "+checkDigits(test_case4.cardNumber));
console.log("\n Case 5, Expected Result: "+test_case5.expected+", Output: "+checkDigits(test_case5.cardNumber));

function checkDigits(cardNumber){
 var sum=0; 

 for (var i = 0; i < cardNumber.length; i++) 
  { 
    var t = cardNumber[i]; 
            
    if (i % 2 == cardNumber.length%2){ //Checks for card string and current no in card is valid for operation.
      t *= 2;
    }
               
    while (t != 0) {        //Add current number in "sum". If it is two  digit then split in sing integer respectively and add them too.
      t = parseInt(t,10);  
      sum += t % 10;
      t /= 10; 
    } 
  } 
            
  if (sum % 10 == 0){  //if sum is in multiple of 10, card number is valid.
    return "VALID";
  }  
  else{
    return "INVALID";
  }  
} 