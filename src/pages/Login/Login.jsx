import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
// import { TimePickerToolbar } from '@mui/x-date-pickers-pro';
import ClearIcon from "@mui/icons-material/Clear";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import style from "./Login.module.css"
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from "@mui/material/DialogTitle";


const Login = () => {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userList, setUserList] = useState([])
  const [error, setError] = useState(false)
  const [errortxt, setErrorTxt] = useState("")

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"))
    setUserList(data)
  }, [])


  const handleSubmit=(e)=>{
    e.preventDefault()
    const userFind=userList.find((user)=>user.email===email&&user.password===password)
    if (userList===null){
      setError(true)
      setErrorTxt("Invalid credentials")
      return;
    }
    else if(!userFind){
      setError(true)
      setErrorTxt("User not found Register first")
    }
    else{
      setError(false)
      setErrorTxt("")
      alert(`Hello Login successful `)
    }
    
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
        PaperProps={{
          sx: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70%",
            width: "60%"
          }
        }}
        className={style.loginDialog}
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
            height: "auto",
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
              textTransform: "none"
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
              textTransform: "none"
            }}
            variant="outlined"
          >
            <AppleIcon />{" "}
            <span style={{ margin: "5px" }}>Sign in with Apple</span>
          </Button>
          <div>
            <hr /> or <hr />
          </div>
          <hr />
          <TextField
            sx={{
              marginTop: "1rem", padding: "0.5rem", height: "1.5rem",
              width: "15rem", borderRadius: "20px"
            }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          />

          <TextField
            sx={{
              marginTop: "2rem", padding: "0.5rem", height: "1.5rem",
              width: "15rem", borderRadius: "20px"
            }}
            id="outlined-basic"
            label="Password"
            variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          />


          { error ? <small style={{color:"red"}}>{errortxt}</small> : null  }
          <Button
            sx={{
              height: "3rem",
              width: "15rem",
              marginTop: ".5rem",
              padding: "0.5rem",
              borderRadius: "20px",
              backgroundColor: "black",
              textTransform: "none"
            }}
            variant="outlined"
          onClick={handleSubmit}
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
              textTransform: "none"
            }}
            variant="outlined"
          // onClick={handleSubmit}
          >
            Forgot password?
          </Button>
        </DialogContent>
      </Dialog>

      <Button variant="contained" sx={{ textTransform: "none" }} onClick={handleClickOpen}>
        LogIn
      </Button>
    </div>
  );
};
}
export default Login;