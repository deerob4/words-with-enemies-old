import React from 'react';

export default class FinishedButton extends React.Component {
	render() {
		return <div className="gameButton" style={this.props.style}>I&#8217;m finished!</div>;
	}
}
