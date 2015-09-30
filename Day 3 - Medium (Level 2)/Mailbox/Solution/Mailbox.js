var test_case1 = {

  collection : "AAAAAAABBCCCCCDDDEEE123456789",
  address : ["123C","123A","123 ADA"],
  expected : "0"

},

test_case2 = {

  collection : "ABCDEFGHIJKLMNOPRSTUVWXYZ1234567890",
  address : ["2 FIRST ST"," 31 QUINCE ST", "606 BAKER"],
  expected : "3"

}

test_case3 = {

  collection : "ABCDAAST",
  address : ["111 A ST", "A BAD ST", "B BAD ST"],
  expected : "2"

}

console.log("\n Case 1, Expected Result: "+test_case1.expected+", Output: "+impossible(test_case1.collection, test_case1.address));
console.log("\n Case 2, Expected Result: "+test_case2.expected+", Output: "+impossible(test_case2.collection, test_case2.address));
console.log("\n Case 3, Expected Result: "+test_case3.expected+", Output: "+impossible(test_case3.collection, test_case3.address));

function impossible(collection, address){
  var tmp = "";
  var count = 0;
    
  for(var i = 0; i < address.length; i++){ //for each address in input
    tmp = collection;
    var s = address[i];
      
    for(var j = 0; j < s.length; j++){ //for each character in one address
      var c = s.charAt(j);
        
      if(c == ' '){
        continue;
      }
        
      if(tmp.indexOf(c) == -1){ //end of line chacter encounter
        count++;
        break;
      }
      else{
        var m = tmp.indexOf(c); //check if charcter in address has in given collection
        tmp = tmp.substring(0, m) + tmp.substring(m + 1); // checking if address can be formed or not.
      }
    }
  }
    
    return count;
}