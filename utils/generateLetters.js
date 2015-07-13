var choice = require('./choice');

module.exports = function(quantity) {
  var vowels = 'aeiou';
  var consonants = 'bcdfghjklmnpqrstvwxyz';
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
  console.log('Letters generated!');
  return letters;
}

