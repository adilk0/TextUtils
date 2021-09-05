import React, {useState} from 'react';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Navbar } from "./components/Navbar";
import { Texteditor } from './components/Texteditor';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

const App = () => {
  const [mode, setMode] = useState('light');

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      document.body.style.color = 'white';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }

  return (
    <>
      <Router>
        <Navbar title = "Text Manupulation" mode = {mode} toggleMode={toggleMode}/>
        <div className="container">
          <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <Texteditor mode = {mode} toggleMode={toggleMode} />
              </Route>
          </Switch>
        </div>
        <Footer mode = {mode} toggleMode={toggleMode}/>
      </Router>
    </>
  )
}

export default App
