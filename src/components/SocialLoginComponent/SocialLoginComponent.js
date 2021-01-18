import React,{useContext,useEffect} from 'react';
import axios from "axios";
import {AuthContext} from "../../context/auth-context";

export default function SocialLoginComponent(){
	
	const authContext = useContext(AuthContext);
	
	useEffect(() => {
		let hostName = window.location.origin;
		let pathname = window.location.pathname;
		let query = window.location.search;
		let endpoint= `${hostName}/api${pathname}${query}`;
		console.log(endpoint);
		authContext.turnOnLoader();
		axios
		  .get(endpoint)
		  .then(function (response) {
			console.log('success',response);
			console.log('data',response.data)
			if(response.data.status === "success"){
				let newUser = JSON.stringify(response.data.data);
				localStorage.setItem('user',newUser)
				authContext.turnOffLoader();
			    window.location.href = "/upload";
			  }else{
				  authContext.turnOffLoader();
				   window.location.href = "/";
			  }
			
			
		  })
		  .catch(function (error) {
			console.log(error.response);
			authContext.turnOffLoader();
		
				//setError('Unable to Authorize')
			window.location.href = "/";
		 });
		
	},[])
	
	return(
		<p></p>
	)
}