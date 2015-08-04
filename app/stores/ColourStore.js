import alt from '../libs/alt';

import ColourActions from '../actions/ColourActions';

import { generateGameColours } from '../libs/generateColours';

class ColourStore {
	constructor() {
		this.bindActions(ColourActions);

		this.colours = {};
	}
	
	generate() {
		this.setState({ colours: generateGameColours() });
	}
}

export default alt.createStore(ColourStore);
