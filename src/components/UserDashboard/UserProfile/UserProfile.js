import React,{useState,useEffect} from 'react';
import {Box,IconButton,Card,CardActionArea,CardActions,CardContent,
  Button,Typography,Avatar } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {useStyles} from './UserProfileJss';
import user from '../../../assets/images/profilePic.png';
import EditForm from '../EditForm/EditForm';
import ImageUpload from '../ImageUpload/ImageUpload';

export default function UserProfile() {
  const classes = useStyles();
  
  const [editForm,setEditForm] = useState(false);
  const [imgForm,setImgForm] = useState(false);
  const [userInfo,setInfo] = useState({});
 // let myImage = JSON.parse(localStorage.getItem('user')).link_to_profile_img;
    
  
  useEffect(() => {
	  if(!localStorage.getItem('user')) return;
	   let info = {};
	   let myInfo = JSON.parse(localStorage.getItem('user'));
	   info.contestParticipated = myInfo['contests'].length;
	   info.videosUploaded = myInfo['videos'].length;
	   info.name = myInfo['name'];
	   info.email = myInfo['username'];
	   info.phone = myInfo['phone_no'];
	   info.age = myInfo['age'];
	   info.address = myInfo['address'];
	   info.city = myInfo['city'];
	   info.state = myInfo['state'];
	   info.img = myInfo['link_to_profile_img'];
	   setInfo(info);
   },[editForm,imgForm])

  return (
  <Box component="div" className={classes.root} >
	{editForm?<EditForm change={setEditForm}  />:null}
	{imgForm?<ImageUpload change={setImgForm}  />:null}
    <Card className={classes.card}>
      <CardActionArea style={{padding:'15px'}} >
       <Box component="div"  className={classes.imageDiv}>
          <Avatar  className={classes.avatar} alt="Remy Sharp" src={userInfo && userInfo.img || user} />
          <IconButton  onClick={() => setImgForm(true)} className={classes.addImageIcon}>
          <AddCircleIcon   style={{fontSize:30}} ></AddCircleIcon>
          </IconButton>
       </Box> 
        <CardContent>
          <Typography  variant="h5" align="center"  style={{fontWeight:'bolder',fontFamily:'galano',marginBottom:'12px'}}  gutterBottom>
			  {userInfo.name && userInfo.name.toUpperCase()}
          </Typography>
          <Box component="div" className={classes.Details}>
              <Typography className={classes.font}  variant="h6">Contest Participated</Typography>
              <Typography  className={classes.font} variant="h6">{userInfo.contestParticipated}</Typography>
          </Box>
          <Box component="div" className={classes.Details}>
              <Typography  className={classes.font} variant="h6">Videos Uploaded</Typography>
              <Typography   className={classes.font} variant="h6">{userInfo.videosUploaded}</Typography>
          </Box>
		   <Typography  variant="h5"  style={{fontWeight:'bolder',fontFamily:'galano',marginTop:'0.3rem'}}  gutterBottom>
			 About :
          </Typography>
          <Box component="div" className={classes.Details}>
              <Typography  variant="h6"  className={classes.fontSmall}>Age </Typography>
              <Typography   variant="h6"  className={classes.fontSmall}>{userInfo.age}</Typography>
          </Box>
          <Box component="div" className={classes.Details}>
              <Typography  variant="h6"  className={classes.fontSmall}>Address </Typography>
              <Typography  variant="h6"  className={classes.fontSmall} >{userInfo.address}</Typography>
          </Box>
          <Box  component="div" className={classes.Details}>
              <Typography   variant="h6"  className={classes.fontSmall} >City </Typography>
              <Typography  variant="h6"  className={classes.fontSmall}>{userInfo.city}</Typography>
          </Box>
          <Box component="div" className={classes.Details}>
              <Typography   variant="h6"  className={classes.fontSmall}>State </Typography>
              <Typography   variant="h6"  className={classes.fontSmall}>{userInfo.state}</Typography>
          </Box>
         <Box component="div" display='flex' alignItems='center'>
            <IconButton>
            <EmailIcon className={classes.icons}></EmailIcon>
            </IconButton>
            <Typography variant="caption" className={classes.icons} style={{fontSize:'15px'}}>{userInfo.email}</Typography>
          </Box>
          <Box component="div" display='flex' alignItems='center'>
            <IconButton>
               <PhoneIcon className={classes.icons}></PhoneIcon>
            </IconButton>
            <Typography variant="caption" className={classes.icons}>{userInfo.phone}</Typography>
          </Box>
       </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent: 'center'}}>
        <Button  onClick={() => setEditForm(true)}  variant="contained" color="primary" className={classes.button}>
           Edit Profile
        </Button>
       </CardActions>
    </Card>
  </Box>
  );
}
