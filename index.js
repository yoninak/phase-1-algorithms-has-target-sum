

function hasTargetSum(array, target) {
  for (let y = 0;(y< array.length); y++) {
    
    for (let i = 1 ; (i< array.length);i++){
      console.log(array)
      if (array[y]+ array[y + i] === target){
        return true
    }
    
    }  
  }
  return false 
}

/* add each array item with each array item, see if any of these numbers euquals the target number 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
