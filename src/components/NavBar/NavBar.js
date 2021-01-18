import React,{useEffect,useState,useContext} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import LOGO from '../../assets/images/logo_bnw.png'
import { navigate } from "@reach/router";
import UnVerified from '../UnVerified/UnVerified';
import {AuthContext} from "../../context/auth-context";

const useStyles = makeStyles({
	root:{
		display:'flex',
		width:'80vw',
		justifyContent:'space-between',
		alignItems:'center',
		margin:'0 auto 0.4rem auto'
	},
	list:{
		display:'flex',
		listStyleType:'none',
		color:'black'
	}
});

export default function NavBar(){
	
	 const authContext = useContext(AuthContext);
	const classes = useStyles();
	const [isVerified, setVerified] = useState(false);
	const [now,setNow] = useState(false);
	
	function handleLogOut(){
		localStorage.removeItem('user');
		navigate('/')
	}
	
	 useEffect(() => {		
        if(!localStorage.getItem('user')){
				navigate("/"); 
		}else{
			setVerified(JSON.parse(localStorage.getItem('user')).verified);
			setNow(true);
		}
    },[authContext.auth]);
	
	return(
	<section style={{width:'100vw',backgroundColor:'#f3c700'}} >
		<div>
			 {!isVerified && now?<UnVerified />:null}
		</div>
		<div className={classes.root} >	
			<span><img src={LOGO} alt="logo" style={{width:'80px',height:'30px'}} /></span>
			<ul className={classes.list} >
				<li style={{marginRight:'1.5rem',cursor:'pointer'}} onClick={() => navigate('/contest')} >CONTEST</li>
				<li style={{marginRight:'1.5rem',cursor:'pointer'}} >HELP</li>
				<li style={{marginRight:'1.5rem',cursor:'pointer'}} onClick={() => handleLogOut()} >LOGOUT</li>
			</ul>
		</div>
  </section>
	)
}	