import colourLuminance from 'libs/colourLuminance';
import randomColour from 'randomcolor';
import choice from 'utils/choice';

export function letterColours(quantity) {
  const colours = [];

  for (let i = 0; i < quantity; i++) {
    let backgroundColor = randomColour({ luminosity: 'light' });
    let borderColor = colourLuminance(backgroundColor, -0.2);
    let color = colourLuminance(borderColor, -0.2);

    colours.push({
      backgroundColor,
      borderColor,
      color
    });
  }

  return colours;
}

export function gameColours() {
  let hues = ['blue', 'red', 'orange', 'purple'];

  let primary = randomColour({ luminosity: 'light', hue: choice(hues) });
  let userPrimary = randomColour({ luminosity: 'light' });
  let computerPrimary = randomColour({ luminosity: 'light', hue: 'red' });

  let colourScheme = {
    primary,
    userPrimary,
    computerPrimary,
    secondary: colourLuminance(primary, -0.2),
    button: colourLuminance(primary, -0.3),
    userSecondary: colourLuminance(userPrimary, 0.1),
    computerSecondary: colourLuminance(computerPrimary, 0.1)
  };

  colourScheme.userTertiary = colourLuminance(colourScheme.userSecondary, -0.2);
  colourScheme.computerTertiary = colourLuminance(colourScheme.computerSecondary, -0.2);

  return colourScheme;
}
