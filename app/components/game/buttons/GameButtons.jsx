import React from 'react';

import FinishedButton from './FinishedButton';
import HintButton from './HintButton';
import VowelButton from './VowelButton';
import ConsonantButton from './ConsonantButton';
import ChangeColoursButton from './ChangeColoursButton';

export default class GameButtons extends React.Component {
	render() {
		let style = {
			backgroundColor: this.props.colours.primary,
			borderColor: this.props.colours.secondary,
			color: this.props.colours.secondary
		};

		return (
			<div className="gameButtons">
				<FinishedButton style={style} />
				<VowelButton style={style} />
				<ConsonantButton style={style} />
				<HintButton style={style} />
				<ChangeColoursButton randomColours={this.props.randomColours} style={style} />
			</div>
		);
	}
}
