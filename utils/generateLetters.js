var choice = require('./choice');

const vowels = 'aeiou';
const consonants = 'bcdfghjklmnpqrstvwxyz';

var bank = function(quantity) {
  var numVowels = Math.floor(quantity / 3); // Performs integer division.
  var letters = [];
  var counter = 0

  // Constructs multiple sets of letters and consonants - will look something like:
  // ["aeiou", "aeiou", "aeiou", "bcdfghjklmnpqrstvwxyz", "bcdfghjklmnpqrstvwxyz"]
  var letterSets = [vowels, vowels, vowels]
  for (let i = 0; i < (quantity - numVowels); i++) {
    letterSets.push(consonants);
  }

  for (let letterset of letterSets) {
    for (let letter of choice(letterset)) {
      letters.push({
        id: counter,
        value: letter
      });
      counter++
    }
  }
  return letters;
}

var vowel = function() {
  return choice(vowels.split(''));
}

var consonant = function() {
  return choice(consonants.split(''));
}

exports.bank = bank;
exports.vowel = vowel;
exports.consonant = consonant;
