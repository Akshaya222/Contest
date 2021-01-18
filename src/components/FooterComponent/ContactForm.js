import React from 'react';
import './contact.css'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import EmailIcon from '@material-ui/icons/Email';

export default function ContactForm(){
	
	
	
	return(
	   <div   >
		  <div style={{position:'absolute',right:'0',bottom:'0',width:'10%',height:'100vh',backgroundColor:'#f1c50e'}}>
		  </div>
          <div class="u-layout-row">
            <div class="u-container-style u-layout-cell u-left-cell u-size-28 u-layout-cell-1">
              <div class="u-container-layout u-container-layout-2">
                <div class="u-form u-form-1">
                  <form action="/" method="POST" class="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" style={{display:'flex',justifyContent:'center',marginTop:'20vh',marginLeft:'5rem'}} >
					<h3 class="u-text u-text-default u-text-1" style={{textAlign:'center',width:'100%'}} >Contact Us</h3>                
					<div class="u-form-group u-form-name u-form-group-1">
                      <label for="name-b381" class="u-form-control-hidden u-label">Name</label>
                      <input type="text" placeholder="Enter your Name" id="name-b381" name="name" class="u-border-1 u-border-grey-30 u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle" required="" />
                    </div>
                    <div class="u-form-email u-form-group u-form-group-2">
                      <label for="email-b381" class="u-form-control-hidden u-label">Email</label>
                      <input type="email" placeholder="Enter a valid email address" id="email-b381" name="email" class="u-border-1 u-border-grey-30 u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle" required="" />
                    </div>
                    <div class="u-form-group u-form-message u-form-group-3">
                      <label for="message-b381" class="u-form-control-hidden u-label">Message</label>
                      <textarea placeholder="Enter your message" rows="4" cols="50" id="message-b381" name="message" class="u-border-1 u-border-grey-30 u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle" required=""></textarea>
                    </div>
                    <div class="u-align-left u-form-group u-form-submit u-form-group-4"   >
                      <a href="#" class="u-black u-btn u-btn-submit u-button-style u-btn-1">Submit</a>
                     </div>
                   </form>
                </div>
              </div>
            </div>
           <div class="u-black u-container-style u-layout-cell u-right-cell u-size-32 u-layout-cell-2" style={{color:'white',height:'80vh',marginTop:'10vh'}}  >
				<div style={{display:'flex',justifyContent:'center',zIndex:'888888888',flexDirection:'column',margin:'auto',fontSize:'1.3rem'}}>
					<p><PhoneAndroidIcon style={{color:'yellow',width:'100px',height:'100px'}} /></p>
					<p>+91-9430177775</p>
					<p><EmailIcon style={{color:'yellow',width:'100px',height:'100px'}} /></p>
					<p>onlinemic.in@gmail.com</p>
				</div>			
            </div>
          </div>
		 </div>
	)
}