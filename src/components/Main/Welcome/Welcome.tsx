// import './Welcome.css'

import { Button } from "@mui/material";

export default function Welcome() {
  return (
    <>
      <div>
        <h1>Olá, sou <span>Rafaela Virgens</span></h1>
        <p>Desenvolvedora Front-end | Vue.js | React</p>
      </div>
      <div className="nav">
      <Button variant="contained">LinkeIn</Button>
      <Button variant="contained">GitHub</Button>
      <Button variant="contained" title="ainda vou implementar">Download CV</Button>
      </div>
      <div>
        <img src="public/img/eu.jpeg" alt="Minha Foto" width={500}/>
      </div>
    </>
  )
}

