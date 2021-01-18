import React, {useContext, useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import "../../../assets/scss/RegistrationComponent.scss";
import {AuthContext} from "../../../context/auth-context";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import fb from "../../../assets/images/fb.png";
import google from "../../../assets/images/google.png";
import Button from "@material-ui/core/Button";
import Slide from '@material-ui/core/Slide';
import {Visibility,VisibilityOff} from '@material-ui/icons';
import clsx from "clsx";


const useStyles = makeStyles({
  loginBox:{
	  backgroundColor:'#fefae6',
	  borderRadius:'25px',
	  height:'87vh',
	  marginTop:'10vh',
	  display:'flex',
	  justifyContent:'center',
  },
  Form:{
	width:'140%',
	marginTop:'0rem auto auto auto',
	display:'flex',
	flexDirection:'column',
	alignItems:'center',
	marginLeft:'-40px'
  },
   input: {
    padding: "10px 20px",
    border: "1px solid grey",
    borderRadius: "24px",
    marginTop: "8px",
    fontWeight: "normal",
    background: "#ddd",
    width: "93%",
	backgroundColor:'white',
	cursor:'pointer'
  },
  label: {
    fontSize: "15px",
    color: "#333",
	marginRight:'auto',
	marginTop:'0.6rem',
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
	marginTop:'1.4rem',
	marginBottom:'0.5rem',
	padding:'20px',
	lineHeight:'1px',
	'&:hover':{
		 background: "black",
		 color:'white'
	}	
  },
  social:{
	  display:'flex',
	  justifyContent:'space-around',
	  width:'100%',
	  marginTop:'0.5rem',
	  marginBottom:'1rem'
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
  inputError:{
	  marginLeft:'auto',
	  color:'red',
	  fontWeight:'100'
  }
});

const RegistrationComponent =  props  => {
  const authContext = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
 // const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
 // const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [serverError, setServerError] = useState(null);
	
  
  const [success, setSuccess] = useState('');
  
  const [showPassword,setPasswordStyle] = useState(false);


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
	  if(!name){
		  errors.name = 'Please Enter Your Full Name';
		   Problem = true;
	  }
	  setError(errors);
	  return Problem;
  }

    const submitHandler = (e) => {
	   e.preventDefault();
      if(!checkInputs()) {
        authContext.turnOnLoader();
        axios
          .post(`${authContext.baseUrl}/user/register`, {
            username: email,
            name: name,
            password: password,
          })
          .then(function (response) {
            authContext.turnOffLoader();
            //console.log(response.data); 
			setError('');
			setSuccess('Email has been sent,please verify it ');
          })
          .catch(function (error) {
			 if(error.response && error.response.data){
				setServerError(error.response.data.message);
			}
			setError('Unable To Fetch')						
			authContext.turnOffLoader();
          });
      }
    };
	
    //const toggleRegistering = () => setRegistering(!registering);
   // const handlePassword = pass => setPassword(pass); 
   // const handleConfirmPassword = (pass) => setConfirmPassword(pass); 

//social login 
  function handleSocialLogin(type){
	  type = type.toLowerCase();
	  //authContext.turnOnLoader();
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

    const classes = useStyles();
	
	let emailError,passwordError,nameError;
	if(error){
	  if(error.email) emailError = 'cardAnimate';
	  if(error.password) passwordError = 'cardAnimate';
	  if(error.name) nameError = 'cardAnimate';
	}
	
      return (
   <center>
      <Grid item  xs={11} sm={11} md={8}  className={classes.loginBox} style={{border:((error && (error.email || error.password || error.name ) || serverError) && !authContext.loader)?'4px solid red':'',zIndex:'6000'}}  >
		  <Grid item  >
				<h3 style={{color:'#f2c700',marginBottom:'0.5rem'}} >SIGN UP</h3>
				<small style={{cursor:'pointer',fontSize:'1rem'}} >
					Already a User? 
					<span style={{color:'#f3c800',fontWeight:'normal',marginLeft:'0.4rem',zIndex:'5000',position:'relative'}} onClick={() => props.handleShow('LOGIN')} >
							LOGIN
					</span>
				</small>
				<br />
			<small style={{color:'red'}} >{serverError?serverError:null}</small>			
			<small style={{color:'green'}} >{success?success:null}</small>			
			<Slide direction="up" in={true} >
             <form action="#" className={classes.Form} style={{position:'relative',zIndex:'5000'}}  >
				 {/* Full Name */}
				<label
				  htmlFor="loginEmail"
				  className={classes.label}
				>
				  <span  >Full Name</span>
				  <span className={classes.inputError} >
					{error?error.name:null}
				  </span>
				</label>
				<input
				  type="text"
				  id="loginName"
				  name="loginName"
				  placeholder="Enter your name"
				  style={{outline:'none'}}
				  className={clsx(classes.input,nameError)}
				  value={name}
				  onChange={(e) => {setError(''); setServerError(''); setName(e.target.value)}}
				/>
				 {/* Email */}
				<label
				  htmlFor="loginEmail"
				  className={classes.label}
				>
				   <span   >Email</span>
				  <span className={classes.inputError} >
					{error?error.email:null}
				  </span>
				</label>
				<input
				  type="email"
				  id="loginEmail"
				  name="loginEmail"
				  placeholder="Your Email Address"
				  className={clsx(classes.input,emailError)}
				  style={{outline:'none'}}
				  value={email}
				  onChange={(e) => {setError(''); setServerError(''); setEmail(e.target.value);}}
				/>
				 {/* Password */}
				<label htmlFor="loginPassword" className={classes.label}>
				  <span  >Password</span>
				  <span className={classes.inputError} >
					{error?error.password:null}
				  </span>
				</label>
				<input
				  type={showPassword?'text':'password'}
				  id="loginPassword"
				  name="loginPassword"
				  placeholder="Must be at least 6 characters"
				  style={{outline:'none'}}
				  className={clsx(classes.input,passwordError)}
				  value={password}
				  onChange={(e) => {setError(''); setServerError('');  setPassword(e.target.value);}}
				/>
				 {showPassword?<Visibility onClick={() => setPasswordStyle(false)} style={{position:'absolute',top:'14rem',right:'-2px'}} />:<VisibilityOff onClick={() => setPasswordStyle(true)}  style={{position:'absolute',top:'14rem',right:'-2px'}} />}
				<input
					type="submit"
					value="CREATE  ACCOUNT"
					className={classes.submitButton}
					 style={{outline:'none'}}
					onClick={(e) => submitHandler(e)}
				  />
				  <p style={{width:'100%',borderTop:'2px solid #cfcdca',position:'relative',marginBottom:'0.5rem'}} ><span style={{position:'absolute',top:'-0.6rem',backgroundColor:'white',width:'2rem',fontSize:'12px',marginLeft:'-15px'}} >OR</span></p>
				  <div  className={classes.social} >
					<Button className={classes.fb} onClick={() => handleSocialLogin('FACEBOOK')} variant="contained"  style={{borderRadius:'20px',width:'8rem',fontSize:'0.7rem',fontWeight:'700',height:'2.5rem'}} ><span ><img src={fb} alt="fb" style={{width:'12px',height:'12px',marginRight:'0.3rem',marginTop:'0.3rem'}} /></span><span >SIGN UP</span></Button>
					<Button className={classes.google} onClick={() => handleSocialLogin('GOOGLE')} variant="contained" style={{border:'2px solid #b7b5af',borderRadius:'20px',width:'8rem',fontSize:'0.7rem',fontWeight:'700',height:'2.5rem'}} ><span><img src={google} alt="google" style={{width:'16px',marginRight:'0.1rem',display:'block',lineHeight:'10px'}} /></span>SIGN UP</Button>
				</div>
			 </form>
			</Slide>
		  </Grid>
      </Grid>
   </center>
	  )
};

export default RegistrationComponent;