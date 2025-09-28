import { Box, Typography } from "@mui/material"
import styled from "styled-components";

const TechChip = styled(Typography)`
  display: inline-block;
  background-color: #1976d2;
  color: #fff;
  border-radius: 20px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #115293;
  }
`;

export default function About() {
  return (
    <Box component="section" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '25px', borderBottom: '1px solid #ccc' }}>
      <Typography variant="h2" sx={{ fontSize: '1.5em', fontWeight: 'bold', pb: 2 }}>Sobre mim</Typography>

      <Typography variant="body1" sx={{ textAlign: 'center' }}>
        Sou uma Desenvolvedora Front-end, atualmente aprofundando meus conhecimentos em frontend com Vuetify. Busco construir aplicações modernas, escaláveis e bem estruturadas, aplicando boas práticas e explorando diferentes tecnologias. Tenho experiência em projetos pessoais, como sistemas de organização de leituras e gerenciamento de cuidados para pets, que me ajudam a aplicar na prática conceitos de CRUD, autenticação, banco de dados e integrações. Sou dedicada, organizada e tenho como meta me tornar uma desenvolvedora Full-Stack futuramente, unindo prática constante, projetos reais e atualização contínua. Além da programação, também estou investindo no estudo do inglês para expandir minhas oportunidades profissionais.
      </Typography>

      <Box component="section" sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 2, py: 4, justifyContent: 'center'  }}>
        <TechChip variant="button" gutterBottom sx={{ px: 2, py: 1}}>Vue.js</TechChip>
        <TechChip variant="button" gutterBottom sx={{ px: 2, py: 1}}>Quasar Framework</TechChip>
        <TechChip variant="button" gutterBottom sx={{ px: 2, py: 1}}>Pinia</TechChip>
        <TechChip variant="button" gutterBottom sx={{ px: 2, py: 1}}>Vuetify</TechChip>
        <TechChip variant="button" gutterBottom sx={{ px: 2, py: 1}}>React</TechChip>
        <TechChip variant="button" gutterBottom sx={{ px: 2, py: 1}}>React Native</TechChip>
        <TechChip variant="button" gutterBottom sx={{ px: 2, py: 1}}>Nest.js</TechChip>
        <TechChip variant="button" gutterBottom sx={{ px: 2, py: 1}}>Prisma ORM</TechChip>
        <TechChip variant="button" gutterBottom sx={{ px: 2, py: 1}}>PostgreSQL</TechChip>
      </Box>
    </Box>
  )
}

