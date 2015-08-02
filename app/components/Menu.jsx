import React from 'react';
import MenuButtons from './menu/MenuButtons';
import DifficultyButtons from './menu/DifficultyButtons';
import Instructions from './menu/Instructions';

import { generateGameColours } from '../libs/generateColours.js';

export default class Menu extends React.Component {
	constructor() {
		super();

		console.log(generateGameColours)

		this.state = {
			colours: generateGameColours()
		}
	}
	render() {
		let style = { color: this.state.colours.primary };
		return (
			<div className="menu">
				<div className="container">
					<Instructions colours={this.state.colours} />
					<div style={style} className="animated bounceInDown">
						<h1>Words With Enemies</h1>
						<p>Expand your vocabulary whilst boosting your ego!</p>
					</div>
					<MenuButtons colours={this.state.colours} />
					<DifficultyButtons colours={this.state.colours} />
				</div>
			</div>
		);
	}
}
