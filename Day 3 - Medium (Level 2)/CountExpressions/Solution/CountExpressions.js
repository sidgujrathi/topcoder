var test_case1 = {

  x : 7,
  y : 8,
  value : 16, 
  expected : "9"

},

test_case2 = {

  x : 3,
  y : 5,
  value : 7, 
  expected : "5"

}

test_case3 = {

  x : 99,
  y : 100,
  value : 98010000, 
  expected : "6"

}

test_case4 = {

  x : -99,
  y : 42,
  value : -1764, 
  expected : "2"

}

test_case5 = {

  x : 100,
  y : -100,
  value : -100000000, 
  expected : "0"

}

  var c = 0;
  var d = new Array(4);
  var a;
  var v;

console.log("\n Case 1, Expected Result: "+test_case1.expected+", Output: "+calcExpressions(test_case1.x,test_case1.y,test_case1.value));
console.log("\n Case 2, Expected Result: "+test_case2.expected+", Output: "+calcExpressions(test_case2.x,test_case2.y,test_case2.value));
console.log("\n Case 3, Expected Result: "+test_case3.expected+", Output: "+calcExpressions(test_case3.x,test_case3.y,test_case3.value));
console.log("\n Case 4, Expected Result: "+test_case4.expected+", Output: "+calcExpressions(test_case4.x,test_case4.y,test_case4.value));
console.log("\n Case 5, Expected Result: "+test_case5.expected+", Output: "+calcExpressions(test_case5.x,test_case5.y,test_case5.value));

function go(ind, sum ) {
  if ( ind == 4 ){ 
    if ( sum == v ){ //checking if sum is equals to value
      c++;
    } 
    
    return;
  }
    
  for ( var i = 0; i < 4; i++ ) {
    if ( !d[i] ) {
      d[i] = true; 
      go( ind + 1, sum + a[i] ); //get value by adding x and y
      go( ind + 1, sum - a[i] ); //get value by subtracting x and y
      go( ind + 1, sum * a[i] ); //get value by multipling x and y.
      d[i] = false; //preventing recursive loop.
    }
  }
}

function calcExpressions(x, y, val){
  a = new Array(4);

  //satisfing condition x and y must each appear exactly twice.
  a[0] = x;
  a[1] = x;
  a[2] = y;
  a[3] = y;
  c = 0;
  v = val;
    
  for ( var i = 0; i < 4; i++ ) {
    d[i] = true;
    go( 1, a[i] ); // sending bot x and y one by one to check with all operations.
    d[i] = false;
  }
    
  return c / 4;
    
}
 