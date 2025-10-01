import { Box, Button, Stack } from '@mui/material'
import styled from 'styled-components'

const ContainerHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #001B5E;
  padding: 0 25px;
`;

const BtnLogo = styled.h2`
  padding: 0.5em;
  transition: color 300ms;
  color: #fff;

  &:hover {
    color: #646cffaa;
    cursor: pointer;
  }
`;

export default function Header() {
  return (
    <ContainerHeader className='container-header'>
      <Box component='section'>
        <BtnLogo>Rafaela.</BtnLogo>
      </Box>
      
      <Stack spacing={2} direction="row" flexWrap="wrap" sx={{ py: 4, color: '#fff' }}>
        <Button href="#home" sx={{ color: '#fff' }}>Home</Button>
        <Button href="#about" sx={{ color: '#fff' }}>Sobre mim</Button>
        <Button href="#projects" sx={{ color: '#fff' }}>Projetos</Button>
      </Stack>
    </ContainerHeader>
  )
}

