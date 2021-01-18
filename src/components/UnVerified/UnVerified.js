import React,{useContext,useState} from 'react';
import axios from 'axios';
import {AuthContext} from "../../context/auth-context";
import Button from '@material-ui/core/Button';
import ReactLoading from 'react-loading';
import { makeStyles } from "@material-ui/core/styles";
import {IconButton} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  myBtn: {
	 background:'white',
	 width:'300px',
	 fontWeight:'900',
	 "&:hover": {
		color:'snow',
		backgroundColor:'black !important',
	  }
  }
})); 

export default function UnVerified(){
	const classes = useStyles();

	const [status,setStatus] = useState('');
	const [isLoading,setLoading] = useState(false);
	const authContext = useContext(AuthContext);
  
	function verifyIt(){
		let user = JSON.parse(localStorage.getItem('user'));
		let { _id } = user
		setLoading(true);
		axios.post(`${authContext.baseUrl}/checkVerifiedStatus/${_id}`)
		  .then(function (response) {                   
			console.log(response.data);
			user.verified = true;
			localStorage.setItem('user',JSON.stringify(user));
			//setStatus(true);	
			//setLoading(false);
			window.location.href = window.location.href;
		  })
		  .catch(function (error) {                     
			setStatus(false);
			setLoading(false);
		  });
	}
  
	function sendMail(){
		let user = JSON.parse(localStorage.getItem('user'));
		let { _id } = user
		setLoading(true);
		axios.post(`${authContext.baseUrl}/resendEmailVerifyLink/${_id}`)
			  .then(function (response) {                   
				console.log(response.data);
				setStatus(true);	
			    setLoading(false);
			  })
			  .catch(function (error) {                     
				setStatus(false);
				setLoading(false);
			  });
		
	}
	
	return(
		<div style={{zIndex:'999999999',display:'flex',justifyContent:'space-around',width:'100vw',backgroundColor:'red',color:'snow',alignItems:'center'}} >
			{isLoading?<ReactLoading type={'balls'} color={'#fffafa'}  style={{position:'absolute',right:'0',top:'10',width:'100px',height:'50px',color:'#fffafa'}} />:null}
			 
			<p style={{textAlign:'center',color:'snow',padding:'1rem'}} ><span>Please Verify Your Email Address </span> </p>
			
			<Button className={classes.myBtn} variant="contained"  onClick={() => sendMail()}  >
				  Send Email
			 </Button>
			 <p style={{color:'white'}} >{status?'Check Your Email Address':null}</p>
			 <IconButton onClick={() => verifyIt()} >
                    <CloseIcon style={{fontSize:35}}></CloseIcon>
             </IconButton>
		</div>
	)
}