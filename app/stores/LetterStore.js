import alt from '../libs/alt';
import LetterActions from '../actions/LetterActions';

import { generateLetterSet, generateVowel, generateConsonant } from '../libs/generateLetters';

class LetterStore {
	constructor() {
		this.bindActions(LetterActions);

		this.letters = [];
	}

	newLetterSet(quantity) {
		this.setState({
			letters: generateLetterSet(quantity)
		});
	}

	addVowel() {
		this.setState({
			letters: this.state.letters.concat([generateVowel()])
		});
	}

	addConsonant() {
		this.setState({
			letters: this.state.letters.concat([generateConsonant()])
		});
	}
}

export default alt.createStore(LetterStore);
