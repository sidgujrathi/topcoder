var test_case1 = {

  desire : "A",
  tests : [0,70],
  expected : "-1"

},

test_case2 = {

  desire : "D",
  tests : [100,100,100,100,100,100],
  expected : "0"

}

test_case3 = {

  desire : "B",
  tests : [80,80,80,73],
  expected : "87"

}

test_case4 = {

  desire : "B",
  tests : [80,80,80,73,79],
  expected : "88"

}

test_case5 = {

  desire : "A",
  tests : [80],
  expected : "100"

}

console.log("\n Case 1, Expected Result: "+test_case1.expected+", Output: "+minimize(test_case1.desire,test_case1.tests));
console.log("\n Case 2, Expected Result: "+test_case2.expected+", Output: "+minimize(test_case2.desire,test_case2.tests));
console.log("\n Case 3, Expected Result: "+test_case3.expected+", Output: "+minimize(test_case3.desire,test_case3.tests));
console.log("\n Case 4, Expected Result: "+test_case4.expected+", Output: "+minimize(test_case4.desire,test_case4.tests));
console.log("\n Case 5, Expected Result: "+test_case5.expected+", Output: "+minimize(test_case5.desire,test_case5.tests));

function minimize(desire, tests){
  //Determine what grade user want to find in terms of marks.
  if (desire=="A"){
    desire = 90.0;
  }
  if (desire=="B"){
    desire = 80.0;
  }
  if (desire=="C"){
    desire = 70.0;
  }
  if (desire=="D"){
    desire = 60.0;
  }  
  
  //caculate sum of given marks.
  var sum = 0;
  for (var i =0; i < tests.length;i++)
    sum += tests[i];
    //check for number which will satisfy condition of grade and return
    for (var i = 0; i < 101;i++) {
      var t = i + sum;
      if (t / (tests.length + 1) >= desire){
        return i;
      }
    }
    
    return -1;
  }