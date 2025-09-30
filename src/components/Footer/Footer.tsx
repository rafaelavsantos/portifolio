// import './Footer.css'

import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box component="section" sx={{backgroundColor: '#001B5E', color: '#fff', height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center'}}> 
      <Typography variant="subtitle2">&copy; 2025 Rafaela Virgens Santos</Typography>
    </Box>
  )
}

