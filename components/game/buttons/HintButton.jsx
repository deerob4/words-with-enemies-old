var React = require('react');

var HintButton = React.createClass({

	render: function() {
		return (
			<div className="gameButton" style={this.props.style}>Show hints!</div>
		);
	}

});

module.exports = HintButton;