// String properties
// wrapper String Object, don't memorize methods

let text = ' Peter Jordan';
let result = text.length;
console.log(result); // 13 length counts empty spaces as well

console.log(text.length); // logs length if text including spaces
console.log(text.toLowerCase()); // converts text to lowercase
console.log(text.toUpperCase()); // converts text to uppercase
console.log(text.charAt(0)); //  selects character by index
console.log(text.charAt(text.length-1)); // gives me the last character no matter how long the string is
console.log(text.indexOf('P')); // gives the index for that character, it is case sensitive 'p' will give a value of -1 because it does not exist
console.log(text.indexOf('e')); // gives the index of the first instance of that character in this case there are 2 'e's but it only returns the index of the first one
console.log(text);
console.log(text.trim()); // removes extra empty spaces from either side of the string
console.log(text.startsWith(' peter')); // returns true or false based on wheather then string starts this way
console.log(text.trim().toLowerCase().startsWith('peter')); // chain methods together
console.log(text.includes('eter')); //returns weather that section can be located
console.log(text.slice(0, 3)); // returns characters inbetween index 1 and index 3
console.log(text.slice(-3)); // returns the last 3 numbers


//=====================================================>
// const person = {
//     name: 'peter', // property
//     greeting() {
//         // method
//     },
// };

// console.log(person);

// console.log(person.name); // dot notation
// person.greeting();