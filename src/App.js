import React, { Component } from 'react';
import { WinCard, AddWin } from './components/';
import Button from '@material-ui/core/Button';
import * as firebase from 'firebase/app';
import 'firebase/database';
import './App.css';
import firebaseConfig from './config';

class App extends Component {
  constructor() {
    super();
    firebase.initializeApp(firebaseConfig);
    this.state = {
      wins: [],
      randomWinNum: 0,
      user: 'anonymous'
    };
    this.changeWin = this.changeWin.bind(this);
    this.saveWin = this.saveWin.bind(this);
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
      console.log(value);
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

  changeWin() {
    let newWinNum = this.state.randomWinNum;
    while (newWinNum === this.state.randomWinNum) {
      newWinNum = Math.floor(Math.random() * this.state.wins.length);
    }
    this.setState({ randomWinNum: newWinNum });
  }

  render() {
    const { wins, randomWinNum } = this.state;
    const randomWin = wins[randomWinNum];
    return (
      <div className="container">
        <WinCard win={randomWin} />
        <Button variant="contained" id="differentWin" onClick={this.changeWin}>
          Show A Different Win
        </Button>
        <AddWin saveWin={this.saveWin} />
      </div>
    );
  }
}

export default App;
