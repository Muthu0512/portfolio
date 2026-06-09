import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollView from "./components/ScrollView.jsx";
import Hero from "./pages/Hero.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  const [activeSection,setActiveSection]=useState("Home")

  const handleSectionEnter=(entry)=>{
    const id=entry.target.id
   

    if(id==="home") setActiveSection("Home")
    if(id==="about") setActiveSection("About")
    if(id==="skills") setActiveSection("Skills")
    if(id==="projects") setActiveSection("Projects")
    if(id==="contact") setActiveSection("Contact")
  }


  return (
    <div className="relative min-h-screen min-w-screen bg-black   text-white  overflow-hidden  ">
    
      <div className="absolute h-full w-full top-0 left-0" />
      <header className="fixed top-0 left-0 w-full z-50 ">
        <Navbar  active={activeSection} setActive={setActiveSection}/>
      </header>
      <main>
        
        <ScrollView id="home" onEnter={handleSectionEnter} >
          <Hero />
        </ScrollView>
        <ScrollView id="about" onEnter={handleSectionEnter} >
          <About />
        </ScrollView>

        <ScrollView id="skills" onEnter={handleSectionEnter}>
          <Skills />
        </ScrollView>

        <ScrollView id="projects" onEnter={handleSectionEnter}>
          <Projects />
        </ScrollView>
        
        <ScrollView id="contact" onEnter={handleSectionEnter}>
          <Contact />
        </ScrollView>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
