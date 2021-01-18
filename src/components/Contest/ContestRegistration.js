import React from 'react';
import './register.css';
import pic from '../../assets/images/BannerWeb.png'

function ContestRegistration() {
  return (
    <div className="contestRegistration">
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-6" style={{paddingTop:150}}>
        <div class="card mb-3 mx-auto " style={{border:'1px solid black' , width:500 , height:535}}>
		  <img class="card-img-top" src={pic} alt="Card-cap" />
		  <div class="card-body" style={{textAlign:'left'}}>
			<h5 class="card-title">Rap Battle</h5>
			{/* <p class="card-text">0.34 % GST</p> */}
			<p class="card-text"><small class="text-muted">Fees: 349</small></p>
			{/* <p class="card-text"><small class="text-muted">GST: 49</small></p> */}
			<p class="card-text">Total Amount: 349/-</p>
		  </div>
		</div>
        </div>
        <div className="col-md-6 yellow" style={{backgroundColor:'#f2c700' , height:'100vh' ,paddingTop:150}}>
          <div className="white-box mx-auto" style={{backgroundColor:'#FEFAE6' , paddingTop:60, paddingBottom:60 , borderRadius:10 , width:'70%'}}>
              <p style={{fontSize:12 , fontWeight:700,textAlign:'left' , marginLeft:80 , marginTop:10 }}>First Name</p>
        <input class="form-control form-control-sm mx-auto" type="text" placeholder="First Name"  style={{width:'70%' , borderRadius:20 , height:40 }}/>
        <p style={{fontSize:12 , fontWeight:700,textAlign:'left' , marginLeft:80 , marginTop:10 }}>Last Name</p>

        <input class="form-control form-control-sm mx-auto" type="text" placeholder="Last Name"style={{width:'70%' , borderRadius:20 , height:40 }}/>
        <p style={{fontSize:12 , fontWeight:700,textAlign:'left' , marginLeft:80 , marginTop:10 }}>Email</p>

        <input class="form-control form-control-sm mx-auto" type="text" placeholder="Email"style={{width:'70%' , borderRadius:20 , height:40 }}/>
        <p style={{fontSize:12 , fontWeight:700,textAlign:'left' , marginLeft:80 , marginTop:10 }}>Mobile Number</p>

        <input class="form-control form-control-sm mx-auto" type="number" placeholder="Mobile Number"style={{width:'70%' , borderRadius:20 , height:40 }}/>
        <p style={{fontSize:12 , fontWeight:700,textAlign:'left' , marginLeft:80 , marginTop:10 }}>Postal Address</p>

        <input class="form-control form-control-sm mx-auto" type="text" placeholder="Address" style={{width:'70%' , borderRadius:20 , height:40 }}/>
        <button type="button" class="btn btn-block btn-dark mx-auto" style={{width:'70%' , borderRadius:20 , height:40 , marginTop:10 }}>Proceed to Pay</button>
      </div>
        </div>
      </div>
      </div>
     
    </div>
  );
}


export default ContestRegistration;