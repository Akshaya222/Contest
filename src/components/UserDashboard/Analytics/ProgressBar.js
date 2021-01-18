import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

import './test.css';


export default function ProgressBar(props) {
	  let otherVal = (((100 - props.value)/100)*360);
	 console.log(props.value,otherVal)
	 return (
		<Box position="relative" display="inline-flex" style={{width:'130px',height:'130px',marginTop:'10%'}} >
		   <CircularProgress style={{color:'#848484',transform:`rotate(-${otherVal}deg)`,height:'100%',width:'100%'}} variant="determinate" value={100 - props.value} />		 		   
		   <CircularProgress  style={{position:'absolute',color:'#f3c700',transform:'rotate(0deg)',height:'100%',width:'100%',strokeLinecap:'round'}} variant="determinate" value={props.value} />
		   <div style={{fontSize:'2rem',position:'absolute',top:'50%',left:'50%',transform:'translate(-40%,-50%)'}}
		   >
			<small>{`${props.value}%`}</small>
			
		  </div>
		  <div style={{fontSize:'1.3rem',position:'absolute',top:'120%',left:'50%',transform:'translate(-40%,-50%)'}}
		   >
			<small>{`${props.label}`}</small>			
		  </div>
	  </Box>
  )
}

/* ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
}; */

 /*  */