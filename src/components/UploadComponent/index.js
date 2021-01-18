import React, {useEffect, useContext, useState} from 'react';
import Uploader from './Uploader';
import Container from "@material-ui/core/Container";
import ProgressBar from "./ProgressBar";
import {AuthContext} from "../../context/auth-context";
import { navigate } from "@reach/router";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import UnVerified from '../UnVerified/UnVerified';

let file = "";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



const UploadComponent = () => {
  const classes = useStyles();

  const authContext = useContext(AuthContext);
  const [submitButton, setSubmitButton] = useState(true);
  const [isVerified, setVerified] = useState(false);
  const [selectedFile, setSelectedFile] = useState([]);
  const [progress, setProgress] = useState(null);
     
  const disableSubmitHandler = () => {
        setSubmitButton(false);
  }

    useEffect(() => {
        if(!localStorage.getItem('user')){
				navigate("/"); 
		}else{
			//alert(JSON.parse(localStorage.getItem('user')).verified);
			setVerified(JSON.parse(localStorage.getItem('user')).verified);
		}
    },[authContext.auth]);
    
	const selectedFileHandler = (file) => {
	  let ext = file.name.split('.').pop();
	  if(ext !== 'webm' && ext !== 'flv' && ext !== '3gp' && ext!== '3gp2' && ext !== 'mp4' && ext!== 'svi' && ext!== 'mkv' && ext!== 'avi' && ext!=='mov' && ext!== 'wmv' && ext!== 'mpeg' && ext!== 'mpg') {
            return;
       }
      setSelectedFile(file);
      let formData = new FormData();
      formData.append("contestVideo",file);
      disableSubmitHandler();
      axios
        .post(
          // `${authContext.baseUrl}/submit/contest/5f65baa188113427d0cbc4e3/user/5f69e79e05a502835da39485`,
          `${authContext.baseUrl}/submit/contest/5f65baa188113427d0cbc4e3/user/${JSON.parse(localStorage.getItem("user"))._id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            onUploadProgress: (progressEvent) => {
                    let percentCompleted = Math.round(
                      (progressEvent.loaded * 100) / progressEvent.total
                    );
                    if(percentCompleted === 100) authContext.turnOnLoader()
                    setProgress(percentCompleted);
                    console.log(percentCompleted);
            }
          }
        )
        .then(function (res) {
          authContext.turnOffLoader();
          console.log({ res: res });
          navigate("/payment");
        })
        .catch(function (err) {
          authContext.turnOffLoader();
          console.log({ err: err });
        });
    }
	
	/* Handle logout */
	function handleLogout(e){
		e.preventDefault();
		localStorage.removeItem('user');
		localStorage.removeItem('visited');
		axios.get(`${authContext.baseUrl}/user/logout`)
		.then(res => {
			navigate('/');
		})
		.catch(err => {
			console.log(err);
			navigate('/');
		})
	}

      return (
  <div className={classes.root}>
	  {!isVerified?<UnVerified />:null}
     <Grid container spacing={3}>
        <Grid item xs={6}>
                  <center>
                    <Container maxWidth="sm" style={{paddingTop:50}}>
                      <Uploader file={selectedFileHandler} disableSubmit={disableSubmitHandler}  submitButton={submitButton}/>
                      <br />
                      <br />
                      <div id="container">
                        <ProgressBar progress={progress} fileName={file.name} />
                      </div>
                    </Container>
                  </center>       
         </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}style={{ height: 1000 , backgroundColor:'#F3C800' }}>
          <Button variant="outlined" color="black" style={{border:'3px solid white', marginRight:50, borderRadius:15,zIndex:'100000'}} onClick={(e) => handleLogout(e)} >
              LOGOUT
          </Button>
          </Paper>
        </Grid>
        </Grid>
        
        </div>
      );
};

export default UploadComponent;