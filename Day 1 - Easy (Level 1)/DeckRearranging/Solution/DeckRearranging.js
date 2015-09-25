var test_case1 = {

	deck : "BRBRR",
	above : [0, 0, 1, 0, 3],
	expected : "RRBRB"

},

test_case2 = {

	deck : "RRRRRR",
	above : [0,1,2,0,1,3],
	expected : "RRRRRR"

}

test_case3 = {

	deck : "RBRRBRBB",
	above : [0,1,2,3,4,5,6,7],
	expected : "RBRRBRBB"

}

test_case4 = {

	deck : "RBRRBRBB",
	above : [0,0,0,0,0,0,0,0],
	expected : "BBRBRRBR"

}

test_case5 = {

	deck : "RBRRBRBB",
	above : [0,1,0,0,4,0,6,7],
	expected : "RRRRBBBB"

}

console.log("\n Case 1, Expected Result: "+test_case1.expected+", Output: "+rearrange(test_case1.deck,test_case1.above));
console.log("\n Case 2, Expected Result: "+test_case2.expected+", Output: "+rearrange(test_case2.deck,test_case2.above));
console.log("\n Case 3, Expected Result: "+test_case3.expected+", Output: "+rearrange(test_case3.deck,test_case3.above));
console.log("\n Case 4, Expected Result: "+test_case4.expected+", Output: "+rearrange(test_case4.deck,test_case4.above));
console.log("\n Case 5, Expected Result: "+test_case5.expected+", Output: "+rearrange(test_case5.deck,test_case5.above));

function rearrange(deck, above) {
	//declaration and initialization.
	var resultChars = new Array(deck.length);
	var charArray = deck;
	
	for (var i = 0; i < charArray.length; i++) {
		for (var j = resultChars.length - 1; j >= above[i] + 1; j--) {	
			resultChars[j] = resultChars[j - 1];
		}
		resultChars[above[i]] = charArray[i];
	}
	return resultChars;
}