import React from 'react';
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import playButton from "../../assets/images/play.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  barWrapper: {
    background: "rgba(255,255,255,0.4)",
    borderRadius: "40px",
  },
  bar: {
    height: "5px",
    background: "#999",
    width: "100%",
    position: "relative",
  },
  progress: {
    background: "yellow",
    height: "5px",
    position: "absolute",
  },
  submit: {
    width: "168px",
    height: "50px",
    background: "#f3c800",
    borderRadius: "30px",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#121212",
    },
  },
});

const ProgressBar = props => {
      const classes = useStyles();
      console.log(props.progress);
      return (
        props.progress && (
          <>
            <Box component="div" className={classes.barWrapper}>
              <Grid container>
                <Grid item sm={2} style={{ borderRight: "1px solid #ccc" }}>
                  <img
                    src={playButton}
                    alt="play button"
                    style={{ width: "35%", marginTop: "19px" }}
                  />
                </Grid>
                <Grid sm={9} style={{ textAlign: "left" }} item>
                  <Box component="p" pl={2}>
                    Video{" "}
                    <b>
                      Level 1 Video By{" "}
                      {JSON.parse(localStorage.getItem("user")).name}
                    </b>{" "}
                    is uploading
                  </Box>
                  <Box component="div" className={classes.bar} ml={2} mb={2}>
                    <span
                      className={classes.progress}
                      style={{ width: `${props.progress}%` }}
                    ></span>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <br />
            <br />
            {/* <Button
              variant="contained"
              color="inherit"
              className={classes.submit}
            >
              Submit
            </Button> */}
          </>
        )
      );
};

export default ProgressBar;