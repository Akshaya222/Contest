import React from 'react';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { navigate } from "@reach/router";
import ContestImg1 from '../../assets/images/BannerWeb.png'
import ContestImg2 from '../../assets/images/BannerWeb1.png'
import ContestImg3 from '../../assets/images/BannerWeb2.jpg'
import ContestImg4 from '../../assets/images/BannerWeb3.jpg'
import ContestImg5 from '../../assets/images/BannerWeb4.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
	marginRight:'4rem',
	marginLeft:'4rem'
  },
  gridList: {
    flexWrap: 'wrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  },
  contestPic:{
	width:'40vw',
	height:'auto',
	margin:'1rem 0 3rem auto',
  },
  titleBar: {
	 borderBottom:'2px solid yellow',
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  button: {
    margin: theme.spacing(1),
  },
  registerNow:{
	  backgroundColor: "black",
	  color:'white',
	 '&:hover':{
		
		  '@media (hover: none)': {
        backgroundColor: 'black',
      },
	}
  }
}));

export default function ContestDetail(){
	
	 const classes = useStyles();
	
	const tileData = [
		{
		  img: ContestImg2,
		  title: 'Contest 1',
		  author: 'author',
		},
		{
		  img: ContestImg3,
		  title: 'Contest 2',
		  author: 'author',
		},
		{
		  img: ContestImg4,
		  title: 'Contest 3',
		  author: 'author',
		},
		{
		  img: ContestImg5,
		  title: 'Contest 4',
		  author: 'author',
		}
	]
	
	return(
	  <div className={classes.root} >
		  <div style={{width:'100vw',display:'flex',justifyContent:'space-between'}}>
			<div style={{display:'flex',justifyContent:'center',flexDirection:'column',marginLeft:'2rem',whiteSpace:'break-spaces'}} >
				<h1 style={{color:'#ff3c00d1',fontSize:'3.5rem'}} >Rap Battle</h1>
				
				
				<p style={{marginBottom:'-1rem'}}>Start Date   16 Feb 2021 </p>
				<p style={{marginBottom:'-1rem'}} >End Date    20 Feb 2021</p>
				<p style={{marginBottom:'-1rem'}} >Slots    10 </p>
				<p style={{marginBottom:'-1rem'}} >Fee Rs 349 </p>
				<Button  onClick={() => {
								//temporary		
								if(localStorage.getItem('user')){
									navigate('/upload')
								}else{
									navigate('/')
								}
								
						}} 
				className={classes.registerNow}  variant="contained" style={{backgroundColor:"#f2c700",color:'white',borderRadius:'20px',width:'10rem',fontSize:'0.8rem',fontWeight:'800',height:'2.8rem',marginTop:'4rem'}} ><span style={{zIndex:'8888888',color:'black'}} >Register Now</span></Button>
			
				
			</div>
			<img className={classes.contestPic} src={ContestImg1} alt='contest' />
		  </div>
		 <div>	
			
		   <h1 style={{textAlign:'center',borderBottom:'1px solid yellow'}} >Previous Contests ....</h1>
			 
			 <GridList className={classes.gridList} cols={3} spacing={100}>
				{tileData.map((tile) => (
				  <GridListTile key={tile.img} style={{margin:'0 auto'}} >
					<img src={tile.img} alt={tile.title} />
					<GridListTileBar
					  title={tile.title}
					  classes={{
						root: classes.titleBar,
					  }}
					  actionIcon={
						<IconButton aria-label={`star ${tile.title}`}>
						  <StarBorderIcon className={classes.title} />
						</IconButton>
					  }
					/>
				  </GridListTile>
				))}
			  </GridList>
			</div>
		</div>
	)
}