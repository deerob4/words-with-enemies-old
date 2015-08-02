let express = require('express');
let app = express();
let path = require('path');
let fs = require('fs');
let readline = require('readline');
let wordList = [];

app.use(express.static(__dirname + '/app'));

readline.createInterface({
  input: fs.createReadStream('app/public/assets/sowpods.txt'),
  terminal: false
}).on('line', line => {
  wordList.push(line.toLowerCase());
});

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/app/index.html');
});

app.get('/api/words', (req, res) => {
	let letters = req.query.letters.split('');
  let foundWords = [];

  for (let word of wordList) {
    let splitWord = word.split('');
    // Loop through all the letters passed via params.
    for (let letter of letters) {
      let index = splitWord.indexOf(letter);
      // If the letter is in the current word...
      if (index != -1) {
        // ...remove it
        splitWord.splice(index, 1);
      }
    }
    // If the word no longer has any letters left (they have all been matched).
    if (splitWord.length === 0) {
      foundWords.push(word);
    }
  }

  console.log(`${req.query.letters} was searched - ${foundWords.length} words were found.`);

	res.json({ length: foundWords.length, foundWords: sortByLength(foundWords) });
});

function sortByLength(array) {
  let sorted = array.sort((a, b) => {
    return a.length - b.length;
  });

  return sorted;
}

<<<<<<< HEAD
app.listen(5000, () => {
	console.log('Listening on 5000.\n');
});
=======
app.listen(5000, function() {
	console.log('Listening on port 5000.');
});
>>>>>>> 69ece2df386762b251eb781ba47eb6eaa40be020
