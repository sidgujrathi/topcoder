var test_case1 = {

  A : "aba",
  B : "b",
  expected : "2"

},

test_case2 = {

  A : "aa",
  B : "a",
  expected : "3"

}

test_case3 = {

  A : "aca",
  B : "bb",
  expected : "0"

}

test_case4 = {

  A : "abba",
  B : "abba",
  expected : "3"

}
test_case5 = {

  A : "topcoder",
  B : "coder",
  expected : "0"

}

console.log("\n Case 1, Expected Result: "+test_case1.expected+", Output: "+count(test_case1.A, test_case1.B));
console.log("\n Case 2, Expected Result: "+test_case2.expected+", Output: "+count(test_case2.A, test_case2.B));
console.log("\n Case 3, Expected Result: "+test_case3.expected+", Output: "+count(test_case3.A, test_case3.B));
console.log("\n Case 4, Expected Result: "+test_case4.expected+", Output: "+count(test_case4.A, test_case4.B));
console.log("\n Case 4, Expected Result: "+test_case5.expected+", Output: "+count(test_case5.A, test_case5.B));

function count(A, B){
  var res = 0; 
    for (var i = 0; i <= A.length; ++i) 
    { 
      if (Palindrome(A.substring(0,i) + B + A.substring(i))) //Check addition of each character and substring of one string and whole second is palindrome and count possibility.
        ++res; 
    } 
    return res;
} 

function Palindrome(s){
  for (var i = 0; i < s.length; ++i){ 
    if (s[i] != s[s.length - i - 1]) //checking if strinbg is palindrome by comparing character from start to end from end.
    return false; 
  }  

  return true; 
} 
         
