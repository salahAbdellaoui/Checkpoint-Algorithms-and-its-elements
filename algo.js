// Initialize counters
let length = 0;
let words = 1; // start with 1 (assuming at least one word before the first space)
let vowels = 0;

// Read input sentence
let sentence = prompt("Enter a sentence ending with a period (.)");

// Loop through each character until we find '.'
for (let i = 0; i < sentence.length; i++) {
  let ch = sentence[i];

  if (ch === ".") {
    break; // stop when we reach the period
  }

  // Count total characters
  length++;

  // Count vowels
  if ("aeiouAEIOU".includes(ch)) {
    vowels++;
  }

  // Count words (single spaces only)
  if (ch === " ") {
    words++;
  }
}

// Output the results
console.log("Length of the sentence:", length);
console.log("Number of words:", words);
console.log("Number of vowels:", vowels);
