function generateWords(letters) {
  const letters = letters.split('');
  const foundWords = [];
  const wordList = [];

  wordList.forEach(word => {
    let splitWord = word.split('');

    letters.forEach(letter => {
      let index = splitWord.indexOf(letter);

      if (index !== -1) {
        splitWord.splice(index, 1);
      }
    });

    if (splitWord.length === 0) {
      foundWords.push(word);
    }
  });

  return foundWords;
}

export default generateWords;
