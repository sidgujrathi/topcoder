var test_case1 = {

  str : "|-|-|",
  expected : "5"

},

test_case2 = {

  str : "-|-|-|-",
  expected : "7"

}

test_case3 = {

  str : "||||||",
  expected : "1"

}

test_case4 = {

  str : "|-||-|-",
  expected : "4"

}

test_case5 = {

  str : "|-|---|-|---|-|",
  expected : "5"

}

console.log("\n Case 1, Expected Result: "+test_case1.expected+", Output: "+getLength(test_case1.str));
console.log("\n Case 2, Expected Result: "+test_case2.expected+", Output: "+getLength(test_case2.str));
console.log("\n Case 3, Expected Result: "+test_case3.expected+", Output: "+getLength(test_case3.str));
console.log("\n Case 4, Expected Result: "+test_case4.expected+", Output: "+getLength(test_case4.str));
console.log("\n Case 5, Expected Result: "+test_case5.expected+", Output: "+getLength(test_case5.str));

function getLength(str){
	//Declare and initialize variables.
	var resultLength = 1;
	var tempLength = 1;

	//Itearate through string
		for (var i = 0; i < str.length - 1; i ++) {
			if (str.charAt(i) != str.charAt(i+1))	{ //if current chacter in string is not same as next to it then it will count as fence.
				tempLength ++;
			}
			else
			{
				tempLength = 1;
			}
			//Only copy most larger string count till now.
			resultLength = tempLength > resultLength ? tempLength : resultLength;
		}
		return resultLength;
}