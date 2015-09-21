import generateLetters from 'libs/generateLetters';
import { letterColours } from 'libs/generateColours';
import combine from 'utils/combine';
import range from 'utils/range';

function letterblocks(x) {
  return combine(
    [letterColours(x), 'colours'],
    [generateLetters(x), 'value'],
    [range(x), 'id']
  );
}

export default letterblocks;
