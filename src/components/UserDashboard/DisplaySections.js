import React from 'react';
import Performance from './Analytics/Performance';
import MySubmissions from './Mysubmissions/Mysubmissions.js';
import Mycontest from './Mycontest/Mycontest';


export default function DisplaySections({active}){
	
	
	return(
		<div >
			{(active === 1)?<MySubmissions />:null}
			{(active === 2)?<Performance />:null}
			{(active === 3)?<Mycontest />:null}
		</div>
	)
}