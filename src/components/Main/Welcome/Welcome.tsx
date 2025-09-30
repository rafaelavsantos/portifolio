import { Stack, Button, Box } from "@mui/material";
import Typography from '@mui/joy/Typography';
import foto from '../../../assets/foto.png';
import styled from 'styled-components';

const socialMedia = [
  "LinkedIn",
  "GitHub",
  "Download CV",
];

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
          {socialMedia.map((media) => (
            <Btn variant='contained' sx={{ borderRadius: '30px', px: 3, py: 1 }} key={media}>{media}</Btn>
          ))}
        </Stack>
      </Box>

      <Box component='img' src={foto} alt="Minha foto" sx={{ width: { xs: '100%', sm: 300, md: 400}, display: { xs: 'none', sm: 'block'}}}>
      </Box>
    </Box>

  )
}

