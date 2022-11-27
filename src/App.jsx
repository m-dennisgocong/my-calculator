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
    </div>
  );
}

export default App
