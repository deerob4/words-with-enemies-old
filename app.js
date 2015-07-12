var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var readline = require('readline');
var wordList = [];

app.use(express.static(__dirname));

readline.createInterface({
  input: fs.createReadStream('public/assets/sowpods.txt'),
  terminal: false
}).on('line', function(line) {
  wordList.push(line.toLowerCase());
});

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.get('/api/letters', function(req, res) {
	var quantity = req.query.quantity;
  var vowels = 'aeiou';
  var consonants = 'bcdfghjklmnpqrstvwxyz';
  var numVowels = Math.floor(quantity / 3); // Performs integer division.
  var letters = [];

  // Constructs multiple sets of letters and consonants - will look something like:
  // ["aeiou", "aeiou", "aeiou", "bcdfghjklmnpqrstvwxyz", "bcdfghjklmnpqrstvwxyz"]
  var letterSets = [vowels, vowels, vowels]
  for (let i = 0; i < (quantity - numVowels); i++) {
    letterSets.push(consonants);
  }

  for (let letterset of letterSets) {
    for (let letter of choice(letterset)) {
      letters.push(letter);
    }
  }
  res.json({letters});
});

app.get('/api/words', function(req, res) {
	var letters = req.query.letters.split('');
  var foundWords = [];

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

	res.json({length: foundWords.length, foundWords: sortByLength(foundWords)});
});

function choice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function sortByLength(array) {
  var sorted = array.sort(function(a, b) {
    return a.length - b.length;
  });

  return sorted;
}

app.listen(5000, function() {
	console.log('Listening on 5000.');
});