import './Welcome.css'

import { Button } from "@mui/material";
import Typography from '@mui/joy/Typography';

export default function Welcome() {
  return (
    <>
      <div className='welcome'>
        <div className="message">
          <Typography level="h1">Olá, sou <span>Rafaela Virgens</span></Typography>
          <h1></h1>
          <Typography>
            Desenvolvedora Front-end | Vue.js | React
          </Typography>
          
          <div className="buttons">
            <Button variant="contained">LinkeIn</Button>
            <Button variant="contained">GitHub</Button>
            <Button variant="contained" title="ainda vou implementar">Download CV</Button>
          </div>
        </div>

        <div>
          <img src="public/img/foto.png" alt="Minha Foto" width={500} />
        </div>
      </div>
    </>
  )
}

