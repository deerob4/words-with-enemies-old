'use strict';

let fs = require('fs');
let includes = require('lodash/collection/includes');

function wordList() {
  const wordList = fs.readFileSync('./src/assets/sowpods.txt')
    .toString()
    .toLowerCase()
    .split('\n');

  return wordList;
}

module.exports = wordList;
