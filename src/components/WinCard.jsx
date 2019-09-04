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
  },
  twitter: {
    fontSize: '0.8rem',
    padding: '0.5vh 0.5vw'
  }
});

function WinCard({ win }) {
  const { card, title, text, twitter } = useStyles();
  return (
    <Card className={card}>
      <h3 className={title}>
        {win && win.postName && win.postName !== 'anonymous'
          ? `${win.postName}'s`
          : `Someone's`}{' '}
        Awesome Win:
      </h3>
      <span className={text}>{win && win.win ? win.win : win}</span>
      {win && win.isTwitter && (
        <span className={twitter}>
          Want to help @{win.postName} celebrate? Share your congratulations{' '}
          <a href={`https://twitter.com/${win.postName}`}>on Twitter!</a>
        </span>
      ) /*CSS ME!*/}
    </Card>
  );
}

export default WinCard;
