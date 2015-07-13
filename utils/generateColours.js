var randomColour = require('randomcolor');
var colourLuminance = require('./colourLuminance')
var choice = require('./choice');


var game = function() {
	var colours = ['blue', 'red', 'orange', 'purple'];
	var primaryColour = randomColour({ luminosity: 'light', hue: choice(colours) });

	return {
		primaryColour,
		secondaryColour: colourLuminance(primaryColour, -0.2),
		buttonColour: colourLuminance(primaryColour, -0.3),
		userColour: randomColour({ luminosity: 'light' }),
		computerColour: randomColour({ luminosity: 'light', hue: 'red' })
	};
}

var letter = function() {
	var backgroundColour = randomColour({ luminosity: 'light' });
	var borderColour = colourLuminance(backgroundColour, -0.2);
	var textColour = colourLuminance(borderColour, -0.2);

	return {backgroundColour, borderColour, textColour}
}

exports.letter = letter;
exports.game = game;