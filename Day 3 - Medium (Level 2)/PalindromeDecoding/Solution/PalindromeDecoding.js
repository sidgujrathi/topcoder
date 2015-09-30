var test_case1 = {

  code : "ab",
  position : [0],
  _length : [2],
  expected : "abba"

},

test_case2 = {

  code : "Misip",
  position : [2,3,1,7],
  _length : [1,1,2,2],
  expected : "Mississippi"

}

test_case3 = {

  code : "XY",
  position : [0, 0, 0, 0],
  _length : [2, 4, 8, 16],
  expected : "XYYXXYYXXYYXXYYXXYYXXYYXXYYXXYYX"

}

test_case4 = {

  code : "TC206",
  position : [1,2,5],
  _length : [1,1,1],
  expected : "TCCC2006"

}
test_case5 = {

  code : "nodecoding",
  position : [],
  _length : [],
  expected : "nodecoding"

}

console.log("\n Case 1, Expected Result: "+test_case1.expected+", Output: "+decode(test_case1.code, test_case1.position, test_case1._length));
console.log("\n Case 2, Expected Result: "+test_case2.expected+", Output: "+decode(test_case2.code, test_case2.position, test_case2._length));
console.log("\n Case 3, Expected Result: "+test_case3.expected+", Output: "+decode(test_case3.code, test_case3.position, test_case3._length));
console.log("\n Case 4, Expected Result: "+test_case4.expected+", Output: "+decode(test_case4.code, test_case4.position, test_case4._length));
console.log("\n Case 5, Expected Result: "+test_case5.expected+", Output: "+decode(test_case5.code, test_case5.position, test_case5._length));

function decode(code, position, _length){
  var n = position.length; 

  for( var i = 0; i < n; ++i ){
    var p = position[i]; //get start point 
    var l = _length[i]; //get end point
    var a = code.substr( 0, p ); //get substring before startpoint
    var b = code.substr( p, l ); //get substring which needs to append in revers
    var c = code.substr( p+l );  ////get end part of original string
    var d = b; 
  
    d = d.split("").reverse().join("");  //reverse substring to be appended
    code = a + b + d + c;   //new code after append.  
  } 
      return code; 
} 

