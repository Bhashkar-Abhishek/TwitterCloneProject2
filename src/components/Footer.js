import  React ,{useState} from 'react';
import Box from '@mui/material/Box';

import Registration from "../pages/Registration/Registration"
import Login from "../pages/Login/Login"
import style from "./Footer.module.css"
export default function BoxSx() {
    
    return (
        <Box
            sx={{
                width: "100%",
                height: "8vh",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                backgroundColor: "rgb(29, 155, 240)",
                position: "fixed",
                bottom: 0,
                marginLeft:0,
                boxSizing: 'border-box',

                '@media (max-width: 768px)': {
                    width:"77%",
                  },
            }}
            
        >
            <div className={style.info}>

                <span>Don’t miss what’s happening</span>
                <p>People on Twitter are the first to know.</p>
            </div>

            <div className={style.button}>
                <div>
                <Login />
                </div>
                <div>
                <Registration />
                </div>
              
            </div>
        </Box>
    );
}