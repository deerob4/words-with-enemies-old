var React = require('react')
var LetterBank = require('./LetterBank.jsx');

React.render(React.createElement(LetterBank, {quantity: 10}), document.getElementById('game'));
