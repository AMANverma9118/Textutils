import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textinput from './Components/Textinput';
import Proptype from 'prop-types'
import Alert from './Components/Alert';
import About from './Components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


let name = "Aman";
function App() {

  const [mode, setMode] = useState('light');
  const [changesMode, setchangesMode] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);
  const [myStyle, setMyStyle] = useState(
    {
        color: 'black',
        backgroundColor: 'white'
    });


  const ShowAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark')
      document.body.style.backgroundColor = "black"
      setchangesMode('Enable Light Mode')
      ShowAlert("Dark Mode Activated", "success")
      setMyStyle({
        color: 'White',
        backgroundColor: 'black'
    })

      
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      setchangesMode('Enable Dark Mode')
      ShowAlert("Light Mode Activated", "success")
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
        // border: "1px solid white"
    })
    }
  }


  return (
    //we can return only one tag but if we want to return multiple tag then we use jss fragment <> and </>
    //every thing writen in {} this is consider as a javascript
    //if we want to change some thing in component when we use diffirent thing then we use proops like tytle="Textutils" as a {proops.tytle}
    <>
      <Router>
        <Navbar tytle="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode} changesMode={changesMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path='/about' element={<About myStyle={myStyle}/>} />
            <Route exact path='/' element={<Textinput ShowAlert={ShowAlert} heading="Enter your text to analyze" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
