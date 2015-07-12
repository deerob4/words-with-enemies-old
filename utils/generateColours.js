var randomColour = require('randomcolor');
var colourLuminance = require('./colourLuminance')


var letter = function() {
	var backgroundColour = randomColour({luminosity: 'light'});
	var borderColour = colourLuminance(backgroundColour, -0.2);
	var textColour = colourLuminance(borderColour, -0.2);

	return {backgroundColour, borderColour, textColour}
}

exports.letter = letter;