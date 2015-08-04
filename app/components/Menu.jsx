import React from 'react';
import MenuButtons from './menu/MenuButtons';
import DifficultyButtons from './menu/DifficultyButtons';
import Instructions from './menu/Instructions';

import ColourStore from '../stores/ColourStore';
import ColourActions from '../actions/ColourActions';

import connect from '../decorators/connect';

@connect(ColourStore)
export default class Menu extends React.Component {
	constructor(props) {
		super(props);

		ColourActions.generate();
	}

	changeColours() {
		ColourActions.generate();
	}
	
	render() {
		let style = { color: this.props.colours.primary };
		return (
			<div className="menu">
				<div className="container">
					<Instructions colours={this.props.colours} />
					<div style={style} className="animated bounceInDown">
						<h1 onClick={this.changeColours}>Words With Enemies</h1>
						<p>Expand your vocabulary whilst boosting your ego!</p>
					</div>
					<MenuButtons colours={this.props.colours} />
					<DifficultyButtons colours={this.props.colours} />
				</div>
			</div>
		);
	}
}
