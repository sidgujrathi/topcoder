var test_case1 = {

  skillOfTeamA : 50,
  skillOfTeamB : 50,
  expected : "0.52656189083"

},

test_case2 = {

  skillOfTeamA : 100,
  skillOfTeamB : 100,
  expected : "0.0"

}

test_case3 = {

  skillOfTeamA : 12,
  skillOfTeamB : 89,
  expected : "0.6772047168840"

}
// Number of intervals in one match.
   
  var intervals = 18;


console.log("\n Case 1, Expected Result: "+test_case1.expected+", Output: "+getProbability(test_case1.skillOfTeamA, test_case1.skillOfTeamB));
console.log("\n Case 2, Expected Result: "+test_case2.expected+", Output: "+getProbability(test_case2.skillOfTeamA, test_case2.skillOfTeamB));
console.log("\n Case 3, Expected Result: "+test_case3.expected+", Output: "+getProbability(test_case3.skillOfTeamA, test_case3.skillOfTeamB));

// Compute the final probability.
   
function getProbability(skillTeamA, skillTeamB) {
  var skillA = skillTeamA / 100;
  var skillB = skillTeamB / 100;
    
  return 1 -(1 - primeGoalProbability(skillA)) * (1 - primeGoalProbability(skillB));
}

// Compute the prime goal probability for one team.
  
function primeGoalProbability(p) {
  // probs[i] is the probability that the team has scored i goals.
  var probs = new Array(intervals + 1);
 
  // The probability for 0 goals is initially 1.
  probs[0] = 1;
 
  // All others are 0 (no goals have been shot yet).
  for (var i = 1; i <= intervals; i++) {
      probs[i] = 0;
  }
 
  // Play the match, stepping through each interval.
  for (var i = 1; i <= intervals; i++) {
    // Update all probabilities for each step.
    for (var j = intervals; j >= 0; j--) {
      probs[j] *= 1 - p;
      if (j > 0){
        probs[j] += probs[j - 1] * p;
      }
          
    }
  }
  
  var sum = 0;
  
  // Collect and return all probabilities for a prime number of goals.
  for (var i = 1; i <= intervals; i++) {
    if (isPrime(i))
    sum += probs[i];
  }
 
  return sum;
}

// Tests if the given number is prime.
function isPrime(n) {
  if (n <= 1){
    return false;
  } 
  if (n == 2){
    return true;
  } 
  if (n % 2 == 0){
     return false;
  }
  var m = Math.round(Math.sqrt(n));
  for (var i = 3; i <= m; i += 2){
    if (n % i == 0){
        return false;
    }
      
  }
      
    return true;
  }

  
  

  