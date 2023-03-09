import React, {useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [mode, setMode] = useState('light')  //Initially dark mode disabled
  const [btnText, setBtnText] = useState('Go Dark')

  function toggleMode(){
    if(mode === 'light'){
      setMode('dark')
      setBtnText('Go Light')
      document.body.style.backgroundColor = 'black'
      showAlert('Dark mode has been enabled','success')
    }else{
      setMode('light')
      setBtnText('Go Dark')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled', 'success')
    }
  }

  const [alert, setAlert] = useState(null)

  function showAlert(message, type){
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }

  let host = process.env.REACT_APP_SERVER_URL

  return (
    <>
      <NoteState host={host} >
        <Router>
          <Navbar mode={mode} btnText={btnText} toggleMode={toggleMode} />
          <Alert alert={alert}/>
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home showAlert={showAlert}  mode={mode} />
              </Route>
              <Route exact path="/about">
                <About mode={mode} />
              </Route>
              <Route exact path="/login">
                <Login showAlert={showAlert} mode={mode} host={host} />
              </Route>
              <Route exact path="/signup">
                <Signup showAlert={showAlert} mode={mode} host={host} />
              </Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
