var React = require('react');

var Logo = React.createClass({

	render: function() {
		var style = {
			color: this.props.colours.primary
		}
		return (
			<div style={style} className="animated bounceInDown">
				<h1>Words With Enemies</h1>
				<p>Expand your vocabulary whilst boosting your ego!</p>
			</div>
		);
	}

});

module.exports = Logo;