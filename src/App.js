import React, { Component } from 'react';
import { WinCard, AddWin } from './components/';
import Button from '@material-ui/core/Button';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      wins: [],
      randomWinNum: 0
    };
    this.changeWin = this.changeWin.bind(this);
  }

  componentDidMount() {
    const wins = [
      'I ate breakfast',
      'I got a promotion',
      'I starred in my school play'
    ];
    this.setState({
      wins,
      randomWinNum: Math.floor(Math.random() * this.state.wins.length)
    });
  }

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
        <AddWin />
      </div>
    );
  }
}

export default App;
