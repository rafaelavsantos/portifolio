import './App.css'
import Header from './components/Header/Header'
import Welcome from './components/Main/Welcome/Welcome'
import About from './components/Main/About/About'
import Projects from './components/Main/Projects/Projects'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <div>
        <Header />
        <Welcome />
        <About />
        <Projects />
        <Footer />
      </div>
    </>
  )
}

export default App
