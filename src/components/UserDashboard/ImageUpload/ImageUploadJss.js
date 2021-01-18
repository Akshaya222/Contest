import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    container:{
          display:'flex',
          justifyContent:'center',
          background:'transparent',
		  width:'100vw',
		  position:'fixed',
			top:'0',
			left: '0',
			right: '0',
			bottom: '0',
			zIndex: '10000',
			alignItems:'center',
			backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    root: {
       width:'620px',
       height:'350px',
       backgroundColor:'#fff',
       margin:'100px',
       borderRadius:'10px'
    },
    topContainer:{
      display:'flex',
      justifyContent:'center',
      height:'72%',
      position:'relative',
      '& $crossButton':{
          position:'absolute',
          right:'0',
      }
    },
    crossButton:{
        color:'#74755f',
    },
    imageContainer:{
        backgroundColor:'#c9ba97',
        height:'100%',
        width:'33%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    profilePic:{
      height:'50%',
      width:'60%',
      borderRadius:'50%',
      background:'#74755f',
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
    },
    avatar:{
        height:'50%',
        width:'60%'
    },
    uploadContainer:{
        height:'28%',
        backgroundColor:'#c9ba97',
        borderRadius:'10px',
        padding:'15px',
        display:'flex',
        alignItems:'center'
    },
    button:{
          backgroundColor:'#fff'
    },
    colorPrimary: {
        backgroundColor: '#fff',
      },
      barColorPrimary: {
        backgroundColor: '#74755f',
      }
  });
