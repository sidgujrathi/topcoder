var test_case1 = {

  N : 5,
  M : 3,
  L : 2,
  expected : 10 

},

test_case2 = {

  N : 4,
  M : 1,
  L : 3,
  expected : 0 

}

test_case3 = {

  N : 10,
  M : 3,
  L : 5,
  expected : 4 

}

test_case4 = {

  N : 15,
  M : 4,
  L : 9,
  expected : 15

}

console.log("\n Case 1, Expected Result: "+test_case1.expected+", Output: "+timesThrown(test_case1.N,test_case1.M,test_case1.L));
console.log("\n Case 2, Expected Result: "+test_case2.expected+", Output: "+timesThrown(test_case2.N,test_case2.M,test_case2.L));
console.log("\n Case 3, Expected Result: "+test_case3.expected+", Output: "+timesThrown(test_case3.N,test_case3.M,test_case3.L));
console.log("\n Case 4, Expected Result: "+test_case4.expected+", Output: "+timesThrown(test_case4.N,test_case4.M,test_case4.L));

function timesThrown(N, M, L){ 
  //variable declration
  var res,i,k;
  var count = new Array(51); 

  //count initialise to 0
  for (i=0;i<51;i++) 
    count[i]=0 ; 

    count[0]=1 ; 
    k=0 ; 

  while(count[k]!=M){
    if (count[k]%2){
      k=((k-L)%N+N)%N; //pass the ball directly to the person L places to his left if p is even
      count[k]++ ; 
    } 
    else{
      k=(k+L)%N ; //L places to his right if p is odd 
      count[k]++;   
    }   
  } 

  res=-1; 

  //count the result finally and return it.
  for (i=0;i<N;i++) 
    res+=count[i]; 

  return res ; 
};   
  