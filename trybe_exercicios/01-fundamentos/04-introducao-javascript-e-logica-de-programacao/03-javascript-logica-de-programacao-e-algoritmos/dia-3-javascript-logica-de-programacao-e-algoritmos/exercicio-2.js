let word = "tryber";
let invertedWord = "";

for (let index = 1; index <= word.length; index += 1) {
  invertedWord += word[word.length - index];
}
console.log(invertedWord);
