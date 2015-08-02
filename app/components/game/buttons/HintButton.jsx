import React from 'react';

export default class HintButton extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <div className="gameButton" style={this.props.style}>Show hints!</div>;
	}
}
