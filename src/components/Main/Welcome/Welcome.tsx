import { Stack, Button, Box } from "@mui/material";
import Typography from '@mui/joy/Typography';
import foto from '../../../assets/foto.png';
import styled from 'styled-components';

const Btn = styled(Button)`
  background-color: #1976d2;
  color: #fff; 
  
  &:hover {
    background-color: #115293; 
  }
`;

export default function Welcome() {
  return (
    <Box component="section" sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: 4, p: 4, borderBottom: '1px solid #ccc' }}>
      <Box sx={{ maxWidth: 500 }}>
        <Typography level="h1">Olá, sou <Typography level='h1' sx={{ color: '#0046F8' }}>Rafaela Virgens</Typography></Typography>
        <Typography level='h4' sx={{ pt: 1, pb: 1, pr: 1}}>
          Desenvolvedora Front-end | Vue.js | React
        </Typography>

        <Stack spacing={2} direction="row" flexWrap="wrap">
          <Btn variant='contained' sx={{ borderRadius: '30px', px: 3, py: 1 }}>LinkedIn</Btn>
          <Btn variant='contained' sx={{ borderRadius: '30px', px: 3, py: 1 }}>GitHub</Btn>
          <Btn variant='contained' sx={{ borderRadius: '30px', px: 3, py: 1 }}>Download CV</Btn>
        </Stack>
      </Box>

      <Box component='img' src={foto} alt="Minha foto" sx={{ width: { xs: '100%', sm: 400, md: 500}}}>
      </Box>
    </Box>

  )
}

