import choice from './choice';

const vowels = 'aeiou';
const consonants = 'bcdfghjklmnpqrstvwxyz';

export let generateLetterSet = quantity => {
  let numVowels = Math.floor(quantity / 3); // Performs integer division.
  let letters = [];
  let counter = 0;

  // Constructs multiple sets of letters and consonants - will look something like:
  // ["aeiou", "aeiou", "aeiou", "bcdfghjklmnpqrstvwxyz", "bcdfghjklmnpqrstvwxyz"]
  let letterSets = [vowels, vowels, vowels];
  for (let i = 0; i < (quantity - numVowels); i++) {
    letterSets.push(consonants);
  }

  for (let letterset of letterSets) {
    for (let letter of choice(letterset)) {
      letters.push({
        id: counter,
        value: letter
      });
      counter++;
    }
  }
  return letters;
};

export let generateVowel = () => choice(vowels.split(''));
export let generateConsonant = () => choice(consonants.split(''));
