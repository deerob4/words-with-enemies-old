import {
  ADD_TO_WORD,
  REMOVE_FROM_WORD,
  ADD_LETTER,
  CHANGE_COLOURS,
  NEXT_ROUND
} from 'constants/actionTypes';

import { combineReducers } from 'redux';

function letters(state = { bank: [], word: [] }, action) {
  switch (action.type) {
    // Adds a letter to the letterbank.
    case ADD_LETTER:
      return Object.assign({}, state, {
        bank: [...state.bank, {
          id: action.letter.id,
          value: action.letter.value
        }]
      });
    // Moves a letter to the word array.
    case ADD_TO_WORD:
      let letterToMove = state.bank.filter(letter => letter.id === action.id)[0];
      return Object.assign({}, state, {
        bank: state.bank.filter(letter => letter !== letterToMove),
        word: [...state.word, letterToMove]
      });
    // Moves a letter back to the letter bank.
    case REMOVE_FROM_WORD:
      let move = state.word.filter(letter => letter.id === action.id)[0];
      return Object.assign({}, state, {
        bank: [...state.bank, move],
        word: state.word.filter(letter => letter !== move)
      });
    // Returns the current state.
    default:
      return state;
  }
}

function colours(state = { game: {}, letters: {} }, action) {
  switch (action.type) {
    // Sets the colours to a new object.
    case CHANGE_COLOURS:
      return Object.assign({}, state,  {
        game: action.gameColours,
        letters: action.letterColours
      });
    // Creates a new property in the colours object using
    // using the ID of the letter, containing the colours.
    case ADD_LETTER:
      return Object.assign({}, state, {
        letters: Object.assign({}, state.letters, {
          [action.letter.id]: action.letter.colours
        })
      });
    // Returns the current state.
    default:
      return state;
  }
}

function round(state = 1, action) {
  switch (action.type) {
    case NEXT_ROUND:
      return state + 1;
    default:
      return state;
  }
}

function scores(state = { user: 0, computer: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT_USER_SCORE':
      return Object.assign({}, state, {
        user: state.user + 1
      });
    case 'INCREMENT_COMPUTER_SCORE':
      return Object.assign({}, state, {
        computer: state.computer + 1
      });
    default:
      return state;
  }
}

const wordsWithEnemies = combineReducers({
  colours,
  letters,
  round,
  scores
});

export default wordsWithEnemies;
