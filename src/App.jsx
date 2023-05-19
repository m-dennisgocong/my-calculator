import { useContext } from 'react';
import Calculator from './components/Calculator/Calculator';
import Header from './components/Header';
import {ThemeContext} from './Theme';
import './App.css'

function App() {

  const {theme} = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <Header/>
      <Calculator />
      <footer>
        Created by <a href="https://github.com/m-dennisgocong">Dennis Goc-ong</a>
      </footer>
    </div>
  );
}

export default App
