import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  winForm: {
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column'
  },
  radio: {
    display: 'flex row',
    justifyContent: 'space-around'
  },
  radioOption: {
    width: '30%',
    flex: 1
  },
  textField: {
    width: '30vw',
    marginBottom: '3vh'
  },
  winButton: {
    margin: '2vh auto'
  }
}));

function AddWin({ saveWin, twitter, user }) {
  const { winForm, textField, radio, radioOption, winButton } = useStyles();
  const [win, setWin] = useState('');
  const [postName, setPostName] = useState('anonymous');
  const handleChange = e => {
    setPostName(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    saveWin({ win, postName, isTwitter: postName === twitter });
    setWin('');
    setPostName('anonymous');
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
      <FormControl component="fieldset">
        <FormLabel component="legend">Share Your Win As...</FormLabel>
        <RadioGroup
          aria-label="Post As"
          name="postName"
          className={radio}
          value={postName}
          onChange={handleChange}
        >
          <FormControlLabel
            value="anonymous"
            control={<Radio />}
            label="anonymous"
            className={radioOption}
            default
          />
          <FormControlLabel
            value={twitter}
            control={<Radio />}
            label={twitter}
            className={radioOption}
          />
          <FormControlLabel
            value={user}
            control={<Radio />}
            label={user}
            className={radioOption}
          />
        </RadioGroup>
      </FormControl>
      <Button variant="contained" type="submit" className={winButton}>
        Share My Win
      </Button>
    </form>
  );
}

export default AddWin;
