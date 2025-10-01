import { Box, Typography } from '@mui/material';
import webBrecho from '../../../assets/img/brecho/1.jpeg';
import loginSgl from '../../../assets/img/sgl/1.png';

export default function Projects() {
  return (
    <Box component='section' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', py: 4 }} id='projects'>
      <Typography variant="h2" sx={{ fontSize: '1.5em', fontWeight: 'bold', pb: 2 }}>Projetos</Typography>
      <Box component='section' sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'column', md: 'row' }, justifyContent: 'center', alignItems: 'center' }}>
        {/* Adicionar o efeito de carrosel nas imagens */}
        <Box component='img' src={webBrecho} alt="Tela Inicial do Sistema do Brechó" sx={{ width: { xs: '90%', sm: 500, md: 400 } }}>
        </Box>

        <Box component='img' src={loginSgl} alt="Tela Inicial do Sistema do SGL" sx={{ width: { xs: '90%', sm: 500, md: 400 } }}>
        </Box>
      </Box>
    </Box>
  )
}

