import React,{useState,useContext} from 'react';
import {Grid,Avatar,IconButton,Box,TextField, FormGroup,InputLabel,Button } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import user from '../../../assets/images/profilePic.png';
import axios from 'axios';
import {useStyles} from './EditFormJss';
import {AuthContext} from "../../../context/auth-context";
import ImageUpload from "../ImageUpload/ImageUpload";

const EditForm = (props) => {
	
	const authContext = useContext(AuthContext);
	const [edit,setEdit] = useState(false);
	const [success,setSuccess] = useState(false);
	const [error,setError] = useState(false);
	let myInfo = JSON.parse(localStorage.getItem('user'));
    const [data,setData] = useState({
      name:myInfo.name || '',
      age:myInfo.age || '',
      address:myInfo.address || '',
      city:myInfo.city ||'',
      state:myInfo.state || ''
    });

    const classes = useStyles();

    const submitHandler=(e)=>{
      e.preventDefault();
      console.log(data);
      const userData = JSON.parse(localStorage.getItem('user'));
	 setError(''); 
	 setSuccess(''); 
      axios.post(`${authContext.baseUrl}/edit/${userData._id}`,data).then((info)=>{
        console.log(info.data.data);
		/* let changeInfo = info.data.data;
		console.log('change',changeInfo) */
		let oldInfo = JSON.parse(localStorage.getItem('user'));
		console.log('old',oldInfo)
		let newInfo = {...oldInfo,...data};
		console.log('new',newInfo)
		localStorage.setItem('user',JSON.stringify(newInfo));
		console.log(newInfo);
		setSuccess(true);
      }).catch((err)=>{
		  setError(true);
        })
    }
   
    return (
            <Box maxWidth="lg" className={classes.root}>
				{edit?<ImageUpload change={setEdit} />:null}
               <Grid container spacing={2} className={classes.root}  style={{padding:'15px',backgroundColor:'white'}}>
                  <Grid item xs={12} sm={3} >
                     <Box component="div"  className={classes.imageDiv}>
                     <Avatar  className={classes.avatar} alt="Remy Sharp" src={user} />
                     <IconButton onClick={() => setEdit(true)}  className={classes.addImageIcon}>
                     <AddCircleIcon  style={{fontSize:30}} ></AddCircleIcon>
                     </IconButton>
                     </Box>
                  </Grid>
                  <Grid item xs={12} sm={9} >
					  {success && !error?<p style={{textAlign:'center',color:'green',fontSize:'1rem'}} >Changes Updated</p>:null}
					  {error && !success?<p style={{textAlign:'center',color:'red',fontSize:'1rem'}} >Error In Updating Details !! Try Again</p>:null}
                      <form>
                          <FormGroup row  className={classes.formGroup} >
                            <InputLabel  className={classes.inputLabel} required classes={{ asterisk: classes.labelAsterisk}}>Name</InputLabel>
                            <TextField  className={classes.textField} style={{fontFamily:'galano!important'}} value={data.name}  onChange={(e)=>setData({...data,name:e.target.value})} id="outlined-basic" variant="outlined"/>
                          </FormGroup>
                          <FormGroup row  className={classes.formGroup}>
                          <InputLabel  required className={classes.inputLabel}  classes={{ asterisk: classes.labelAsterisk}}>Age</InputLabel>
                            <TextField  className={classes.textField}   value={data.age}  onChange={(e)=>setData({...data,age:e.target.value})}  id="outlined-basic" variant="outlined"/>
                          </FormGroup>
                          <FormGroup row  className={classes.formGroup}>
                          <InputLabel  required  className={classes.inputLabel}  classes={{ asterisk: classes.labelAsterisk}}>Address</InputLabel>
                            <TextField  className={classes.textField}   value={data.address}   onChange={(e)=>setData({...data,address:e.target.value})} id="outlined-basic" variant="outlined"/>
                          </FormGroup>
                          <FormGroup row  className={classes.formGroup}>
                          <InputLabel  required  className={classes.inputLabel}  classes={{ asterisk: classes.labelAsterisk}}>City</InputLabel>
                            <TextField  className={classes.textField}   value={data.city}  id="outlined-basic"  onChange={(e)=>setData({...data,city:e.target.value})}  variant="outlined"/>
                          </FormGroup>
                          <FormGroup row  className={classes.formGroup}>
                          <InputLabel  required  className={classes.inputLabel}  classes={{ asterisk: classes.labelAsterisk}}>State</InputLabel>
                            <TextField  className={classes.textField}   value={data.state}   id="outlined-basic"  onChange={(e)=>setData({...data,state:e.target.value})}  variant="outlined"/>
                          </FormGroup>
                          <div>
                            <Button variant="contained" color="primary" onClick={submitHandler}  className={classes.button}>
                             Save Changes
                             </Button>
							 <Button variant="contained" color="primary" onClick={() => props.change(false)}  className={classes.button}>
                              Cancel
                             </Button>
                          </div>
                      </form>
                  </Grid>
                 </Grid>
            
            </Box>
    )
}

export default EditForm;