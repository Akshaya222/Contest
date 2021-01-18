import React from 'react';
import Box from "@material-ui/core/Box";
import upload from "../../assets/images/upload.svg";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import "../../assets/scss/Uploader.scss";

const useStyles = makeStyles({
  uploadButton: {
    width: "168px",
    height: "50px",
    background: "#121212",
    borderRadius: "30px",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#f3c800",
	  color:'black'
    }
  },
});

const Uploader = props => {
      const classes = useStyles();
      

      const uploadHandler = () => {
        const fileInput = document.getElementById("videoUpload");
        fileInput.click();
        fileInput.onchange = function () {
          props.file(this.files[0]);
          // console.log(Math.floor(this.files[0].size / 1024 / 1024));
        };
      }

      // props.disableSubmit = arg => {
      //     setSubmitButton(false);
      // }


      return (
        <Box
          component="div"
          py="5vh"
          className="uploadBorderBottom"
        >
          <h1>Upload your Video here</h1>
          <p style={{color: "red"}}>max file size: 100 MB</p>
          <br />
          <img src={upload} alt="upload video MIC" />
          <br />
          <br />
          <input type="file" id="videoUpload" style={{ display: "none" }} />
          <Button
            variant="contained"
            color="inherit"
            className={classes.uploadButton}
            id="videoUpload"
            onClick={uploadHandler}
            disabled={!props.submitButton}
          >
            Submit Video
          </Button>
          <p style={{color: "red"}}>File Format: '.webm' , '.flv' , '.3gp' , '.3gp2' , '.mp4', '.svi' , '.mkv' , '.avi', '.mov' , '.wmv' , '.mpeg' , '.mpg'</p>

        </Box>
      );
};

export default Uploader;