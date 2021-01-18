import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
      root : {
            position: "fixed",
            zIndex: "500",
            backgroundColor:"rgba(255,255,255,0.8)",
            width: "70%",
            borderRadius: "20px",
            left: "15%",
            top: "10%",
            boxSizing: "border-box",
            transition: "all 0.3s ease-out",
      }
});

const Modal = props => {
      const classes = useStyles();
      return (
        <>
          <div
            className={classes.root}
            style={{
              transform: props.show
                ? "translateY(0)"
                : " translateY(-100vh)",
              opacity: props.show ? "1" : "0",
            }}
          >
            {props.children}
          </div>
          <Backdrop show={props.show} clicked={props.closeModal} />
        </>
      );
};

export default Modal;