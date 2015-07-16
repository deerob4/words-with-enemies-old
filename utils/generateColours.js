var randomColour = require('randomcolor');
var colourLuminance = require('./colourLuminance')
var choice = require('./choice');


var game = function() {
	var colours = ['blue', 'red', 'orange', 'purple'];
	var primary = randomColour({ luminosity: 'light', hue: choice(colours) });
	var userPrimary = randomColour({ luminosity: 'light' });
	var userSecondary = colourLuminance(userPrimary, 0.1);
	var computerPrimary = randomColour({ luminosity: 'light', hue: 'red' });
	var computerSecondary = colourLuminance(computerPrimary, 0.1)
	
	return {
		primary,
		secondary: colourLuminance(primary, -0.2),
		button: colourLuminance(primary, -0.3),
		userPrimary,
		userSecondary,
		userTertiary: colourLuminance(userSecondary, -0.2),
		computerPrimary,
		computerSecondary,
		computerTertiary: colourLuminance(computerSecondary, -0.2)
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