import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// const useStyles = makeStyles({
//   card: {
//     width: '40vw',
//     height: '40vh',
//     maxWidth: 500,
//     margin: '5vh auto',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between'
//   },
//   title: {
//     fontSize: '1.5rem',
//     textAlign: 'center',
//   },
//   text: {
//     fontSize: '2rem',
//     textAlign: 'center',
//     margin: 'auto'
//   }
// });

function AddWin() {
  const [win, setWin] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    console.log('Win Inputted:', win);
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="win"
        label="win"
        value={win}
        onChange={e => setWin(e.target.value)}
        type="text"
        name="win"
        margin="normal"
        variant="outlined"
      />
      <Button type="submit">Add My Win</Button>
    </form>
  );
}

export default AddWin;
