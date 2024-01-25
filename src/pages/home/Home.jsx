import "./Home.css";
import React,{useEffect,useState} from "react";
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { Close } from "@mui/icons-material";

 

const Home = () => {

  const [mydata,setMyData]=useState([]);
 useEffect(()=>{
fetch('http://localhost:3100/mydata')
.then((response) => response.json())
.then((data) => setMyData(data));
 },[mydata])
//  const[totalprice,setTotalPrice] = useState(0);
let totalprice = 0;

  return (
  <Box>

    {mydata.map((item) => {
      totalprice += item.price;
      return(

        <Paper
        key={item.id}
        sx={{ position:'relative',width:'366px',display:'flex',justifyContent:'space-between',mt:'22px', pt:'27px',
        pb:'7px'}}>
            <Typography variant="h6" sx={{ml:'16px',fontSize:'1.3rem'}}>{item.title}</Typography>
            <Typography variant="h6"
            sx={{
              mr:'33px',
              fontWeight:500,
              fontSize:'1.4rem',
              opacity:'0.8',
      
            }}
            >${item.price}</Typography>
            <IconButton onClick={()=>{
              fetch(`http://localhost:3100/mydata/${item.id}`,{
                method:'DELETE'
              })
            }} sx={{position:'absolute',top:'0',right:'0'}}>
              <Close sx={{fontSize:'20px'}} />
              
            </IconButton>
            
          </Paper>
      )
    }
    )}
    <Typography variant="h6" textAlign='center' mt='50px' >
    👉 you Spend ${totalprice}
    </Typography>

    
    
  </Box>
  );
};

export default Home;
