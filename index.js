const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];
function capitalizeFirstLetter(sentence) {
  return sentence
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function titleCased() {
  return tutorials.map((tutorial) => capitalizeFirstLetter(tutorial));
}

// The + word.slice(1) is used to concatenate the rest of the word after capitalizing the first letter.

// When you apply word.charAt(0).toUpperCase() to a word, it returns the first letter of the word in uppercase. But we also want to include the rest of the original word after the capitalized first letter.

// word.slice(1) is used to extract the substring from the original word, starting at the second character (index 1) and going to the end of the word. This way, you get the rest of the word without the first letter.

// By using + word.slice(1), you concatenate the rest of the word after the capitalized first letter, creating a new word with the first letter capitalized and the rest of the word unchanged.

// For example, if you have the word "hello", applying word.charAt(0).toUpperCase() would give you "H", and word.slice(1) would give you "ello". Concatenating them using + word.slice(1) would give you the final capitalized word: "Hello".
