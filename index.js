function isPalindrome(word) {
  // Write your algorithm here
    let reverseWord = word.split("").reverse().join("");
    if (word === reverseWord) {
      return true;
    }else {
      return false;
    }
  }
  

/* 
  Add your pseudocode here
  ues the .Split() to well split the word into an array and save it as a variable.
  Reverse the array with .reverse()
  Then put it back together with .join()
  I should then compare the initial string to the reversed one with an if else statement.
*/

/*
  Add written explanation of your solution here
  The word is treated as an array of characters.
  The characters are separated using .split() method, then reversed using the reverse method.
  .Join() is then used to reconnect the characters to a reversed word.
  if else statemtent is used to compare the new word and its reverse.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;










