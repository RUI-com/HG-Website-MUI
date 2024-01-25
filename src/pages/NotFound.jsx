import React from 'react'
import {Typography,Box,useTheme} from '@mui/material'


export default function NotFound() {
    const theme = useTheme()
  return (
    <Box sx={{display:{xs:'block',sm:'flex'}, p:'10px' ,alignItems:'center',textAlign:{xs:'left',sm:'center'}}}>
        <Typography variant="h1" color={theme.palette.warning.main} sx={{ fontSize:'40px'}} >Error 404 | </Typography>
        <Typography variant="h6" color={theme.palette.grey.main} sx={{ml:{xs:0,sm:'10px'} , fontSize:{xs:'16px',sm:'20px'},mt:{xs:'10px',sm:0}}} >this page is not found</Typography>
    </Box>
  )
}
