import React,{useState} from 'react';
import Grid from "@material-ui/core/Grid";
import TitleComponent from "./TitleComponent/TitleComponent";
import LoginComponent from "../LoginComponent/LoginComponent";
import RegistrationComponent from "./RegistrationComponent/RegistrationComponent";
import ForgotPasswordComponent from "../ForgotPasswordComponent/ForgotPasswordComponent";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../logo.png";
import Footer from "../FooterComponent/Footer";


const useStyles = makeStyles({
  MainBox:{
	height:'100vh',
  },
  LeftSide:{
	  padding:'2rem'
  },
  image: {
    width: "100px",
    height: "40px",
    cursor: "pointer",
  },
  loginComponent:{
	backgroundColor:"#f2c700"
  }
});

const MainComponent = () => {
      const matches = useMediaQuery("(max-width:600px)");
	  const classes = useStyles();
      
	  {/* Toggle Between Login and Signup Component */}
	//  const [showLogin,handleShow]  = useState(true);
	  {/*   Possible values:-  'LOGIN','SIGNUP','FORGOTPASSWORD','RESETPASSWORD'  */}
	  let initialState = 'LOGIN';
	  let splitPath = window.location.pathname.split('/');
	  let loc = splitPath.indexOf('resetPassword');
	  let userId = splitPath[loc+1];
	  /* Redirect the user to reset page if the link contains userId */
	  if(userId){
		   initialState = 'RESETPASSWORD';
	   } 
	  
	  const [toShow,handleShow]  = useState(initialState);
	   //request for request passw
	 
	  return (
	  <>
        <Grid container className={classes.MainBox}  >
            <Grid
              item
			  sm={5}
              md={6}
			  className={classes.LeftSide} 
              style={
                matches
                  ? {
                      display: "none",
                    }
                  : null
              }
            >
			   <img
				  src={logo}
				  alt="logo"
				  xs={4}
				  onClick={() => (window.location.href = "/")}
				  className={classes.image}
				  style={
					matches
					  ? {
						  width: "116px",
						  height: "45px",
						}
					  : null
				  }
				/>
              <TitleComponent />
            </Grid>
            <Grid item xs={12} sm={7} md={6}   className={classes.loginComponent} >
				{(toShow === 'LOGIN')?<LoginComponent  handleShow={handleShow} />:null}
				{(toShow === 'SIGNUP')?<RegistrationComponent handleShow={handleShow}  />:null }				
				{(toShow === 'FORGOTPASSWORD')?<ForgotPasswordComponent  forgot={true} handleShow={handleShow}  />:null }				
			    {(toShow === 'RESETPASSWORD')?<ForgotPasswordComponent 	reset={true}  handleShow={handleShow}  />:null }
            </Grid>
         </Grid>
		 <Footer />
	</>
      );
};

export default MainComponent;