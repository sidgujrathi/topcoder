var test_case1 = {

  price : 10 ,
  b1 : 1,
  b2 : 5,
  b3 : 10,
  b4 : 50,
  expected : "POSSIBLE"

},

test_case2 = {

  price : 15,
  b1 : 1,
  b2 : 5,
  b3 : 10,
  b4 : 50,
  expected : "POSSIBLE"

}

test_case3 = {

  price : 65,
  b1 : 1,
  b2 : 5,
  b3 : 10,
  b4 : 50,
  expected : "POSSIBLE"

}

test_case4 = {

  price : 62,
  b1 : 1,
  b2 : 5,
  b3 : 10,
  b4 : 50,
  expected : "IMPOSSIBLE"

}
test_case5 = {

  price : 1000,
  b1 : 999,
  b2 : 998,
  b3 : 997,
  b4 : 996,
  expected : "IPOSSIBLE"

}



console.log("\n Case 1, Expected Result: "+test_case1.expected+", Output: "+buy(test_case1.price, test_case1.b1, test_case1.b2, test_case1.b3, test_case1.b4));
console.log("\n Case 2, Expected Result: "+test_case2.expected+", Output: "+buy(test_case2.price, test_case2.b1, test_case2.b2, test_case2.b3, test_case2.b4));
console.log("\n Case 3, Expected Result: "+test_case3.expected+", Output: "+buy(test_case3.price, test_case3.b1, test_case3.b2, test_case3.b3, test_case3.b4));
console.log("\n Case 4, Expected Result: "+test_case4.expected+", Output: "+buy(test_case4.price, test_case4.b1, test_case4.b2, test_case4.b3, test_case4.b4));
console.log("\n Case 4, Expected Result: "+test_case4.expected+", Output: "+buy(test_case5.price, test_case5.b1, test_case5.b2, test_case5.b3, test_case5.b4));


function buy(price, b1, b2, b3, b4) {

  var str="POSSIBLE";
  var str1="IMPOSSIBLE";

  if(b1 == price || b2 == price || b3 == price || b4 == price){ //Checking for Nick has any backnote equals to price
    return str;
  }
  else if((b1+b2+b3+b4) == price){ //checking if addition of all backnotes are equal to price
    return str;
  }
  else if((b1+b2) == price || (b1+b3) == price || (b1+b4) == price || (b2+b3) == price || (b2+b4) == price || (b3+b4) == price){ // checking if any addition of 2 backnote combination equals to price
    return str;
  }
  else if((b1+b2+b3) == price || (b2+b3+b4) == price || (b1+b3+b4) == price || (b1+b2+b4) == price){ // checking if any addition of 3 backnote combination equals to price
    return str;
  }
  else{
    return str1;
  }
  
}