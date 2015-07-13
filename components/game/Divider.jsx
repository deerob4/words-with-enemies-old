var React = require('react');

var Divider = React.createClass({
	getInitialState: function() {
		return {
			colour: ''
		};
	},

	componentDidMount: function() {
		console.log(this.props)
		this.setState({
			colour: this.props.colour 
		});
	},

	render: function() {
		var style = {
			backgroundColor: this.state.colour
		};
		return (
			<div style={style} className="divider" />
		);
	}

});

module.exports = Divider;