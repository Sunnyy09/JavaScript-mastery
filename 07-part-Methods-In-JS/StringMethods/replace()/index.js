//string.replace(searchValue, newValue);
// Replace a single occurrence of a word
let str = "I love programming";
let newStr = str.replace("programming", "coding");
console.log(newStr);

//
//
//Replace all occurrences of a word using regular expression
let strr = "apple apple apple";
let newStrr = strr.replace(/\apple/g, "orange");
console.log(newStrr);
