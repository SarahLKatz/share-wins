import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
  card: {
    width: '40vw',
    height: '40vh',
    maxWidth: 500,
    margin: '5vh auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: '1.5rem',
    textAlign: 'center'
  },
  text: {
    fontSize: '2rem',
    textAlign: 'center',
    margin: 'auto'
  }
});

function WinCard({ win }) {
  const { card, title, text } = useStyles();
  return (
    <Card className={card}>
      <h3 className={title}>Someone's Awesome Win:</h3>
      <span className={text}>{win}</span>
    </Card>
  );
}

export default WinCard;
