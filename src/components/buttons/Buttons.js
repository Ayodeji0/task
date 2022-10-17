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

function Buttons() {
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
        {buttons}
      </ButtonGroup>
    
    </Box>
  );
  
}

export default Buttons