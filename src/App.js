import React, {useContext, useEffect} from "react";
import HomeComponent from  "./components/HomeComponent/HomeComponent";
import {Router} from "@reach/router";
import SuccessComponent from "./components/SuccessComponent/SuccessComponent";
import {AuthContext} from "./context/auth-context";
import { navigate } from "@reach/router";
import loader from "./assets/images/loader.gif";


const App = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    if(authContext.auth) navigate('/upload');
  },[authContext.auth]);
 /* const hideModalHandler = () => {

  }*/
  return (
    <div className="App">
      { authContext.loader && ( <img alt="loader" src={loader} style={{
        position: "absolute",
        width: "20vw",
        left: "40%",
        top: "45%",
        zIndex: 10000 
      }}
      />)}
      <Router>
        <HomeComponent path="/*" /> 
        <SuccessComponent path="/success" />
      </Router>
    </div>
  );
}

export default App;
