import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Footer from './components/footer/Footer'
import WorkShop from './components/workShop/WorkShop'
import Capstone from './components/workShop/Capstone'
import Sidebar from './components/sidebar/Sidebar'
import Certifications from './components/Certifications/Certifications'
import Mentorships from'./components/Mentorships/Mentorships'
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  const [scrollHeight, setScrollHeight] = useState(0);


  const handleScroll = () =>{
    const position = window.pageYOffset;
    setScrollHeight(position);
  }

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
  },[scrollHeight])
  
  return (
    <div className="App">
      <Sidebar/>

      <div className="container">
        <div className="component-container" id="about" style={{marginTop: "3rem"}}>
          <About/>
        </div>

        <div className="component-container" id="skills">
          <Skills/>
        </div>

        <div className="component-container" id="CapstoneProjects">
          <Capstone/>
        </div>
        
        <div className="component-container" id="PersonalProjects">
          <WorkShop/>
        </div>

        <div className="component-container" id="Certifications">
          <Certifications/>
        </div>

        <div className="component-container" id="Mentorships">
          <Mentorships/>
        </div>

      </div>

      <div className="container-fluid" id="contact">
        <Footer/>
      </div>
    </div>
  )
}

export default App
