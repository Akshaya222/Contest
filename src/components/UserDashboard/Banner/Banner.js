import React,{useState} from 'react';
import {Button} from '@material-ui/core';
import BannerUpload from './BannerUpload';

export default function Banner(){
	
	const [editBanner,setEdit] = useState(false);
	
	return(
	  <>
		<div  style={{borderTop:'3px groove #e1b800',display:'flex',justifyContent:'end',width:'100vw',backgroundColor:'#f3c700',height:'35vh',marginTop:'-15px'}}>
			<Button variant='outlined' onClick={() => setEdit(true)} style={{color:'white',fontWeight:'900',border:'1px solid white',height:'2rem',marginTop:'0.5rem',marginRight:'10rem'}} >Edit</Button>
		</div>
		{editBanner?<BannerUpload change={setEdit} />:null}
 	 </>
	)
}