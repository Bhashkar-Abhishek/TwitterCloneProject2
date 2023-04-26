import React, { useState } from "react";
import TextField from "@mui/material/TextField";
// import { TimePickerToolbar } from '@mui/x-date-pickers-pro';
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from "@mui/material/DialogTitle";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { months } from "./Data";
const Registration = () => {
  const [open, setOpen] = React.useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error,setError]=useState(false)
  const [errortxt,setErrorTxt]=useState("")

  const[users,setUsers]=useState([])

  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  function isEmail(str) {
    return str.match(pattern);
  }
const handleSubmit=(e)=>{
  e.preventDefault()
  if(name ==="" || email==="" || password===""){
    setError(true)
    setErrorTxt("*Inputfield can't be blank")
  }else if(name.length<3){
     setError(true)
     setErrorTxt("*Name should be atlest 3 characters")
  }else if(isEmail(email) === null){
         setError(true)
         setErrorTxt("*Invalid email")
  }else if(password.length <6){
    setError(true)
    setErrorTxt("*Password should be atleast 6 characters")
  }else{
    setError(false)
    alert(`welcome ${name}  SignUp Successfull`)
    setName("")
    setEmail("")
    setPassword("")

    const userInfo={
      name : name,
      email : email,
      password : password
    }
    // setUsers(...userInfo)
//  console.log(users.push(userInfo))
 console.log(users)

  }
}


  let dates = Array(31)
    .fill()
    .map((_, i) => i + 1);

  const currentYear = new Date().getFullYear();
  const years = Array(120)
    .fill()
    .map((_, i) => currentYear - i);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <DialogActions>
          <ClearIcon
            onClick={handleClose}
            sx={{ marginRight: "20rem", cursor: "pointer" }}
          />
        </DialogActions>
        <DialogTitle sx={{ textAlign: "center" }}>
          Create your account
        </DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <TextField
            sx={{ marginTop: "1rem", padding: "0.5rem" }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <TextField
            sx={{ marginTop: "1rem", padding: "0.5rem" }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          {/* <TextField
             sx={{ marginTop: "1rem" ,padding:"0.5rem"}}
            id="outlined-basic"
            label="Phone"
            variant="outlined"
          /> */}

          <TextField
            sx={{ marginTop: "1rem", padding: "0.5rem" }}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <div>
            <div>
              <InputLabel id="demo-simple-select-label">DAY</InputLabel>
              <Select
                // value={Day}
                label="Day"
                // onChange={handleChange}
              >
                {dates.map((date, index) => {
                  return <MenuItem 
                  key ={Math.random()*10000}
                  value={date}>{date}</MenuItem>;
                })}
              </Select>
            </div>
            <div>
              <InputLabel id="demo-simple-select-label">MONTH</InputLabel>
              <Select
                sx={{ display: "flex" }}
                // value={Day}
                label="Month"
                // onChange={handleChange}
              >
                {months.map((month, index) => {
                  return <MenuItem 
                  key ={Math.random()*10000} value={index}>{month}</MenuItem>;
                })}
              </Select>
            </div>

            <div>
              <InputLabel id="demo-simple-select-label">YEAR</InputLabel>
              <Select
                // value={Day}
                label="year"
                // onChange={handleChange}
              >
                {years.map((year, index) => {
                  return <MenuItem  key ={Math.random()*10000} value={year}>{year}</MenuItem>;
                })}
              </Select>
            </div>
          </div>

             { error ? <small style={{color:"red"}}>{errortxt}</small> : null  }
             {/* {error && <p>{error}</p>} */}
          <Button
            sx={{ marginTop: "1rem", padding: "0.5rem" }}
            variant="contained"
            onClick={handleSubmit}
          >
            SignUp
          </Button>
        </DialogContent>
      </Dialog>

      <Button variant="outlined" onClick={handleClickOpen}>
        SignUp
      </Button>
    </div>
  );
};

export default Registration;
