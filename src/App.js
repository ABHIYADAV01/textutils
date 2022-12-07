import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import React from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "black";
      showAlert("Dark Mode Enabled", "Success");
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light Mode Enabled", "Success");
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
        <BrowserRouter>
        <Navbar
          mainText="TextUtils"
          info="About-project"
          toggleMode={toggleMode}
          mode={mode}
        />
        <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<div className="container"><Text
                heading="Text Analyser"
                showAlert={showAlert}
                mode={mode}
                myText="Enter Your Text Here"
              /></div>} />
                <Route path="/about" element={ <About />} />
      </Routes>
    </BrowserRouter>
          
       
        
          
       
    </>
  );
}

export default App;
