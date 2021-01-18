import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LOGO from '../../logo.png';

const useStyles = makeStyles({
  root:{
	display:'flex',
	flexDirection:'column',
	justifyContent:'center',
	margin:'auto',
	maxWidth:'60%'
  },
  heading: {
    color:"rgb(0, 0, 0)",
	fontFamily:"anton,sans-serif",
	textShadow:'rgba(0, 0, 0, 0.4) 0px 4px 5px',
	marginTop:'1.5rem',
	fontSize:'1.8rem'
  },
  subheading:{
	  marginLeft:'3rem',
	  fontSize:'1.3rem',
	  fontStyle:'italic'
  }
});

export default function AboutUs(){
	const classes = useStyles();
	
	return(
		<div className={classes.root} >
			<img style={{width:'100px',height:'40px',margin:'1rem auto 1rem auto'}} src={LOGO} alt="mic" />
			<h1 className={classes.heading} >Who are WE ?</h1>
			<p className={classes.subheading} >MIC is an idea of helping young artists earn recognition and a cheering fan base under the guidance of mentors</p>
			<h1 className={classes.heading} >our Vision ?</h1>
			<p className={classes.subheading} >Revolution in the Music Industry in favor of Young, Budding and Passionate Artists.
             Knowing the value of Struggle Dreams,</p>
			<ul className={classes.subheading} >
				<li>Best Industry Experts</li>
				<li>Exclusive Promotion Worldwide</li>
				<li>Record Label Projects (Official Originals and Covers).</li>
				<li>Opportunities for Playback Singing</li>
				<li>Brand Recognition through Stage Shows throughout India.</li>
			</ul>`
	  </div>
	)
} 
