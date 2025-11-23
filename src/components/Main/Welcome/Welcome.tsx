import { Stack, Box, Link } from "@mui/material";
import Typography from '@mui/joy/Typography';
import foto from '../../../assets/foto.png';
import styled from 'styled-components';

const socialMedia = [
  { name: "LinkedIn", link: "https://www.linkedin.com/in/rafaelasantoss/" },
  { name: "GitHub", link: "https://github.com/rafaelavsantos" }
];

const CustomLink = styled(Link)`
  background-color: #1976d2;
  color: #fff; 
  transition: all 0.3s ease;
  font-weight: bold;
  
  &:hover {
    background-color: #115293; 
    color: #fff;
  }
`;

export default function Welcome() {
  return (
    <Box component="section" sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: 4, p: 4, borderBottom: '1px solid #ccc' }} id="home">
      <Box sx={{ maxWidth: 500 }}>
        <Typography level="h1">Olá, sou <Typography level='h1' sx={{ color: '#0046F8' }}>Rafaela Virgens</Typography></Typography>
        <Typography level='h4' sx={{ pt: 1, pb: 1, pr: 1 }}>
          Desenvolvedora Front-end | Vue.js | React
        </Typography>

        <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
          {socialMedia.map((media) => (
            <CustomLink
              href={media.link}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              color="white"
              sx={{ borderRadius: '30px', px: 3, py: 1 }}
            >
              {media.name}
            </CustomLink>
          ))}
        </Stack>
      </Box>

      <Box component='img' src={foto} alt="Minha foto" sx={{ width: { xs: '100%', sm: 300, md: 400 }, display: { xs: 'none', sm: 'block' } }}>
      </Box>
    </Box>

  )
}

