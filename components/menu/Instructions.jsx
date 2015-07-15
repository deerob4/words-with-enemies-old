var React = require('react');

var Instructions = React.createClass({

	render: function() {
		var style = {
			color: this.props.colours.primary
		};
		return (
			<div style={style} className="instructions">
				<h2>How to Play</h2>
				<p>Read the manual, kiddo.</p>
			</div>
		);
	}

});

module.exports = Instructions;