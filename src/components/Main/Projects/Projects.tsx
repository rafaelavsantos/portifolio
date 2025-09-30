import { Box, Typography } from '@mui/material';
import webBrecho from '../../../assets/img/brecho/1.jpeg';
import loginSgl from '../../../assets/img/sgl/1.png';

export default function Projects() {
  return (
    <Box component='section' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', py: 4  }}>
      <Typography variant="h2" sx={{ fontSize: '1.5em', fontWeight: 'bold', pb: 2 }}>Projetos</Typography>
      <Box component='section' sx={{display: 'flex', gap: 2}}>
        {/* Adicionar o efeito de carrosel nas imagens */}
        <img src={webBrecho} alt="Tela Inicial do Sistema do Brechó" width={500} />
        <img src={loginSgl} alt="Tela Inicial do Sistema do SGL" width={500} />
      </Box>
    </Box>
  )
}

