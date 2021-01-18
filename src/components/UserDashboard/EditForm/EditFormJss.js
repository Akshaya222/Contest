import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      position:'fixed',
	   top:'0',
		 left: '0',
		 right: '0',
		 bottom: '0',
	   zIndex: '100',
	  	backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    avatar:{
      height:'110px',
      width:'110px',
     // margin:'20px',
      marginBottom:'12px',
      display:'block'
   },
   imageDiv:{
      display:'flex',
      height:'100%',
      justifyContent:'center',
      alignItems:'center',
      position:'relative',
      "& $addImageIcon":{
        position:'absolute',
      }
  },
   addImageIcon:{
      marginLeft:'50px',
      marginTop:'80px',
       color:'#4f4c47'
     },
     labelAsterisk: {
      color: "red"
    },
    inputLabel:{
        color:'#000',
        fontWeight:'bold',
        fontSize:'18px',
        marginTop:'4px',
        fontFamily:'galano'
    },
    formGroup:{
        margin:'15px',
        display:'flex',
        justifyContent:'space-between',
    },
    textField:{
        width:'80%'
    },
    button:{
      background:'#f3c800',
      color:'#000',
      fontWeight:'bolder',
      marginBottom:'15px',
      '&:hover':{
          background:'#fff !important',
      },
      marginTop:'10px',
      marginRight:'10px',
  }
  });
  
  