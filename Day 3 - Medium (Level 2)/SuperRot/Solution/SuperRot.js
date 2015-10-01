var test_case1 = {

  str : "Uryyb 28",
  expected : "Hello 73"

},

test_case2 = {

  str : "GbcPbqre",
  expected : "TopCoder"

}

test_case3 = {

  str : " ",
  expected : " "

}

test_case4 = {

  str : "Gvzr vf 54 71 CZ ba Whyl 4gu bs gur lrne 7558 NQ",
  expected : "Time is 09 26 PM on July 9th of the year 2003 AD"

}

test_case5 = {

  str : "Gur dhvpx oebja sbk whzcf bire n ynml qbt",
  expected : "The quick brown fox jumps over a lazy dog"

}

console.log("\n Case 1, Expected Result: "+test_case1.expected+", Output: "+decoder(test_case1.str));
console.log("\n Case 2, Expected Result: "+test_case2.expected+", Output: "+decoder(test_case2.str));
console.log("\n Case 3, Expected Result: "+test_case3.expected+", Output: "+decoder(test_case3.str));
console.log("\n Case 4, Expected Result: "+test_case4.expected+", Output: "+decoder(test_case4.str));
console.log("\n Case 5, Expected Result: "+test_case5.expected+", Output: "+decoder(test_case5.str));

function decoder(coded) {
  var buf = "";
  
  for(var i=0;i<coded.length;++i){
    var c=coded.charAt(i);
    var d=0;
    
    if(c>='A'&&c<='M'){
      d='N'.charCodeAt(0) -'A'.charCodeAt(0) ; //get difference between N to A
    }
    else if(c>='N'&&c<='Z'){
      d='A'.charCodeAt(0) -'N'.charCodeAt(0) ; //get difference between A to N
    }
    else if(c>='a'&&c<='m'){
      d='n'.charCodeAt(0) -'a'.charCodeAt(0) ; //get difference between n to a 
    }
    else if(c>='n'&&c<='z'){
      d='a'.charCodeAt(0) -'n'.charCodeAt(0) ; //get difference between a to n
    }
    else if(c>='0'&&c<='4'){
      d='5'.charCodeAt(0) -'0'.charCodeAt(0) ; //difference between 5 to 0
    }
    else if(c>='5'&&c<='9'){
      d='0'.charCodeAt(0) -'5'.charCodeAt(0) ; //get difference between 0 to 5
    }
    
    c=c.charCodeAt(0);
    buf += String.fromCharCode(c+d);    //to get decoded chacter back we will ad ASCII of orinal character plus differnce in set.
  }

  return buf;
}