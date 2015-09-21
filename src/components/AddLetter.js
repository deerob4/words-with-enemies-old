import React, { Component, PropTypes } from 'react';
import 'styles/gameButton.css';

class AddLetter extends Component {
  constructor(props) {
    super(props);

    this.addLetter = this.addLetter.bind(this);

    this.state = {
      lettersLeft: this.props.maxLetters
    };
  }

  static propTypes = {
    maxLetters: PropTypes.number,
    addLetter: PropTypes.func.isRequired,
    letterType: PropTypes.string.isRequired
  }

  static defaultProps = {
    maxLetters: 5
  }

  addLetter() {
    if (this.state.lettersLeft) {
      this.props.addLetter(this.props.letterType);
      this.setState({ lettersLeft: this.state.lettersLeft - 1 });
    }
  }

  render() {
    let style = {
      backgroundColor: this.props.colours.primary,
      borderColor: this.props.colours.secondary,
      color: this.props.colours.secondary
    };

    return (
      <div onClick={this.addLetter}
           style={style}
           className="gameButton">
           Add {this.props.letterType}!
      </div>
    );
  }
}

export default AddLetter;
