import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root:{
       minHeight:'100vh',
	   width:'100%',
       display:'flex',
	   marginTop:'-8rem',
	   justifyContent:'center',
       alignItems:'center',
    },
    card: {
      minWidth: '350px',
      margin:'30px',
      borderRadius:'15px'
    },
    avatar:{
        height:'110px',
        width:'110px',
        margin:'20px',
        marginBottom:'12px',
        display:'block'
  },
  imageDiv:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
	    marginBottom:'0.5rem',
      position:'relative',
      "& $addImageIcon":{
        position:'absolute',
      }
  },
  addImageIcon:{
     marginLeft:'50px',
     marginTop:'110px',
     color:'#4f4c47'
  },
  Details:{
      display:'flex',
      justifyContent:'space-between'
  },
  font:{
      fontSize:'15px',
      color:'#101211',
      fontWeight:'bold',
      fontFamily:'galano'
  },
  fontSmall:{
    fontSize:'14px',
    color:"#2a2b2b",
    fontFamily:'galano'
  },
 button:{
      background:'#f3c800',
      color:'#000',
      padding:'12px 16px',
      fontWeight:'bolder',
      marginTop:'-2rem',
      marginBottom:'15px',
      '&:hover': {
        backgroundColor:'#fff !important'
    }
  },
  icons:{
      color:'#8a7171',
      fontFamily:'galano'
  }
  });