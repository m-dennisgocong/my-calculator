import { useState, useContext } from 'react';
import { FaGithub } from 'react-icons/fa';
import Clock from './components/Clock';
import Calculator from './components/Calculator/Calculator';
import {ThemeContext} from './Theme';
import './App.css'

function App() {

  const {theme, toggleTheme} = useContext(ThemeContext);
  const [slide, setSlide] = useState(theme === 'dark-theme' ? true:false);

  const handleChangeTheme = () => {
    setSlide(!slide);
    toggleTheme()
  }

  return (
    <div className={`App ${theme}`}>
    {/* clock + toggle theme + github logo*/}
      <header>
        <Clock/>
        <div className="switch-theme" onClick={handleChangeTheme}>
          <div style={!slide ? {transform : 'translateX(95%)'} : null} className='circle' onClick={handleChangeTheme}></div>
        </div>
        <FaGithub id='github-logo'/>
      </header>

    {/* Calculator */}
      <Calculator />

    </div>
  );
}

export default App
