import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  winForm: {
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column'
  },
  textField: {
    width: '30vw'
  },
  winButton: {
    margin: '2vh auto'
  }
}));

function AddWin({ saveWin, twitter }) {
  const { winForm, textField, winButton } = useStyles();
  const [win, setWin] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    saveWin(win);
    console.log('Win Inputted:', win);
    setWin('');
  };

  return (
    <form onSubmit={handleSubmit} className={winForm}>
      <span>Signed in as {twitter}</span>
      <TextField
        id="win"
        label="Share Your Win"
        className={textField}
        value={win}
        onChange={e => setWin(e.target.value)}
        type="text"
        name="win"
        margin="normal"
        variant="outlined"
      />
      <Button variant="contained" type="submit" className={winButton}>
        Share My Win
      </Button>
    </form>
  );
}

export default AddWin;
