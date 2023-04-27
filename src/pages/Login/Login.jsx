import React, { useState } from "react";
import TextField from "@mui/material/TextField";
// import { TimePickerToolbar } from '@mui/x-date-pickers-pro';
import ClearIcon from "@mui/icons-material/Clear";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from "@mui/material/DialogTitle";

import InputLabel from "@mui/material/InputLabel";


const Login = () => {
  const [open, setOpen] = React.useState(false);
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  //   const [error,setError]=useState(false)
  //   const [errortxt,setErrorTxt]=useState("")

  //   const[users,setUsers]=useState([])

  //   const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  //   function isEmail(str) {
  //     return str.match(pattern);
  //   }
  // const handleSubmit=(e)=>{
  //   e.preventDefault()
  //   if(name ==="" || email==="" || password===""){
  //     setError(true)
  //     setErrorTxt("*Inputfield can't be blank")
  //   }else if(name.length<3){
  //      setError(true)
  //      setErrorTxt("*Name should be atlest 3 characters")
  //   }else if(isEmail(email) === null){
  //          setError(true)
  //          setErrorTxt("*Invalid email")
  //   }else if(password.length <6){
  //     setError(true)
  //     setErrorTxt("*Password should be atleast 6 characters")
  //   }else{
  //     setError(false)
  //     alert(`welcome ${name}  SignUp Successfull`)
  //     setName("")
  //     setEmail("")
  //     setPassword("")

  //     const userInfo={
  //       name : name,
  //       email : email,
  //       password : password
  //     }
  //     // setUsers(...userInfo)
  // //  console.log(users.push(userInfo))
  //  console.log(users)

  //   }
  // }

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
          <TwitterIcon sx={{ color: "blue" }} />
        </DialogActions>
        <DialogTitle sx={{ textAlign: "center" }}>
          Sign in to Twitter
        </DialogTitle>
        <DialogContent
          sx={{
            height:"auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Button
            sx={{
              height: "3rem",
              width: "15rem",
              marginTop: "0.5rem",
              padding: "0.5rem",
              borderRadius: "20px",
              textTransform:"none"
            }}
            variant="outlined"
          >
            <GoogleIcon />{" "}
            <span style={{ margin: "5px" }}>Sign in with Google</span>
          </Button>

          <Button
            sx={{
              height: "3rem",
              width: "15rem",
              marginTop: "0.5rem",
              padding: "0.5rem",
              borderRadius: "20px",
              textTransform:"none"
            }}
            variant="outlined"
          >
            <AppleIcon />{" "}
            <span style={{ margin: "5px" }}>Sign in with Apple</span>
          </Button>
              
          <TextField
            sx={{ marginTop: "1rem", padding: "0.5rem" , height: "1.5rem", 
            width: "15rem", borderRadius: "20px"
            }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            // onChange={(e) => setEmail(e.target.value)}
            // value={email}
          />

          <TextField
             sx={{ marginTop: "2rem", padding: "0.5rem" , height: "1.5rem",
             width: "15rem", borderRadius: "20px"
             }}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            // onChange={(e) => setPassword(e.target.value)}
            // value={password}
          />


          {/* { error ? <small style={{color:"red"}}>{errortxt}</small> : null  } */}
          {/* {error && <p>{error}</p>} */}
          <Button
            sx={{
              height: "3rem",
              width: "15rem",
              marginTop: ".5rem",
              padding: "0.5rem",
              borderRadius: "20px",
              backgroundColor: "black",
              textTransform:"none"
            }}
            variant="outlined"
            // onClick={handleSubmit}
          >
            Login
          </Button>

          <Button
            sx={{
              height: "3rem",
              width: "15rem",
              marginTop: ".5rem",
              padding: "0.5rem",
              borderRadius: "20px",
              textTransform:"none"
            }}
            variant="outlined"
            // onClick={handleSubmit}
          >
            Forgot password?
          </Button>
        </DialogContent>
      </Dialog>

      <Button variant="outlined" onClick={handleClickOpen}>
        SignUp
      </Button>
    </div>
  );
};

export default Login;
