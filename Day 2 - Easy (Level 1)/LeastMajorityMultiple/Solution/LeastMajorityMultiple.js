var test_case1 = {

  a : 1 ,
  b : 2,
  c : 3,
  d : 4,
  e : 5,
  expected : "4"

},

test_case2 = {

  a : 30,
  b : 42,
  c : 70,
  d : 35,
  e : 90,
  expected : "210"

}

test_case3 = {

  a : 30,
  b : 45,
  c : 23,
  d : 26,
  e : 56,
  expected : "1170"

}

test_case4 = {

  a : 3,
  b : 14,
  c : 15,
  d : 92,
  e : 65,
  expected : "195"

}


console.log("\n Case 1, Expected Result: "+test_case1.expected+", Output: "+leastMajorityMultiple(test_case1.a, test_case1.b, test_case1.c, test_case1.d, test_case1.e));
console.log("\n Case 2, Expected Result: "+test_case2.expected+", Output: "+leastMajorityMultiple(test_case2.a, test_case2.b, test_case2.c, test_case2.d, test_case2.e));
console.log("\n Case 3, Expected Result: "+test_case3.expected+", Output: "+leastMajorityMultiple(test_case3.a, test_case3.b, test_case3.c, test_case3.d, test_case3.e));
console.log("\n Case 4, Expected Result: "+test_case4.expected+", Output: "+leastMajorityMultiple(test_case4.a, test_case4.b, test_case4.c, test_case4.d, test_case4.e));


function leastMajorityMultiple(a, b, c, d, e) 
  { 
        for (var i = 1; true; i++) 
        { 
            var count = 0; 
            if (i % a == 0) count++; 
            if (i % b == 0) count++; 
            if (i % c == 0) count++; 
            if (i % d == 0) count++; 
            if (i % e == 0) count++; 
            if (count >= 3) return i; 
        } 
  } 