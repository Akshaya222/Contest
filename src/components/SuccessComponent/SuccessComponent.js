import React from 'react';
import Container from "@material-ui/core/Container";
import icon from "../../assets/images/message.svg";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    width: "168px",
    height: "50px",
    background: "#f3c800",
    borderRadius: "30px",
    fontWeight: "bold",
  },
  title: {
    color: "#f3c800",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  usercard: {
    maxWidth: 400,
  },
}));

const SuccessComponent = () => {
      const classes = useStyles();

    //  const [expanded, setExpanded] = React.useState(false);
      const [value, setValue] = React.useState(2);

 /* const handleExpandClick = () => {
    setExpanded(!expanded);
  };*/
      return (

        <div className={classes.card}>
          <Grid container spacing={3}>
        <Grid item xs={6}>
        <center className={classes.root} style={{marginTop:100}}>
          <Container maxWidth="sm">
            <img src={icon} alt="mic" />
            <h1 className={classes.title}>
              Congratulations! You have <br /> successfully uploaded your video.
            </h1>
            <br />
            <p>
              Please check your mail for the confirmation of participation 
              <br />
              and other details about the contest.
            </p>
            <br />
            <Button
              variant="contained"
              color="inherit"
              className={classes.button}
              onClick = {() => window.location.href = 'https://imjo.in/45ht55'}
            >
              Pay Now
            </Button>
            <Box component="fieldset" mb={3} borderColor="transparent" style={{marginTop:80}}>
              <center>
        <Typography component="legend">Please rate Us</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        </center>
      </Box>
          </Container>
        </center>    
         </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}style={{ height: 1000 , backgroundColor:'#F3C800' }}>
          <Button variant="outlined" color="black" style={{border:'3px solid white', marginLeft:500 , borderRadius:15}}>
              LOGOUT
          </Button>
          <Card className={classes.usercard} style={{margin: 150}}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Artist Name"
        subheader="Contest Name"
      />
      <CardMedia
        className={classes.media}
        image="data:image/jpeg;base64,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"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Song Name.
        </Typography>
      </CardContent>
     
    </Card>
          </Paper>
        </Grid>
        </Grid>
        
        </div>

       
      );
};

export default SuccessComponent;