import React, {Component} from 'react';
import {connect} from 'react-redux';

import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";
import {getSecretWord} from "./actions";


export class App extends Component {

  render() {
    return (
        <div className="container">
          <h1>Jotto</h1>
          <Congrats success={this.props.success}/>
          <GuessedWords guessedWords={this.props.guessedWords}/>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
 const {success, guessedWords, secretWord} = state;
 return {success, guessedWords, secretWord};
};

export default connect(mapStateToProps,{getSecretWord})(App);
