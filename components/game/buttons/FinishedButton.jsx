var React = require('react');

var FinishedButton = React.createClass({

	render: function() {
		return (
			<div className="gameButton" style={this.props.style}>I&#8217;m finished!</div>
		);
	}

});

module.exports = FinishedButton;