var test_case1 = {

  girl : "LOVE" ,
  boys : ["JACOB","FRANK","DANO"],
  expected : "FRANK"

},

test_case2 = {

  girl : "JANE" ,
  boys : ["THOMAS","MICHAEL","INDY","LIU"],
  expected : "INDY"

}

test_case3 = {

  girl : "LILLY" ,
  boys : ["PIERRE"],
  expected : "PIERRE"

}

test_case4 = {

  girl : "MERLYLOV" ,
  boys : ["JOHN","DAVE","STEVE","JOHN","DAVE"],
  expected : "JOHN"

}
test_case5 = {

  girl : "LLOL" ,
  boys : ["BVERON","CVERON","AVERON","DVERON"],
  expected : "AVERON"

}



console.log("\n Case 1, Expected Result: "+test_case1.expected+", Output: "+findBoy(test_case1.girl, test_case1.boys));
console.log("\n Case 2, Expected Result: "+test_case2.expected+", Output: "+findBoy(test_case2.girl, test_case2.boys));
console.log("\n Case 3, Expected Result: "+test_case3.expected+", Output: "+findBoy(test_case3.girl, test_case3.boys));
console.log("\n Case 4, Expected Result: "+test_case4.expected+", Output: "+findBoy(test_case4.girl, test_case4.boys));
console.log("\n Case 4, Expected Result: "+test_case5.expected+", Output: "+findBoy(test_case5.girl, test_case5.boys));


function findBoy(girl, boys) {
  boys.sort(); 
  
  var max = -2147483648; 
  var minb = null; 
  
  for (var i = 0; i < boys.length; i++) { 
    var score = calc(girl, boys[i]); //get calculation for each boy for comaprision
    if(score > max){ 
      max = score; 
      minb = boys[i]; 
    } 
  } 
      return minb; 
} 

function calc(girl, boy) { 
  var L,O,V,E; 
  
  //Counting for words LOVE in each boy and girl's name
  L = count(girl,'L') + count(boy,'L'); 
  O = count(girl,'O') + count(boy,'O'); 
  V = count(girl,'V') + count(boy,'V'); 
  E = count(girl,'E') + count(boy,'E'); 
  
  return ((L+O)*(L+V)*(L+E)*(O+V)*(O+E)*(V+E))%100; 
}

//Function to count occurence of charchter in string
function count(s, c) { 
  var count = 0; 
  
  for (var i = 0; i < s.length; i++) { 
    if(s.charAt(i) == c){ 
      count++; 
    } 
  } 
    return count; 
} 
