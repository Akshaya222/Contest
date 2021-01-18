import React from 'react';
import {makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
      root : {
            width: "100%",
            height: "100%",
            position: "fixed",
            zIndex: 100,
            left: 0,
            top: 0,
            backgroundColor: "rgba(0,0,0,0.2)",
            backdropFilter: "blur(2px)"
      }
})

const Backdrop = props => {
      const classes = useStyles();
      return  props.show && (<div className={classes.root} onClick={props.clicked}></div>);
}

export default Backdrop;