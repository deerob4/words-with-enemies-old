import replicate from 'utils/replicate';
import choice from 'utils/choice';

function generateLetters(quantity) {
  const vowels = 'aeiou';
  const consonants = 'bcdfghjklmnpqrstvwxyz';

  let numVowels = Math.floor(quantity / 3);
  let lettersets = replicate(vowels, 3).concat(replicate(
    consonants, quantity
  ));

  return lettersets.map(letterset => choice(letterset));
}

export default generateLetters;
