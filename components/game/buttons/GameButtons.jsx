var React = require('react');
var FinishedButton = require('./FinishedButton.jsx');
var HintButton = require('./HintButton.jsx');
var VowelButton = require('./VowelButton.jsx');
var ConsonantButton = require('./ConsonantButton.jsx');
var ChangeColoursButton = require('./ChangeColoursButton.jsx');

var GameButtons = React.createClass({

	render: function() {
		var style = {
			backgroundColor: this.props.colours.primary,
			borderColor: this.props.colours.secondary,
			color: this.props.colours.secondary
		}
		return (
			<div className="gameButtons">
				<FinishedButton style={style} />
				<VowelButton style={style} />
				<ConsonantButton style={style} />
				<HintButton style={style} />
				<ChangeColoursButton style={style} />
			</div>
		);
	}

});

module.exports = GameButtons;