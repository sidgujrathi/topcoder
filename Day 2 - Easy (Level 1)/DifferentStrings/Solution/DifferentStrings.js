var test_case1 = {

  a : "koder",
  b : "topcoder",
  expected : "1"

},

test_case2 = {

  a : "hello",
  b : "xello",
  expected : "1"

}

test_case3 = {

  a : "abc",
  b : "topabcoder",
  expected : "0"

}

test_case4 = {

  a : "adaabc",
  b : "aababbc",
  expected : "2"

}

test_case5 = {

  a : "giorgi",
  b : "igroig",
  expected : "6"

}

console.log("\n Case 1, Expected Result: "+test_case1.expected+", Output: "+minimize(test_case1.a, test_case1.b));
console.log("\n Case 2, Expected Result: "+test_case2.expected+", Output: "+minimize(test_case2.a, test_case2.b));
console.log("\n Case 3, Expected Result: "+test_case3.expected+", Output: "+minimize(test_case3.a, test_case3.b));
console.log("\n Case 4, Expected Result: "+test_case4.expected+", Output: "+minimize(test_case4.a, test_case4.b));
console.log("\n Case 5, Expected Result: "+test_case5.expected+", Output: "+minimize(test_case5.a, test_case5.b));

function minimize(a, b){
	
	var len1 = a.length; 
    var len2 = b.length; 
    var i,j; 
    var Min = 1000 
    
    for (i=0; i+len1<=len2; i++) //Checking length equality or unequality
    { 
      var m = 0; 
      for (j=0;j<len1;j++) 
      { 
        if(a[j]!=b[i+j]){ //checking each character from one string to other recursively.
          m++; 
        }  
      } 
      if (m<Min){ //if difference is under certain limit i.e here 1000
       	  Min = m; 
      } 

    } 
    return Min;
}