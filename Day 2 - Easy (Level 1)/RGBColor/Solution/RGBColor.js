var test_case1 = {

  rgb : [255,0,0],
  expected : [0,  255,  255] 

},

test_case2 = {

  rgb : [115,115,143],
  expected : [243,  243,  15] 

}

test_case3 = {

  rgb : [115,115,144],
  expected : [140,  140,  111] 

}

test_case4 = {

  rgb : [153,12,55],
  expected : [102,  243,  200] 

}

console.log("\n Case 1, Expected Result: "+test_case1.expected+", Output: "+getComplement(test_case1.rgb));
console.log("\n Case 2, Expected Result: "+test_case2.expected+", Output: "+getComplement(test_case2.rgb));
console.log("\n Case 3, Expected Result: "+test_case3.expected+", Output: "+getComplement(test_case3.rgb));
console.log("\n Case 4, Expected Result: "+test_case4.expected+", Output: "+getComplement(test_case4.rgb));

function getComplement(rgb){
  var ans = new Array(rgb.length);
  var i;
  for (i=0;i<rgb.length;i++){
    ans[i] = 255-rgb[i]; //Get inverted color.
  }
 
  var good = true;

  for (i=0;i<rgb.length;i++){
    if (!(mabs(rgb[i]-ans[i]) <=32)){ //Checking if original and copmlimentry color differ by 32
    	good = false;
    }
  }
 
  if (!good){ //if complimentry color is valid i.e. other than grey shades return
  	return ans;
  }
  else{
 	for (i=0;i<ans.length;i++){ //else make color complimentry by adding 128
 	  if (rgb[i]+128<=255){
 	  	ans[i]=rgb[i]+128;
 	  }
	  else{
	  	ans[i]=rgb[i]-128;
	  }
          
    }
      return ans;
  }
    
}
 
function mabs(x){ //function to return negative value if any. other wise return x as it is.
  if (x<0){ 
      return -x;		
  }
      
  return x;
}