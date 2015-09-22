import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as GameActions from 'actions/actions';
import { gameColours, letterColours } from 'libs/generateColours';
import choice from 'utils/choice';
import request from 'superagent';

import letterblocks from 'libs/letterblocks';
import Scoreboard from 'components/Scoreboard';
import Letterbank from 'components/Letterbank';
import WordGround from 'components/WordGround';
import AddLetter from 'components/AddLetter';
import GameButton from 'components/GameButton';

import 'styles/game.css';

function yay() {
  return 'yay';
}

class App extends Component {
  constructor(props) {
    super(props);

    this.addLetter = this.addLetter.bind(this);
    this.changeColours = this.changeColours.bind(this);
    this.addToWord = this.addToWord.bind(this);
    this.removeFromWord = this.removeFromWord.bind(this);
    this.finishWord = this.finishWord.bind(this);

    // Initialise the game colours
    this.changeColours();

    // Initialise with a set of generated letters.
    letterblocks(10).map(letter =>
      this.props.dispatch(GameActions.addLetter(letter))
    );
  }

  changeColours() {
    this.props.dispatch(GameActions.changeColours(
      gameColours(),
      letterColours(
        this.props.letters.bank.length +
        this.props.letters.word.length
      )
    ));
  }

  addLetter(type) {
    const letters = this.props.letters;
    this.props.dispatch(GameActions.addLetter({
      id: Math.max(...letters.bank.map(x => x.id).concat(letters.word.map(x => x.id))) + 1
      value: type === 'vowel' ? choice(['a', 'e', 'i', 'o', 'u']) : choice(['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']),
      colours: letterColours(1)[0]
    }));
  }

  addToWord(id) {
    this.props.dispatch(GameActions.addToWord(id));
  }

  removeFromWord(id) {
    this.props.dispatch(GameActions.removeFromWord(id));
  }

  finishWord() {
    let word = this.props.letters.word.map(letter => letter.value).join('');
    request
      .post('/api/valid')
      .send({ word })
      .end((err, res) => {
        console.log(res.text);
      });
  }

  render() {
    const { colours, letters, round, scores, dispatch } = this.props;
    const actions = bindActionCreators(GameActions, dispatch);

    return (
      <div className="game container">
        <Scoreboard round={round}
                    userScore={scores.user}
                    computerScore={scores.computer}
                    colours={colours.game} />

        <WordGround message="Make a word with the letters!"
                    letters={letters.word}
                    letterColours={colours.letters}
                    player="user"
                    colours={colours.game}
                    removeFromWord={this.removeFromWord} />

        <WordGround message="The computer's word will go here!"
                    letters={[]}
                    player="computer"
                    colours={colours.game} />
        <ul className="gameButtons">
          <GameButton text="I'm finished!"
                      event={this.finishWord}
                      colours={colours.game} />

          <AddLetter letterType="vowel"
                     addLetter={this.addLetter}
                     colours={colours.game} />

          <AddLetter letterType="consonant"
                     addLetter={this.addLetter}
                     colours={colours.game} />

          <GameButton text="Show hints!"
                      colours={colours.game} />

          <GameButton text="Change colours!"
                      event={this.changeColours}
                      colours={colours.game} />
        </ul>
        <Letterbank letterblocks={letters.bank}
                    addToWord={this.addToWord}
                    letterColours={colours.letters}
                    colours={colours.game} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    colours: state.colours,
    letters: state.letters,
    round: state.round,
    scores: state.scores
  };
}

export default connect(mapStateToProps)(App);
