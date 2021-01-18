import React,{useState,useEffect} from 'react'
import './pricing.css';
import pic from '../../assets/images/Banner.png';
import logo from '../../logo.png';
import axios from 'axios';

export default function Pricing() {
  
  const [id,setId]=useState();
  const [currency,setCurrency]=useState('');
  const [userData,setUserData]=useState({
      name:'',
      contact:'',
      email:'',
      postalAddress:''
  })

  useEffect(()=>{
    axios.post("http://localhost:3007/razorpay").then((data)=>{
     setId(data.data.id);
     setCurrency(data.data.currency);
   }).catch((error)=>{
     console.log(error);
   })
 },[]);

 
 async function displayRazorpay(){
   const options={
    key:'rzp_live_H8siLsMaNFbFrq', 
    currency:currency,
    amount:349,
    name:"MIC Gaana Contest",
    description:"Thanks for participating",
    image:logo,
    order_id:id,
    handler: function(response){
  
     const user=JSON.parse(localStorage.getItem('user'));	
      axios.post("http://localhost:3007/verification",{
            amount:349,
            currency:currency,
            order_id:id,
            payment_id:response.razorpay_payment_id,
            signature:response.razorpay_signature,
            user:user._id,
            contactNumber:userData.contact,
            userEmail:userData.email,
            postalAddress:userData.postalAddress,
       }).then((data)=>{
        alert("Payment Successfull");
        console.log("data",data);
       }).catch((error)=>{
         console.log("Payment Unsuccessfull",error);
       })
 
    },
    prefill:{
      contact:userData.contact,
      email:userData.email
    }
  };
  console.log("options",options);
  const paymentObject=new window.Razorpay(options);
  paymentObject.open(); 
}


    return (
      <div className="Pricing">
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-6" style={{paddingTop:150 , width:'50%'}}>
        <div className="card mb-3" style={{border:'1px solid black' , width:500 , height:'80%' ,margin:'1px auto'}}>
                  <img className="card-img-top" src={pic} alt="Card-cap" />
                  <div className="card-body" style={{textAlign:'left' , paddingLeft:'5%'}}>
                    <h5 className="card-title">Rap Battle</h5>
                    <p className="card-text">Fees: 349</p>
                    <p className="card-text">Total Amount: 349/-</p>
                  </div>
        </div>
        </div>
        <div className="col-md-6 yellow" style={{backgroundColor:'#f2c700' , height:'100vh' , width:'50%' ,paddingTop:150}}>
          <div className="white-box" style={{backgroundColor:'#FEFAE6' , paddingTop:60, paddingBottom:60 , borderRadius:10 , width:'70%', margin:'1px auto'}}>
              <p style={{fontSize:12 , fontWeight:500,textAlign:'left', marginLeft:80 , marginTop:10 }}> Name</p>
              <input  type="text" placeholder="First Name" value={userData.name}  onChange={(e)=>setUserData({...userData,name:e.target.value})}  style={{width:'70%' , borderRadius:20 , height:40 }}/>

              <p style={{fontSize:12 , fontWeight:500,textAlign:'left', marginLeft:80 , marginTop:10 }}>Email</p>
              <input  type="text" placeholder="Email"  value={userData.email}  onChange={(e)=>setUserData({...userData,email:e.target.value})} style={{width:'70%' , borderRadius:20 , height:40 }} />
              
              <p style={{fontSize:12,fontWeight:500,textAlign:'left', marginLeft:80 , marginTop:10 }}>Mobile Number</p>
              <input type="text" placeholder="Mobile Number" value={userData.contact}  onChange={(e)=>setUserData({...userData,contact:e.target.value})} style={{width:'70%' , borderRadius:20 , height:40 }}/>
              
              <p style={{fontSize:12 , fontWeight:500,textAlign:'left', marginLeft:80 , marginTop:10 }}>Postal Address</p>
              <input  type="text" placeholder="Address" value={userData.postalAddress}  onChange={(e)=>setUserData({...userData,postalAddress:e.target.value})} style={{width:'70%' , borderRadius:20 , height:40 }}/>
              
              <button type="button" className="btn btn-block btn-dark"  onClick={displayRazorpay}  style={{width:'75%' , borderRadius:20 , height:45 , marginTop:20 , border:0}}>Proceed to Pay</button>
          </div>
        </div>
      </div>
      </div>
     
    </div>
    )
}
