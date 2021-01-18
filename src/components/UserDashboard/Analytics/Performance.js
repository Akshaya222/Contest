import React,{useState} from 'react';
import ProgressBar from './ProgressBar';
import {Grid} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Calendar from 'react-calendar';
import {Line} from 'react-chartjs-2';
import { StylesProvider } from "@material-ui/core/styles";
import './Calendar.css';

const useStyles = makeStyles({
	root:{
		marginTop:'0rem',
	},
	calendar:{
		backgroundColor:'white-smoke',
		width:'300px',
		height:'310px',
		fontSize:'0.9rem',
		marginTop:'1rem'
	},
	scatterChart:{
		width:'100%',
	}
});

export default function Performance(){
	
	const classes = useStyles();
	const [value, onChange] = useState(new Date());

	 const data = {
		  labels: ['Rap Battle 1', 'Rap Battle 2', 'Rap Battle 3', 'Rap Battle 4'],
		  datasets: [
			{
			  label: 'Performance',
			  fill: false,
			  lineTension: 0.1,
			  backgroundColor: 'rgba(75,192,192,0.4)',
			  borderColor: '#f3c700',
			  borderCapStyle: 'butt',
			  borderDash: [],
			  borderDashOffset: 0.0,
			  borderJoinStyle: 'miter',
			  pointBorderColor: '#f3c700',
			  pointBackgroundColor: '#f3c700',
			  pointBorderWidth: 1,
			  pointHoverRadius: 5,
			  pointHoverBackgroundColor: '#ffffff',
			  pointHoverBorderColor: '#f3c700',
			  pointHoverBorderWidth: 2,
			  pointRadius: 5,
			  pointHitRadius: 10,
			  data: [65, 59, 80, 81]
			}
		  ]
		};

	
	return(	
	   <StylesProvider injectFirst>
		<Grid container  className={classes.root} >
			<Grid item xs={12}  style={{display:'flex',justifyContent:'space-between',backgroundColor:'white'}} >
			  <Grid item xs={12}  style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around',marginBottom:'2rem'}} >
				  <ProgressBar value={30} label={'Audio'}  />				  
				  <ProgressBar value={60} label={'Video'} />				 		  
				  <ProgressBar value={90} label={'Contest'}  />
				  <Calendar
				    className={classes.calendar}
					formatShortWeekday={(locale, date) => {
						console.log(locale);
						console.log(date);
						return date.toDateString()[0];
					}}
					onChange={onChange}
					value={value}
				  />
			  </Grid>			  
			</Grid>	 
			<Grid sm={12}  >
				<Line data={data}  className={classes.scatterChart} />
			</Grid>	
		</Grid>	
	 </StylesProvider>
	)
}