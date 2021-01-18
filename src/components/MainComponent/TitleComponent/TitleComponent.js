import React from 'react';
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
      title:{
      fontSize: "40px",
			fontFamily:"Montserrat",
			fontWeight:"700"
      },
	  subTitle:{
      fontSize: "1rem",
			fontFamily:"3ontserrat",
			fontWeight:"700",
			marginTop:"5px",
			color:'#4e4e4e'
      }
});

const TitleComponent = () => {
      const classes = useStyles();
      return (
        <Box component="div" mt={23} ml={8} >
          <h1 className={classes.title} style={{ marginBottom: "3px" }}>Refine Your</h1>
          <h1 className={classes.title} style={{ color: "#f3c800",marginTop:"0px",marginBottom:'0px' }}>
            Singing Talent
          </h1>
          <p className={classes.subTitle} >
            And get what you deserve
          </p>
        </Box>
      );
};

export default TitleComponent;