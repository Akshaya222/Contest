import React, {useState, useContext} from "react";
import Grid from "@material-ui/core/Grid";
import fb from "../../assets/images/fb.png";
import google from "../../assets/images/google.png";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import axios from "axios";
import {AuthContext} from "../../context/auth-context";
import { navigate } from "@reach/router";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Checkbox from '@material-ui/core/Checkbox';
import {Visibility,VisibilityOff} from '@material-ui/icons';
import clsx from "clsx";

import Slide from '@material-ui/core/Slide';
const useStyles = makeStyles({
  loginBox:{
	  backgroundColor:'#fefae6',
	  borderRadius:'25px',
	  height:'80vh',
	  marginTop:'10vh',
	  display:'flex',
	  justifyContent:'center',
	  width:'75%',
	  paddingLeft:'5%',
	  paddingRight:'5%'
  },
  Form:{
	width:'130%',
	marginTop:'0rem auto auto auto',
	display:'flex',
	flexDirection:'column',
	alignItems:'center',
	marginLeft:'-30px',
  },
   input: {
    padding: "10px 20px",
    border: "1px solid grey",
    borderRadius: "24px",
    marginTop: "0.5rem",
    fontWeight: "500",
    background: "#ddd",
    width: "100%",
	backgroundColor:'white',
	cursor:'pointer'
  },
  label: {
    fontSize: "15px",
    color: "#333",
	marginRight:'auto',
	marginTop:'1rem',
	fontWeight:'normal',
	display:'flex',
	justifyContent:'space-between',
	width:'100%'
  },
  submitButton: {
    width: "110%",
    height: "30px",
    background: "#f3c800",
    borderRadius: "30px",
    fontWeight: "normal",
    border: "none",
    cursor: "pointer",
	marginTop:'1rem',
	marginBottom:'1rem',
	padding:'20px',
	lineHeight:'1px',
	'&:hover':{
		 background: "black",
		 color:'#f3c800'
	}
  },
  social:{
	  display:'flex',
	  justifyContent:'space-around',
	  width:'100%',
	  marginTop:'0.5rem',
	  marginBottom:'3.5rem',
		color:'black'
  },
  fb:{
	  background:'#3a5998',
	  color:'white',
	  fontWeight:'900',
	  "&:hover": {
		color:'#3a5998'
	  }
  },
  google:{
	  background:'snow',
	  color:'#838383',
	   fontWeight:'900',
	  "&:hover": {
		color:'#838383'
	  }
  },
  error:{
	  borderColor:'red'
  },
  inputError:{
	  marginLeft:'auto',
	  color:'red',
	  fontWeight:'100'
  }
  
});

const LoginComponent = props => {
  const matches = useMediaQuery("(max-width:500px)");
  const classes = useStyles();
  const authContext = useContext(AuthContext);
  /* Required user details */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  /* If any error */
  const [error, setError] = useState(null);
  const [serverError, setServerError] = useState(null);
	
  /* For showing and hiding password */
  const [showPassword,setPasswordStyle] = useState(false);

	/*For Remember Me  */
  const [checked, setChecked] = useState(true);
  const handleChange = (event) => {
	setChecked(event.target.checked);
  };
  
  function checkInputs(){
	  let errors = {};
	  let Problem = false;
	  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
	  if(!email){
		  errors.email = 'Please Enter a  Email';
		  Problem = true;
	  }else{
		  if(!emailRegex.test(email)){
			 errors.email = 'Please Enter a Valid Email';
			  Problem = true;
		  }
	  }
	  
	  if(!password){
		  errors.password = 'Please Enter a Password';
		   Problem = true;
	  }
	  setError(errors);
	  return Problem;
  }
  

  /* On clicking login button */
  const loginHandler = e => {
        e.preventDefault();
        if(!checkInputs()){
                    authContext.turnOnLoader();
                    axios
                      .post(
                        `${authContext.baseUrl}/user/login`,
                        {
                          username: email,
                          password: password,
						  remember_me:checked
                        }
                      )
                      .then(function (response) {                   
						console.log(response.data);
                        localStorage.setItem(
                          "user",
                          JSON.stringify(response.data.data)
                        );
                        authContext.turnOffLoader();
					    navigate('/user/dashboard');					              
                      })
                      .catch(function (error) {                     
                        if(error.response && error.response.data){
							setServerError(error.response.data.message);
						}
						setError('Unable To Fetch')						
                        authContext.turnOffLoader();					
                      });
        }
  }
  
  //social login 
  function handleSocialLogin(type){
	  type = type.toLowerCase();
	  window.location.href = `/api/auth/${type}`;
		/* axios
		  .get(
			`${authContext.baseUrl}/auth/${type}`
		  )
		  .then(function (response) {
			console.log('success');
			authContext.turnOffLoader();
			window.location.href = "/upload";
		  })
		  .catch(function (error) {
			console.log(error.response);
			authContext.turnOffLoader();
			if(error && error.response ){
				 setError(error.response.data.message);
			}
				setError('Unable to Authorize')
		  }); */
  }
  
  let emailError,passwordError = ''
  if(error){
	  if(error.email) emailError = 'cardAnimate';
	  if(error.password) passwordError = 'cardAnimate';
  }
  
  return (
    <center >
      <Grid container  md={8}  className={classes.loginBox} style={{border:((error && (error.email || error.password ) || serverError) && !authContext.loader)?'4px solid red':'',zIndex:'6000',width:matches?'90%':'75%'}} >
		  <Grid item xsm={12} sm={8} >
			<h3 style={{color:'#f2c700',marginBottom:'0.5rem'}} >LOGIN</h3>
			<small style={{cursor:'pointer',fontSize:'1rem'}} >
				Create an account? 
				<span style={{color:'#f3c800',fontWeight:'300',marginLeft:'0.4rem',position:'relative',zIndex:'5000',cursor:'pointer'}} onClick={() => props.handleShow('SIGNUP')} >
						SIGN UP
				</span>
			</small>
			<br />
			<small style={{color:'red'}} >{serverError?serverError:null}</small>
			<Slide direction="up" in={true} >
             <form action="#" className={classes.Form}  style={{position:'relative',zIndex:'5000',marginLeft:matches?'-40px':null}} >
				<label
				  htmlFor="loginEmail"
				  className={classes.label}
				 
				>
				  <span  style={{transform:matches?'translateX(30px)':'translateX(-15px)'}} >Email</span>
				  <span className={classes.inputError} >
					{error?error.email:null}
				  </span>
				</label>
				<input
				  type="email"
				  id="loginEmail"
				  name="loginEmail"
				  placeholder="Enter Registered Email Address"
				  className={clsx(classes.input,emailError)}
				  style={{outline:'none',width:matches?"200px":null}}
				  value={email}
				  onChange={(e) => {setError(''); setServerError(''); setEmail(e.target.value);}}
				/>
				<label htmlFor="loginPassword" className={classes.label}>
				  <span style={{transform:matches?'translateX(30px)':'translateX(-15px)'}} >Password</span>
				  <span className={classes.inputError}  >
					{error?error.password:null}
				  </span>
				</label>
				<input
					  type={showPassword?'text':'password'}
					  id="loginPassword"
					  name="loginPassword"
					  placeholder="Enter your Password"
					  className={clsx(classes.input,passwordError)}
					   style={{outline:'none',width:matches?"200px":null}}
					  value={password}
					  onChange={(e) => {setError(''); setServerError(''); setPassword(e.target.value); }}
					/>
				 {showPassword?<Visibility onClick={() => setPasswordStyle(false)} style={{position:'absolute',top:'9.5rem',right:matches?'40px':'-7px'}} />:<VisibilityOff onClick={() => setPasswordStyle(true)}  style={{position:'absolute',top:'9.5rem',right:matches?'40px':'-7px'}} />}
				<span style={{whiteSpace:'nowrap',marginRight:'auto',marginLeft:'-1.5rem',display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%'}} >					 
						<div> 
						 <Checkbox
							checked={checked}
							onChange={handleChange}
							style={{color:'#f2c700',marginLeft:matches?'20px':null}}
							inputProps={{ 'aria-label': 'warning checkbox' }}
						  />
						  <small>Remember me</small>
						</div>
						<div style={{marginRight:'-2rem'}}>
						  <span style={{color:'#f3c800',fontWeight:'normal',marginLeft:'30px',fontSize:'0.8rem',cursor:'pointer',display:'inline-block'}} onClick={() => props.handleShow('FORGOTPASSWORD')}  >Forgot Password ? </span>	  				
						</div>
				</span>
				<input
					type="submit"
					value="LOGIN"
					className={classes.submitButton}
					 style={{outline:'none',width:matches?"250px":null}}
					onClick={loginHandler}
				  />
				  <p style={{width:'100%',borderTop:'2px solid #cfcdca',position:'relative'}} ><span style={{position:'absolute',top:'-0.6rem',backgroundColor:'#FEFAE6',width:'2rem',fontSize:'12px',marginLeft:'-15px'}} >OR</span></p>
				 <div  className={classes.social} >
					<Button  className={classes.fb}  onClick={() => handleSocialLogin('FACEBOOK')} variant="contained" style={{borderRadius:'20px',width:'8rem',fontSize:'0.7rem',fontWeight:'700',height:'2.5rem'}} ><span ><img src={fb} alt="fb" style={{width:'12px',height:'12px',marginRight:'0.3rem',marginTop:'0.3rem'}} /></span><span  >LOGIN</span></Button>
					<Button  className={classes.google}  onClick={() => handleSocialLogin('GOOGLE')} variant="contained" style={{border:'2px solid #b7b5af',borderRadius:'20px',width:'8rem',fontSize:'0.7rem',fontWeight:'700',height:'2.5rem'}} ><span><img alt="google" src={google} style={{width:'16px',marginRight:'0.1rem',display:'block',lineHeight:'10px'}} /></span>LOGIN</Button>
				 </div>
			 </form>
			 </Slide>
		  </Grid>
      </Grid>
    </center>
  );
};

export default LoginComponent;
