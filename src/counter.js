// Given a document string
// returns word, sentence, paragraphs, bigrams

export function count(string) {
  let counts = {};
  counts.chars = 0;
  counts.words = 0;
  counts.sentences = 0;
  counts.paragraphs = 0;
  counts.bigrams = 0;

  for (let i = 1; i < string.length; i++) {
    let char = string[i];

    // Counts chars (excludes new lines \n)
    if (string.charCodeAt(i) >= 32 && string.charCodeAt(i) < 127) {
      counts.chars++;
    }
  }

  counts.words = string.trim().split(" ").length;

  let sentences = string.split(/[!\.\?]/);
  counts.sentences = sentences.length - 1;

  return counts;
}

export default count;
