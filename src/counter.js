// Given a document string
// returns word, sentence, paragraphs, bigrams

export function count(string) {
  let counts = {};
  counts.chars = 0; // every non new line character
  counts.words = 0; // # of items delimited by a " ", "/n" or "/r", except punctuation
  counts.sentences = 0; // # of items delimited by a . , ?, or !
  counts.paragraphs = 0; // Blank lines between two pieces of text + 1
  let words = [];
  let word = "";

  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);

    let char = string[i];
    // Character Count (excludes non-visible characters like new lines \n)
    if (string.charCodeAt(i) >= 32 && string.charCodeAt(i) < 127) {
      counts.chars++;
    }

    // Word Count
    if (char !== "+" && char !== "-" && char !== "," && char !== "." && char !== "\n" && char !== "\r" && char !== "!" && char !== "?" && char !== " ") {
      word += string[i];
    } else if (word !== "") {
      // A "," followed by a space will cause an empty string to appear as a word
      counts.words++;
      words.push(word);
      word = "";
    }

    // Sentence Count
    if (char === "." || char === "!" || char === "?") {
      counts.sentences++;
    }

    // Paragraph Count
    if (i >= 1) {
      if (string.charCodeAt(i - 1) !== 10 && string.charCodeAt(i) === 10) {
        // A non new line followed by a new line indicates a paragraph
        counts.paragraphs++;
      }
    }
  }

  console.log(words);
  // Bigrams Count
  // Creates a histogram with 2 adjacent words as keys, and their frequency as the value.
  let histo = new Map();
  for (let i = 1; i < words.length; i++) {
    let wordA = words[i - 1];
    let wordB = words[i];

    if (histo.has(`${wordA} ${wordB}`)) {
      histo.set(`${wordA} ${wordB}`, histo.get(`${wordA} ${wordB}`) + 1);
    } else {
      histo.set(`${wordA} ${wordB}`, 1);
    }
  }
  counts.bigrams = histo;

  // Count the first paragraph, if there were any
  if (counts.paragraphs > 0) {
    counts.paragraphs += 1;
  }

  return counts;
}

// export function count2(string) {
//   let counts = {};
//   counts.chars = 0; // every non new line character
//   counts.words = 0; // # of items delimited by a " ", "/n" or "/r", except punctuation
//   counts.sentences = 0; // # of items delimited by a . , ?, or !
//   counts.paragraphs = 0; // Blank lines between two pieces of text + 1

//   for (let i = 1; i < string.length; i++) {
//     let char = string[i];

//     // Character Count (excludes new lines \n)
//     if (string.charCodeAt(i) >= 32 && string.charCodeAt(i) < 127) {
//       counts.chars++;
//     }

//     if (string.charCodeAt(i - 1) != 10 && string.charCodeAt(i) === 10) {
//       // A non new line followed by a new line indicates a paragraph
//       counts.paragraphs++;
//     }
//   }

//   if (counts.paragraphs > 0) {
//     counts.paragraphs += 1;
//   }

//   //  Word Count
//   let words = string.trim().split(" ");
//   console.log("space delimited", words);
//   let wordsLineSeparated = string.split("\n");
//   counts.words = words.length + wordsLineSeparated.length;

//   // Sentence Count
//   let sentences = string.split(/[!\.\?]/);
//   counts.sentences = sentences.length - 1;

//   //Paragraph Count

//   // Bigrams Count
//   // Creates a histogram with 2 adjacent words as keys, and their frequency as the value.
//   let histo = new Map();
//   for (let i = 0; i < words.length - 1; i++) {
//     let wordA = words[i];
//     let wordB = words[i + 1];

//     if (histo.has(`${wordA} ${wordB}`)) {
//       histo.set(`${wordA} ${wordB}`, histo.get(`${wordA} ${wordB}`) + 1);
//     } else {
//       histo.set(`${wordA} ${wordB}`, 1);
//     }
//   }
//   counts.bigrams = histo;

//   return counts;
// }

export default count;
