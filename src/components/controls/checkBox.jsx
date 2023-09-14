import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';


export default function ControlledCheckbox({onChange,checked}) {
  

  
  return (
    <Checkbox
      checked={checked}
      onChange={onChange}
      inputProps={{ 'aria-label': 'controlled' }}
      style={{color:"#fff"}}
    />
  );
}