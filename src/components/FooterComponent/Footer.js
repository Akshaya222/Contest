import React from 'react';
import { Link } from "@reach/router";        
import './footer.css';
export default function Footer(){
	return(
	 <div style={{backgroundColor:'#212121',height:'10rem',zIndex:'500000',position:'unset',bottom:'0', display:'flex', color:'#F2C700'}}>
		<div style={{width:'100%',display:'flex',whiteSpace:'pre-wrap', marginBottom:3 , flexDirection:'column'}} >
			<small style={{paddingTop:'2rem' , paddingLeft:20}}><Link to='/terms' > Terms of Use</Link> </small>
			<small style={{paddingTop:'2rem', paddingLeft:20}}><Link to='/refund' > Refund & Cancellation Policy</Link></small>
			<small style={{paddingTop:'2rem', paddingLeft:20}}><Link to='/privacy' >Privacy Policy </Link></small>
		</div>
	   <div style={{width:'100%',display:'flex',whiteSpace:'pre-wrap', marginBottom:3 , flexDirection:'column'}} >
			<small style={{paddingTop:'2rem' , paddingLeft:20}}><Link to='/about' >About Us</Link> </small>
			<small style={{paddingTop:'2rem', paddingLeft:20}}><Link to='/contest' > Contest </Link></small>
			<small style={{paddingTop:'2rem', paddingLeft:20}}><Link to='/contact' >Contact Us </Link></small>
		</div>			
		<small style={{textAlign:'center',display:'inline-block',width:'100%',paddingTop:'4rem'}} > @2017-2021 All Copyrights Reserved | Online MIC, subsidiary of Admere Selvyn Private Limited  </small>	

	</div>
	)
}