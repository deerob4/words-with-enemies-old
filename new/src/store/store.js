import {
  removeFromWord,
  changeColours,
  addToWord,
  addLetter,
  nextRound,
} from 'actions/actions';

import wordsWithEnemies from 'reducers/wordsWithEnemies';
import { createStore } from 'redux';
import letterblocks from 'libs/letterblocks';


let store = createStore(wordsWithEnemies);

console.log(store.getState());

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

let x = letterblocks(3);

x.forEach(letter => store.dispatch(addLetter(letter)));

store.dispatch(addToWord(2));
store.dispatch(removeFromWord(2));
store.dispatch(nextRound());
