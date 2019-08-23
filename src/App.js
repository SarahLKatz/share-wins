import React, { Component } from 'react';
import { WinCard, AddWin } from './components/';
import Button from '@material-ui/core/Button';
import * as firebase from 'firebase/app';
import * as auth from 'firebase/auth';
import 'firebase/database';
import './App.css';
import firebaseConfig from './config';
import { default as twitterLogo } from './img/sign-in-with-twitter-gray.png';

class App extends Component {
  constructor() {
    super();
    firebase.initializeApp(firebaseConfig);
    this.state = {
      wins: [],
      randomWinNum: 0,
      user: 'anonymous',
      twitter: '',
      picture: ''
    };
    this.changeWin = this.changeWin.bind(this);
    this.saveWin = this.saveWin.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  componentDidMount() {
    this.getWins();
    this.setState({
      randomWinNum: Math.floor(Math.random() * this.state.wins.length)
    });
  }

  getWins = () => {
    let ref = firebase.database().ref('/');
    ref.on('value', snapshot => {
      const value = snapshot.val();
      if (value) this.setState({ wins: Object.values(value) });
    });
  };

  saveWin = win => {
    firebase
      .database()
      .ref('/')
      .push({
        user: this.state.user,
        win
      });
  };

  signIn() {
    const provider = new firebase.auth.TwitterAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        console.log(result.user);
        const { displayName, photoURL } = result.user;
        const { username } = result.additionalUserInfo;
        this.setState({
          user: displayName,
          twitter: username,
          picture: photoURL
        });
      })
      .catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        alert(
          `${errorCode}: ${email} was not able to sign in through twitter: ${errorMessage}`
        );
      });
  }

  changeWin = () => {
    let newWinNum = this.state.randomWinNum;
    while (newWinNum === this.state.randomWinNum) {
      newWinNum = Math.floor(Math.random() * this.state.wins.length);
    }
    this.setState({ randomWinNum: newWinNum });
  };

  render() {
    const { wins, randomWinNum, twitter } = this.state;
    const randomWin = wins[randomWinNum];
    return (
      <div className="container">
        <WinCard win={randomWin} />
        <Button variant="contained" id="differentWin" onClick={this.changeWin}>
          Show A Different Win
        </Button>
        <div className="addWin">
          <h3 className="winCta">Want To Share Your Win With The World?</h3>
          {twitter ? (
            <AddWin saveWin={this.saveWin} twitter={twitter} />
          ) : (
            <div className="signIn">
              <button onClick={this.signIn} id="signInButton">
                <img src={twitterLogo} alt="Sign In With Twitter" />
              </button>
              <span>
                Users must be logged in via Twitter to post a win. This is to
                prevent bots from spamming us with fake wins. Don't worry, once
                you're signed in you'll have the option to post your secret
                anonymously if you so choose.
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
