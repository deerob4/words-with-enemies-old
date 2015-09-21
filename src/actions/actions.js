import * as types from 'constants/actionTypes';

export function addToWord(id) {
  return { type: types.ADD_TO_WORD, id };
}

export function removeFromWord(id) {
  return { type: types.REMOVE_FROM_WORD, id };
}

export function addLetter(letter) {
  return { type: types.ADD_LETTER, letter };
}

export function changeColours(gameColours, letterColours) {
  return { type: types.CHANGE_COLOURS, gameColours, letterColours };
}

export function nextRound() {
  return { type: types.NEXT_ROUND };
}
