import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as GameActions from 'actions/actions';

import letterblocks from 'libs/letterblocks';
import Letterbank from 'components/Letterbank';
import WordGround from 'components/WordGround';
import AddLetter from 'components/AddLetter';
import GameButton from 'components/GameButton';

function hello() {
  alert('boris!');
}

class App extends Component {
  render() {
    const { colours, letters, round, dispatch } = this.props;
    const actions = bindActionCreators(GameActions, dispatch);

    return (
      <div>
        <WordGround message="Make a word!" letters={[{value: 'A', id: 100}]} />
        <WordGround message="Computer word goes here!" letters={[]} />
        <GameButton text="I'm finished!" />
        <AddLetter letterType="vowel" addLetter={hello} />
        <AddLetter letterType="consonant" addLetter={hello} />
        <GameButton text="Show hints!" />
        <GameButton text="Show colours!" />
        <Letterbank letterblocks={letterblocks(10)} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    colours: state.colours,
    letters: state.letters,
    round: state.round
  };
}

export default connect(mapStateToProps)(App);
