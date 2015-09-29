var test_case1 = {

  leftRow : "----------",
  rightRow : "----------",
  expected : "4.0"

},

test_case2 = {

  leftRow : "XXX-X-XX-X",
  rightRow : "-XXXX---XX",
  expected : "4.0"

}

test_case3 = {

  leftRow : "XXXXXXXXXX",
  rightRow : "-XX-XX-X--",
  expected : "6.0"

}

test_case4 = {

  leftRow : "XXX-X-XX-X",
  rightRow : "XXX-X-XX-X",
  expected : "6.82"

}

console.log("\n Case 1, Expected Result: "+test_case1.expected+", Output: "+getArrangement(test_case1.leftRow, test_case1.rightRow));
console.log("\n Case 2, Expected Result: "+test_case2.expected+", Output: "+getArrangement(test_case2.leftRow, test_case2.rightRow));
console.log("\n Case 3, Expected Result: "+test_case3.expected+", Output: "+getArrangement(test_case3.leftRow, test_case3.rightRow));
console.log("\n Case 4, Expected Result: "+test_case4.expected+", Output: "+getArrangement(test_case4.leftRow, test_case4.rightRow));

function getArrangement(leftRow, rightRow) {
    var result = 1000;
    var occ = new Array(20);
    
    for (var i=0; i<10; i++){  // get occupied seats from left row.
      occ[i] = leftRow.charAt(i)=='X';  
    }

    for (var i=0; i<10; i++){
      occ[i+10] = rightRow.charAt(i)=='X';  //get occupied seats from right row
    }

    var x = new Array(20);
    var y = new Array(20);
    
    for (var i=0; i<20; i++){  //x point to get disatance i.e start point.
      x[i] = i%10;  
    }

    for (var i=0; i<20; i++){ //y point of end i.e. end points
      y[i] = 2*(i/10);  //multiply by 2 cause from the one seat directly opposite it (i.e., in the other row) by exactly 2 meters.
    } 
    
    for (var i=0; i<20; i++){  //for all seats
       if (!occ[i]){
        for (var j=i+1; j<20; j++){
            if (!occ[j]){
                for (var k=j+1; k<20; k++){
                    if (!occ[k]){ //if not occupied
                        result = Math.min(result, d(x[i], y[i], x[j], y[j])+d(x[i], y[i], x[k], y[k])+d(x[k], y[k], x[j], y[j]));  //getting d by euclidean formulae                   
                    }
                }
            }
        }
      }
    }
    
    
    return result;    
}

  function d(x0, y0, x1, y1) { //calculating formulae for euclidean

    return Math.sqrt((x0-x1)*(x0-x1)+(y0-y1)*(y0-y1));
}