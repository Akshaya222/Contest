import React,{useState} from 'react';
import NavBar from '../NavBar/NavBar';
import Banner from './Banner/Banner';
import DisplaySections from './DisplaySections';
import UserProfile from './UserProfile/UserProfile';
import {Grid} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	root:{
		marginTop:'1rem',
	},
	item:{
		padding:'0px !important',
	},
	sections:{
		display:'flex',
		listStyleType:'none',
		marginBottom:'0px',
		width:'100%',
	},
	linkItem:{
		marginRight:'4rem',
		cursor:'pointer',
		marginBottom:'0px',
	}
});

export default function UserDashboard(){
	
    const classes = useStyles();
	
	const [active,setActive] = useState(2);
	
	return(
	  <>
		<NavBar />
		<Banner />
		<Grid container className={classes.root} >
			<Grid item xs={12} sm={5} style={{backgroundColor:'white'}} >
			  <UserProfile />
			</Grid>
			<Grid container xs={12} sm={7} className={classes.item}  >
			  <ul className={classes.sections}  >
				<li className={classes.linkItem} style={{color:(active === 1)?'grey':'black'}}  value={1} onClick={() => setActive(1)} >My Submitions</li>
				<li className={classes.linkItem} style={{color:(active === 2)?'grey':'black'}} value={2} onClick={() => setActive(2)}  >Performance Analytics</li>
				<li className={classes.linkItem} style={{color:(active === 3)?'grey':'black'}} value={3} onClick={() => setActive(3)}  >My Contest</li>
			  </ul>
			  <div style={{width:'100%',marginBottom:'0px'}} >
				<DisplaySections active={active} />
			  </div>
			</Grid>
		</Grid >
	  </>
	)
}