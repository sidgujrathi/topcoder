var test_case1 = {

	startPoints :[17,85,57],
	endPoints : [33,86,84],
	expected : "44"

},

test_case2 = {

	startPoints :[45,100,125,10,15,35,30,9],
	endPoints : [46,200,175,20,25,45,40,10],
	expected : "132"

}

test_case3 = {

	startPoints :[4387,711,2510,1001,4687,3400,5254,584,284,1423,3755,929,2154,5719,1326,2368,554],
	endPoints : [7890,5075,2600,6867,7860,9789,6422,5002,4180,7086,8615,9832,4169,7188,9975,8690,1423],
	expected : "9691"

}

test_case4 = {

	startPoints :[4906,5601,5087,1020,4362,2657,6257,5509,5107,5315,277,6801,2136,2921,5233,5082,497,8250,3956,5720],
	endPoints : [4930,9130,9366,2322,4687,4848,8856,6302,5496,5438,829,9053,4233,4119,9781,8034,3956,9939,4908,5928],
	expected : "9510"

}

test_case5 = {

	startPoints :[51,807,943,4313,8319,3644,481,220,2161,448,465,1657,6290,22,6152,647,3185,4474,2168],
	endPoints : [1182,912,1832,7754,9557,7980,4144,3194,7129,5535,1172,2043,6437,7252,9508,4745,8313,8020,4017],
	expected : "9535"

}

console.log("\n Case 1, Expected Result: "+test_case1.expected+", Output: "+snowyHighwayLength(test_case1.startPoints,test_case1.endPoints));
console.log("\n Case 2, Expected Result: "+test_case2.expected+", Output: "+snowyHighwayLength(test_case2.startPoints,test_case2.endPoints));
console.log("\n Case 3, Expected Result: "+test_case3.expected+", Output: "+snowyHighwayLength(test_case3.startPoints,test_case3.endPoints));
console.log("\n Case 4, Expected Result: "+test_case4.expected+", Output: "+snowyHighwayLength(test_case4.startPoints,test_case4.endPoints));
console.log("\n Case 5, Expected Result: "+test_case5.expected+", Output: "+snowyHighwayLength(test_case5.startPoints,test_case5.endPoints));

function snowyHighwayLength(startPoints, endPoints){
	var hit = new Array(10000);
	
	for (var i = 0; i < startPoints.length; i++) {
		for (var j = startPoints[i]; j < endPoints[i]; j++) {
			hit[j]=true;
			}
	}
	
	var count=0;
	for (var j = 0; j<=1000; j++) {
		if(hit[j]){
			count ++;
		}	
	}

return count;
}
