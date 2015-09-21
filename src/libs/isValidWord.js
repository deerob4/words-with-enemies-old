'use strict';

let wordList = require('../utils/wordList');
let includes = require('lodash/collection/includes');

const isValidWord = word => includes(wordList(), word);

module.exports = isValidWord;
