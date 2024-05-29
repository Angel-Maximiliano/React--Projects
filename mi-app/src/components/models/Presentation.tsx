import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const AnimatedBox = styled(Box)({
  background: '-webkit-linear-gradient(to left, #8f94fb, #4e54c8)',
  width: '95%',
  height: '100vh',
  marginTop: '-85px',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '0 2rem',
});

const Circles = styled('ul')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  margin: 0,
  padding: 0,
  listStyle: 'none',
  
  '& li': {
    position: 'absolute',
    display: 'block',
    listStyle: 'none',
    width: '20px',
    height: '20px',
    background: 'linear-gradient(90deg, rgba(252, 142, 81, 0.3), rgba(250, 97, 249, 0.3))',
    animation: 'animate 25s linear infinite',
    bottom: '-150px',
  },

  '& li:nth-of-type(1)': {
    left: '25%',
    width: '80px',
    height: '80px',
    animationDelay: '0s',
  },
  '& li:nth-of-type(2)': {
    left: '10%',
    width: '20px',
    height: '20px',
    animationDelay: '2s',
    animationDuration: '12s',
  },
  '& li:nth-of-type(3)': {
    left: '70%',
    width: '20px',
    height: '20px',
    animationDelay: '4s',
  },
  '& li:nth-of-type(4)': {
    left: '40%',
    width: '60px',
    height: '60px',
    animationDelay: '0s',
    animationDuration: '18s',
  },
  '& li:nth-of-type(5)': {
    left: '65%',
    width: '20px',
    height: '20px',
    animationDelay: '0s',
  },
  '& li:nth-of-type(6)': {
    left: '75%',
    width: '110px',
    height: '110px',
    animationDelay: '3s',
  },
  '& li:nth-of-type(7)': {
    left: '35%',
    width: '150px',
    height: '150px',
    animationDelay: '7s',
  },
  '& li:nth-of-type(8)': {
    left: '50%',
    width: '25px',
    height: '25px',
    animationDelay: '15s',
    animationDuration: '45s',
  },
  '& li:nth-of-type(9)': {
    left: '20%',
    width: '15px',
    height: '15px',
    animationDelay: '2s',
    animationDuration: '35s',
  },
  '& li:nth-of-type(10)': {
    left: '85%',
    width: '150px',
    height: '150px',
    animationDelay: '0s',
    animationDuration: '11s',
  },
  
  '@keyframes animate': {
    '0%': {
      transform: 'translateY(0) rotate(0deg)',
      opacity: 1,
      borderRadius: 0,
    },
    '100%': {
      transform: 'translateY(-1000px) rotate(720deg)',
      opacity: 0,
      borderRadius: '50%',
    },
  },
});

const Presentation = () => {
  return (
    <AnimatedBox>
      <Typography
        variant="h1"
        sx={{
          color: 'white',
          fontSize: '50px',
          fontFamily: 'Krona One, sans-serif',
        }}
      >
        Nightshade
      </Typography>
      <Circles>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </Circles>
    </AnimatedBox>
  );
};

export default Presentation;
