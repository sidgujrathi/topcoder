var test_case1 = {

  numCrates : 14,
  loadsize : 3,
  expected : "6"

},

test_case2 = {

  numCrates : 15,
  loadsize : 1,
  expected : "15"

}

test_case3 = {

  numCrates : 1024,
  loadsize : 5,
  expected : "265"

}

console.log("\n Case 1, Expected Result: "+test_case1.expected+", Output: "+numTrucks(test_case1.numCrates,test_case1.loadsize));
console.log("\n Case 2, Expected Result: "+test_case2.expected+", Output: "+numTrucks(test_case2.numCrates,test_case2.loadsize));
console.log("\n Case 3, Expected Result: "+test_case3.expected+", Output: "+numTrucks(test_case3.numCrates,test_case3.loadsize));

function numTrucks(numCrates, loadSize) {
    //If crates are lesser that loadsize;   
    if (numCrates <= loadSize) 
     	return 1;
    //if loadsize is only 1 number of trucks will equal to crates
    if(loadSize == 1)
      	return numCrates;

    //Dividing crates into two parts untill it gets equls or less that loadSize
    var left = Math.floor((numCrates + 1 ) / 2);
    var right = Math.floor(numCrates / 2);

    return numTrucks(left, loadSize) + numTrucks(right, loadSize); //Divide left and right part recursively

}