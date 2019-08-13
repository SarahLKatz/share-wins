import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  winCta: {
    margin: '7vh auto 0 auto'
  },
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

function AddWin({ saveWin }) {
  const { winCta, winForm, textField, winButton } = useStyles();
  const [win, setWin] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    saveWin(win);
    console.log('Win Inputted:', win);
    setWin('');
  };

  return (
    <Fragment>
      <h3 className={winCta}>Want To Share Your Win With The World?</h3>
      <form onSubmit={handleSubmit} className={winForm}>
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
    </Fragment>
  );
}

export default AddWin;
