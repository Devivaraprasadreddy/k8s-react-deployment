import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

// Components
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Educations from './components/Educations';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certification from './components/Certifactions'; // Check spelling in file too
import Contact from './components/Contact';

function App() {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Header />
      <main className="section-wrapper container">
        {[
          ['home', <Home />],
          ['about', <About />],
          ['summary', <Summary />],
          ['experience', <Experience />],
          ['educations', <Educations />],
          ['projects', <Projects />],
          ['skills', <Skills />],
          ['certification', <Certification />],
          ['contact', <Contact />],
        ].map(([id, Component], index) => (
          <motion.section
            id={id}
            className="section"
            key={id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            variants={fadeIn}
          >
            {Component}
          </motion.section>
        ))}
      </main>
    </>
  );
}

export default App;
