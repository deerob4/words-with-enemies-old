import randomColour from 'randomcolor';
import colourLuminance from './colourLuminance';
import choice from './choice';

export let generateGameColours = () =>  {
	let colours = ['blue', 'red', 'orange', 'purple'];
	
	let colourScheme = {
		primary: randomColour({ luminosity: 'light', hue: choice(colours) }),
		userPrimary: randomColour({ luminosity: 'light' }),
		computerPrimary: randomColour({ luminosity: 'light', hue: 'red' }),
	};

	colourScheme.secondary = colourLuminance(colourScheme.primary, -0.2);
	colourScheme.button = colourLuminance(colourScheme.primary, -0.3);
	colourScheme.userSecondary = colourLuminance(colourScheme.userPrimary, 0.1);
	colourScheme.computerSecondary = colourLuminance(colourScheme.computerPrimary, 0.1);
	colourScheme.userTertiary = colourLuminance(colourScheme.userSecondary, -0.2);
	colourScheme.computerTertiary = colourLuminance(colourScheme.computerSecondary, -0.2);

	return colourScheme;
};

export let generateLetterColours = () => {
	let backgroundColour = randomColour({ luminosity: 'light' });
	let borderColour = colourLuminance(backgroundColour, -0.2);
	let textColour = colourLuminance(borderColour, -0.2);

	return {backgroundColour, borderColour, textColour};
};
