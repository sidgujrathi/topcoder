var test_case1 = {

  tables : [4],
  groupSizes : [4,8,4,2,2,4],
  arrivals : [10,20,18,26,36,28],
  departures : [10,20,18,26,36,28],
  expected : "14"

},

test_case2 = {

  tables : [4,4],
  groupSizes : [4,8,4,2,2,4],
  arrivals : [0,10,12,16,18,26],
  departures : [10,20,18,26,36,28],
  expected : "8"

}

test_case3 = {

  tables : [4,8],
  groupSizes : [4,8,4,2,2,4],
  arrivals : [0,10,12,16,18,26],
  departures : [10,20,18,26,36,28],
  expected : "2"

}

test_case4 = {

  tables : [10,8,11,16],
  groupSizes : [14,1,15,1,19,15,9,15,20,2],
  arrivals : [4,5,7,18,21,25,29,31,46,49],
  departures : [8,37,11,36,36,46,40,42,47,50],
  expected : "69"

}

test_case5 = {

  tables : [18,15,2,6],
  groupSizes : [7,9,16,3,10,3,2,10,16,16],
  arrivals : [10,15,19,20,21,22,27,35,37,43],
  departures : [13,24,22,32,32,32,35,48,41,44],
  expected : "10"

}

console.log("\n Case 1, Expected Result: "+test_case1.expected+", Output: "+allocateTables(test_case1.tables,test_case1.groupSizes,test_case1.arrivals,test_case1.departures));
console.log("\n Case 2, Expected Result: "+test_case2.expected+", Output: "+allocateTables(test_case2.tables,test_case2.groupSizes,test_case2.arrivals,test_case2.departures));
console.log("\n Case 3, Expected Result: "+test_case3.expected+", Output: "+allocateTables(test_case3.tables,test_case3.groupSizes,test_case3.arrivals,test_case3.departures));
console.log("\n Case 4, Expected Result: "+test_case4.expected+", Output: "+allocateTables(test_case4.tables,test_case4.groupSizes,test_case4.arrivals,test_case4.departures));
console.log("\n Case 5, Expected Result: "+test_case5.expected+", Output: "+allocateTables(test_case5.tables,test_case5.groupSizes,test_case5.arrivals,test_case5.departures));

function allocateTables(tables, groupSizes, arrivals, departures) { 
  tables.sort(); //sort tables in ascending order.
  var allocate = new Array(tables.length); //define alloaction of size of number of tables
   
  for(var k = 0; k < allocate.length; k++) {
    allocate[k] = -1;   //initiate -1 for allocation
  } 
   
  var ret = 0; 
  for(var i = 0; i < groupSizes.length; i++) {  //now to check for each groupß
    var flag = true; 
    for(var j = 0; j < tables.length && flag; j++) {   //check for number of tables has.
      if(tables[j] >= groupSizes[i] && arrivals[i] >= allocate[j]) {  //check if we have vacant tables and also, slots for allocation is available 
        flag = false; 
        allocate[j] = departures[i]; // allocation
      } 
    } 
    
    if(flag) {
      ret+= groupSizes[i]; //number of groups who are tired waiting and leave.
    }
  } 
  
  return ret; 
}