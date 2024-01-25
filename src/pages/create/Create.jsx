import  './Create.css';
import React,{useState} from 'react';
import {TextField,InputAdornment, Box, Button} from '@mui/material'
import { ChevronRight } from "@mui/icons-material";
import {useNavigate} from 'react-router-dom'

const Create = () => {
  const [title,setTitle] = useState("");
  const [price,setPrice] = useState(0);
  const navigate =useNavigate();
  return (
    <Box
    
    autoComplete='off'
     sx={{ width: "380px" }} component="form">
       <TextField
        fullWidth={true}
        onChange={(eo)=>{
          setTitle(eo.target.value);
    
        }}
      
      label="Transaction Title"
      sx={{mt:'22px',display:'block'}}
      InputProps={{
        startAdornment: <InputAdornment position="start">👉</InputAdornment>,
      }}
      
    />
   
    <TextField
    fullWidth={true}
    onChange={(eo)=>{
      setPrice(Number(eo.target.value));

    }}
     
      label=" Amount"
      sx={{mt:'22px',display:'block'}}
      InputProps={{
        startAdornment: <InputAdornment position="start">$</InputAdornment>,
      }}
      
    />
    <Button onClick={() => {
      fetch('http://localhost:3100/mydata',{
        method:'POST',
        headers:{
          "Content-Type":'application/json'
        },
        body:JSON.stringify({title,price}),
      }).then(()=>{
        navigate('/')
      })

    }} sx={{ mt: "22px" }} variant="contained" className = 'btn' >
      Submit <ChevronRight />
    </Button>
    </Box>
   
    
   
  );
}

export default Create;
