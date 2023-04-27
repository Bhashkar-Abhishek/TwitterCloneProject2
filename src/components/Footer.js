import * as React from 'react';
import Box from '@mui/material/Box';
import Resgistration from "../pages/Registration/Registration"
import Login from "../pages/Login/Login"

export default function BoxSx() {
    return (
        <Box
            sx={{
                width: "100%",
                height: "10vh",
                backgroundColor: 'primary.dark',
                position:"fixed",
                bottom:0,
                '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                },
            }}
        >
         <Login/>
         <Resgistration/>
        </Box>
    );
}