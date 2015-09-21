export let getIndexes = arr => arr.map((x, i) => i);

export function nextIndex(array, idProp = 'id') {
  let ids = array.reduce((list, letter) => [...list, letter[idProp]]);

  return Math.max(...ids) + 1;
}
