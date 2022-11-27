import { useState, useContext } from "react";
import { FaGithub } from 'react-icons/fa';
import Clock from './Clock';
import {ThemeContext} from '../Theme';
import './Header.css';

const Header = () => {

    const {theme, toggleTheme} = useContext(ThemeContext);
    const [slide, setSlide] = useState(theme === 'dark-theme' ? true:false);
  
    const handleChangeTheme = () => {
      setSlide(!slide);
      toggleTheme()
    }

    return(
        <header>
            <Clock/>
            <div className="switch-theme" onClick={handleChangeTheme}>
                <div style={!slide ? {transform : 'translateX(95%)'} : null} className='circle' onClick={handleChangeTheme}></div>
            </div>
            <FaGithub id='github-logo'/>
        </header>
    );
}
export default Header;