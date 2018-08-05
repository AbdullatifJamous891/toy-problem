//Given an array of words (array of strings), return all words that are palindromes.
// Example: filterPalindromes([ "word", "Ana", "race car" ])
// output: [ "Ana", "race car" ]








function filterPalindromes (words) {
  var arr = [];
  for(var i=0; i<words.length; i++){
  	if(words[i].toLowerCase().split(" ").join("") === 
  	   words[i].toLowerCase().split(" ").join("").split("").reverse().join("")){
  		arr.push(words[i])
  	}
  }
  return arr
}