import React,{useState,useContext} from 'react';
import {Grid,Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Slide from '@material-ui/core/Slide';
import {Visibility,VisibilityOff,ArrowBack} from '@material-ui/icons';
import {AuthContext} from "../../context/auth-context";
import axios from "axios";
import { useNavigate } from "@reach/router"
import clsx from "clsx";
import './forgetpassword.css';

const useStyles = makeStyles({
  loginBox:{
	  backgroundColor:'#fefae6',
	  borderRadius:'25px',
	  marginTop:'10vh',
	  display:'flex',
	  justifyContent:'center',
	   height:'70vh',
	   paddingLeft:'20px',
	  paddingRight:'20px'
  },
  Form:{
	width:'70%',
	maxWidth:'500px',
	marginTop:'0rem auto auto auto',
	display:'flex',
	flexDirection:'column',
	alignItems:'center',
	marginLeft:'-20px'
  },
   input: {
    padding: "10px 20px",
    border: "1px solid grey",
    borderRadius: "24px",
    marginTop: "0.5rem",
    fontWeight: "400",
    background: "#ddd",
    width: "100%",
	backgroundColor:'white',
	cursor:'pointer'
  },
  label: {
    fontSize: "13px",
    color: "#333",
	marginRight:'auto',
	marginTop:'1rem',
	marginLeft:'-10px',
	fontWeight:'bold',
	display:'flex',
	justifyContent:'space-between',
	width:'100%'
  },
  submitButton: {
    width: "115%",
    height: "30px",
    background: "#f3c800",
    borderRadius: "30px",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
	fontSize:'0.7rem',
	marginTop:'2rem',
	marginBottom:'1rem',
	padding:'20px',
	lineHeight:'1px',
  },
  inputError:{
	  marginLeft:'auto',
	  color:'red',
	  fontWeight:'100'
  }
});

const ForgotPasswordComponent = props => {

	const authContext = useContext(AuthContext);

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(false);
    const [serverError, setServerError] = useState(null);
	
  
    const [msg, setMsg] = useState('');
	
	 /* For showing and hiding password */
  const [showPassword,setPasswordStyle] = useState(false);
  const [showConfirmPassword,setConfirmPasswordStyle] = useState(false);

  
  function handleResetPassword(e){
	  e.preventDefault();
	  let myError = {};
	  if(!password || !confirmPassword || password !== confirmPassword ){
		  if(!password){
			  myError.password = 'Please Enter the Password';
		  }
		  if(!confirmPassword){
			  myError.confirmPassword = 'Please Enter the Confirm Password';
		  }
		  if(confirmPassword !== password){
			  myError.password = 'Passwords do not match';
			  myError.confirmPassword = 'Passwords do not match';
		  }
		  setError(myError);
	  }else{
		  authContext.turnOnLoader();
		  let splitPath = window.location.pathname.split('/');
			let loc = splitPath.indexOf('resetPassword');
			let userId = splitPath[loc+1];
			 axios
			   .post(
					`${authContext.baseUrl}/resetPassword/${userId}`,
					{
					  new_password: password,
					  confirm_password: confirmPassword
					}
				  )
				 .then(function (response) {
                    //console.log(response.data);
					authContext.turnOffLoader();
					setError('');
					setPasswordStyle(false);
					setConfirmPasswordStyle(false);
					setMsg('LOGIN');
				  })
				  .catch(function (error) {
					if(error.response && error.response.data){
						setServerError(error.response.data.message);
					}
					setError('Unable To Fetch')						
					authContext.turnOffLoader();
				  })
	  }
	  
	  //setMsg('LOGIN');
  }
  
  //for sending server request to change password will send email to user
   function handleResetLink(e){
	   e.preventDefault();
	   let proceed = true;
	   let myError = {};
	    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
	   
	     if(!email){
			  myError.email = 'Please Enter a  Email';
			  proceed = false;
		 }else{
			  if(!emailRegex.test(email)){
				  myError.email = 'Please Enter a Valid Email';
				  proceed = false;
			  }
		  }
	   
		if(!proceed){
			setError(myError);
		}else{
			//write code to verify from backend then
			//props.handleShow('RESETPASSWORD');
			//setSend(true);
			authContext.turnOnLoader();
			 axios
			   .post(
					`${authContext.baseUrl}/forgotPassword`,
					{
					  username: email
					}
				  )
				 .then(function (response) {
                    console.log(response.data);
					authContext.turnOffLoader();
					setMsg('EMAIL_SENT');
				  })
				  .catch(function (error) {
					console.log(error.response);
					authContext.turnOffLoader();
					if(error && error.response ){
						 setServerError(error.response.data.message);
					}
						setError('Unable to Fetch')
				  })
	   }
   }
  
 let emailError,passwordError,confirmPasswordError = ''
  if(error){
	  if(error.email) emailError = 'cardAnimate';
	  if(error.password) passwordError = 'cardAnimate';
	  if(error.confirmPassword) confirmPasswordError = 'cardAnimate';
  }

const classes = useStyles();

return (
    <center >
      <Grid item xs={11}  sm={11} md={8}  className={classes.loginBox} style={{border:((error && (error.email || error.password || error.confirmPassword || error ) ) || serverError)?'4px solid red':''}} >
		 <Grid item style={{width:'100%'}} >
			
			{/* Back Button For Forgot/Reset Scree */}
			<div style={{width:'100%',marginLeft:'-3rem',justifyContent:'flex-start',display:'flex'}}>
			   {(props.forgot)?<Button onClick={() => { navigate('/', { replace: true }); props.handleShow('LOGIN');  }} style={{color:'#f2c700',display:'flex',zIndex:'800'}} ><ArrowBack />Back</Button>:null}
			   {(props.reset)?<Button onClick={() => { navigate('/', { replace: true }); props.handleShow('FORGOTPASSWORD'); }} style={{color:'#f2c700',margin:'0.5rem auto 0 0.1rem',display:'flex',cursor:'pointer',zIndex:'800'}}  ><ArrowBack />Back</Button>:null}
			</div>
			
			
			{/* Title for Forgot/Reset */}
		   {(props.forgot)?<h3 style={{color:'#f2c700',marginTop:'3.5rem',marginBottom:'0.5rem'}} >Forgot Password ?</h3>:null}
		   {(props.reset)?<h3 style={{color:'#f2c700',marginTop:'2rem',marginBottom:'0.5rem'}} >Reset your Password </h3>:null}
				<br />
				
				{/* Sliding Form */}
		 <small style={{color:'red'}} >{serverError?serverError:null}</small>						
		 <Slide direction="up" in={true} >
            <form action="#" className={classes.Form}  style={{position:'relative'}} >
		    {/* For Forget Password Screen show only email field */}
				{(props.forgot)?<>
					<label
					  htmlFor="loginEmail"
					  className={classes.label}
					>
					  <span  >Registered Email</span>
					  <span className={classes.inputError} >
						{error?error.email:null}
					  </span>
					</label>
					<input
					  type="email"
					  id="loginEmail"
					  name="loginEmail"
					  placeholder="Enter Registered Email Address"
					   style={{outline:'none'}}
					  className={clsx(classes.input,emailError)}
					  value={email}
					  onChange={(e) => {setError(''); setEmail(e.target.value);}}
					/>
				</>:null}
			{/* For Reset Password Screen show  password and confirm password field */}
			{(props.reset)?<>
				{/* Password Field */}
			    <label htmlFor="createPassword" className={classes.label}>
				  <span  >Create Password</span>
				  <span className={classes.inputError} >
					{error?error.password:null}
				  </span>
				</label>
				<div style={{position:'relative',width:'100%',marginLeft:'-20px'}}>
					<input
						  type={showPassword?'text':'password'}
						  id="createPassword"
						  name="createPassword"
						  placeholder="Must be at least 6 characters"
						 className={clsx(classes.input,passwordError)}
						  style={{outline:'none'}}
						  value={password}
						  onChange={(e) => {setError('');  setPassword(e.target.value); }}
						/>
					 {showPassword?<Visibility onClick={() => setPasswordStyle(false)} style={{position:'absolute',top:'1rem',right:'-30px'}} />:<VisibilityOff onClick={() => setPasswordStyle(true)}  style={{position:'absolute',top:'1rem',right:'-30px'}} />}
				 </div>
				 
				 
				 {/* Confirm Password Field */}
					<label htmlFor="retypePassword" className={classes.label}>
						  <span  >Retype Password</span>
						  <span className={classes.inputError} >
							{error?error.confirmPassword:null}
						  </span>
					</label>
					<div style={{position:'relative',width:'100%',marginLeft:'-20px'}}>
						<input
							  type={showConfirmPassword?'text':'password'}
							  id="retypePassword"
							  name="retypePassword"
							  placeholder="Must be at least 6 charachters"
							  className={clsx(classes.input,confirmPasswordError)}
							  value={confirmPassword}
							   style={{outline:'none'}}
							  onChange={(e) => {setError('');  setConfirmPassword(e.target.value); }}
							/>
					 {showConfirmPassword?<Visibility onClick={() => setConfirmPasswordStyle(false)} style={{position:'absolute',top:'1rem',right:'-30px'}} />:<VisibilityOff onClick={() => setConfirmPasswordStyle(true)}  style={{position:'absolute',top:'1rem',right:'-30px'}} />}
					</div>
				 </>:null}	 
				 
				 
				 {/* Buttons  */}
				 
				  {/* Button to show on Reset PASSWORD Screen */}
				  {(props.reset && msg !== 'LOGIN')?<input
					type="submit"
					value="RESET PASSWORD"
					className={classes.submitButton}
					 style={{outline:'none',marginLeft:'1.5rem',}}
					onClick={(e) => handleResetPassword(e)}
				  />:null}
				  
				  {/* Button to Redirect to  LOGIN Screen */}
				  {(props.reset && msg === 'LOGIN')?<input
					type="submit"
					value="LOGIN"
					 style={{outline:'none',marginLeft:'1.5rem'}}
					className={classes.submitButton}
					onClick={(e) => {
						e.preventDefault();
						navigate('/', { replace: true }); 
						props.handleShow('LOGIN');
					}}
				  />:null}
				  
				  {/* Button to show on Forgot PASSWORD Screen */}
				  {props.forgot?<input
					type="submit"
					value="SEND RESET LINK"
					 style={{outline:'none'}}
					className={classes.submitButton}
					onClick={(e) => handleResetLink(e)}
				  />:null}
				  
				  
			  </form>
			</Slide>
			<div style={{marginTop:'1rem',fontSize:'0.8rem',marginBottom:'2rem'}} >
			  {/* Message to show on Reset PASSWORD Screen */}
				{(props.reset && msg !== 'LOGIN')?<span >Click on the Reset Password Button  to create new password to secure your account
				</span>:null}
			  {/* Message to show on Forgot PASSWORD Screen */}
				{(props.forgot && msg !== 'EMAIL_SENT' )?<span style={{width:'10%'}} >
						Reset Password Link will be sent on the Registered Email Address
				</span>:null}
				
				{(props.forgot && msg === 'EMAIL_SENT')?<span style={{width:'10%',color:'green',fontWeight:'700'}} >
						Reset Password Link has been sent on the Registered Email Address
				</span>:null}
				
			  {(props.reset && msg === 'LOGIN')?<span style={{color:'green'}} >Password has been Reset and now you can login
				</span>:null}
			</div>
	    </Grid>
      </Grid>
	</center>
  );
}


export default ForgotPasswordComponent;