import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';

const buttons = [
    <Button key="one">Last Hour</Button>,
    <Button key="two">Today</Button>,
    <Button key="two">Yesterday</Button>,
    <Button key="three">Last 3 days</Button>,
  ];

function Buttons({label}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup size="small" aria-label="small button group">
      {label.map((item, index)=>{
                return(
                  <Button key={index.toString()}>Last Hour</Button>
                )
              })}
      </ButtonGroup>
    
    </Box>
  );
  
}

export default Buttons