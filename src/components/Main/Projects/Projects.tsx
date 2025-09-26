// import './Projects.css'
import webBrecho from '../../../assets/img/brecho/1.jpeg';
import loginSgl from '../../../assets/img/sgl/1.png';

export default function Projects() {
  return (
    <>
      <div>
        <h2>Projetos</h2>
      </div>
      <div className="images">
        <img src={webBrecho} alt="Tela Inicial do Sistema do Brechó" width={500}/>
        <img src={loginSgl} alt="Tela Inicial do Sistema do SGL" width={500} />
      </div>
    </>
  )
}

