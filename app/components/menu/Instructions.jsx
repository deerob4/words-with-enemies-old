import React from 'react';

export default class Instructions extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let style = {
			color: this.props.colours.primary
		};
		return (
			<div style={style} className="instructions">
				<h2>How to Play</h2>
				<p>Read the manual, kiddo.</p>
			</div>
		);
	}
}
