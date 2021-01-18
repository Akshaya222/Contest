import React,{useState, useRef,useContext} from 'react';
import {Box,Avatar,Grid,Button,Typography,IconButton} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import LinearProgress from '@material-ui/core/LinearProgress';
import axios, {isCancel } from "axios";
import {useStyles} from './BannerUploadJss';
import {AuthContext} from "../../../context/auth-context";


const ImageUpload = (props) => {
    
	const classes=useStyles();
    
	const authContext = useContext(AuthContext);
	
	const [uploadPercentage, setUploadPercentage] = useState(0);
    const [baseImage,setBaseImage]=useState('');
    const [file,setFile]=useState('');
    const cancelFileUpload = useRef(null);

   
    const clickHandler=()=>{
        var imageBtn = document.querySelector("#image-button")
        imageBtn.click()
     }
	 
    const PreviewImage = async (e) => {
		 const myfile = e.target.files[0];
		  const  base64 = await convertToBase64(myfile);
           setBaseImage(base64);
		   setFile(myfile);
	}
	
	const uploadImage = async(e)=>{
            return; 
           //const  base64= await convertToBase64(file);
           //setBaseImage(base64);  
           const options = {
            onUploadProgress: progressEvent => {
                const { loaded, total } = progressEvent;
              let percent = Math.floor((loaded * 100) / total);
              if (percent < 100) {
                    setUploadPercentage(percent);
                }
            }
        };
		
		let formData = new FormData();
        formData.append("profileImageUpload",file);
		
		let userData = JSON.parse(localStorage.getItem('user'));
        axios.post(`${authContext.baseUrl}/profileImage/${userData._id}`,
		  formData,
           {
            headers: {
              "Content-Type": "multipart/form-data",
            }
		   },
		   options
		)
        .then(res => {
            console.log(res);
			console.log('------------------')
			console.log(res.data.data.link_to_profile_img);
			let link_to_profile_img = res.data.data.link_to_profile_img;
			let oldInfo = JSON.parse(localStorage.getItem('user'));
			console.log('old',oldInfo);
			let newInfo = {...oldInfo,link_to_profile_img};
			console.log('new',newInfo)
			localStorage.setItem('user',JSON.stringify(newInfo));
			console.log('completed');
			
			
            setUploadPercentage(100);
            setTimeout(() => {
                setUploadPercentage(0);
            },1000); 
        })
        .catch(err => {
            console.log(err);
            if (isCancel(err)) {
                alert(err.message);
            }
            setUploadPercentage(0);
        });
    }; 
     
	 const convertToBase64=(file)=>{
             return new Promise((resolve,reject)=>{
                 const fileReader = new FileReader();
                 fileReader.readAsDataURL(file);
                fileReader.onload=()=>{
                     resolve(fileReader.result);
                 };
               fileReader.onerror=(error)=>{
                     reject(error);
                 }
             })
        }

     const cancelUpload = () => {
            if (cancelFileUpload.current)
                cancelFileUpload.current("User has canceled the file upload.");
        };

    return (
        <div>
            <Box className={classes.container}>
                <Box component="div"  className={classes.root}>
                    <Box className={classes.topContainer}> 
                        <Box className={classes.imageContainer}>
                            {
                                baseImage ?  <Avatar  src={baseImage} className={classes.avatar}></Avatar> : 
                                <Box className={classes.profilePic}>
                                <Typography variant="h6">Banner(Not Implemented)</Typography>
                            </Box>
                            }   
                        </Box>
                        <Box  component="div" className={classes.crossButton}>
                            <IconButton onClick={() => props.change(false)} >
                                <CloseIcon style={{fontSize:35}}></CloseIcon>
                            </IconButton>
                        </Box>
                    </Box>
                    <Box className={classes.uploadContainer}>
                      <Grid  container direction="row" justify="center" alignItems="center" spacing={4}>
                         <Grid item  xs={12} sm={2}>
                         <input id="image-button" type="file" onChange={(e) => PreviewImage(e)} hidden></input>
                         <Button variant="contained" className={classes.button} onClick={clickHandler} >Choose</Button>
                         </Grid>
                         <Grid item xs={12} sm={2}>
                            <Button variant="contained"  className={classes.button} onClick={(e) => uploadImage(e)} >upload</Button>
                         </Grid>
                         <Grid item xs={12} sm={8}>
                        {uploadPercentage > 0 && (
                        <div>
                             <LinearProgress  value={uploadPercentage} label={`${uploadPercentage}%`} 
                             classes={{colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary}} />
                             <span onClick={() => cancelUpload()} > Cancel </span>
                        </div>
                    )}
                       </Grid>
                     </Grid>
                  </Box>
                </Box>
            </Box>
        </div>
    )
}
export default ImageUpload;