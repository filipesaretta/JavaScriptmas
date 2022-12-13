/* toTitleCase
Write a function that will capitalize every word in a sentence.

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/


function capitalizeWord(word){
  const capitalized = word.slice(0, 1).toUpperCase() + word.slice(1);
  return capitalized
}

function toTitleCase(str){
  return str.split(' ').map(word => capitalizeWord(word)).join(' ');
}

// Test your functions 
console.log(capitalizeWord("pumpkin"));  
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));