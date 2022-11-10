import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import Clock from './components/Clock';
import './App.css'

function App() {

  const [theme, setTheme] = useState(true);

  const handleChangeTheme = () => {
    setTheme(!theme);
  }
  return (
    <>
    {/* clock + toggle theme + github logo*/}
      <header>
        <Clock/>
        <div className="switch-theme" onClick={handleChangeTheme}>
          <div style={!theme ? {transform : 'translateX(100%)'} : null} className='circle' onClick={handleChangeTheme}></div>
        </div>
        <FaGithub id='github-logo'/>
      </header>

    {/* Calculator */}
    </>
  );
}

export default App
