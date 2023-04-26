import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import { TimePickerToolbar } from '@mui/x-date-pickers-pro';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle'

const Registration = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create your account</DialogTitle>
        <DialogContent>
          
        <div>
         <box
      component="form"
      sx={{
        // '& > :not(style)': { m: 1, width: '25ch' },
        width:'100%',
        magin:"20px",
        display : "flex",
        flexDirection:"column",
        border:'2px solid black',
      }}
      noValidate
      autoComplete="on"
    >
         <TextField id="outlined-basic" label="Name" variant="outlined" />
        
         <TextField id="outlined-basic" label="Email" variant="outlined" />
         <TextField id="outlined-basic" label="Phone" variant="outlined" />
         <TextField id="outlined-basic" label="Password" variant="outlined" />
         </box>
        </div>
         
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>SignUp</Button>
        </DialogActions>
      </Dialog>

      <Button variant="outlined" onClick={handleClickOpen}>
        SignUp
      </Button>
    </div>
  );
}

export default Registration