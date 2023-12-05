import "./index.css"
import './App.css';
import Header from "./components/Header";
import Skills from "./components/Skills";
import Profil from './components/Profil';
import Project from './components/Project';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

function App() {
  const savedDarkMode = localStorage.getItem("isDarkMode") === "true";
  const [isDarkMode, setIsDarkMode] = useState(savedDarkMode);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode)
  }, [isDarkMode]);

  return (
    <div>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Profil isDarkMode={isDarkMode} />
      <Project isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
