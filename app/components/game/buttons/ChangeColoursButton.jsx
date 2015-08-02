import React from 'react';

export default class ChangeColoursButton extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="gameButton" 
					 onClick={this.props.randomColours} 
					 style={this.props.style}>
					 Change colours!
			</div>
		);
	}
}