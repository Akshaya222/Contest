import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import MainComponent from "../MainComponent/MainComponent";
import UploadComponent from "../UploadComponent";
import { Router } from "@reach/router";
import SocialLoginComponent from "../SocialLoginComponent/SocialLoginComponent";
import Privacy from "../FooterComponent/Privacy";
import DataDeletion from "../FooterComponent/DataDeletion";
import Terms from "../FooterComponent/Terms";
import Refund from "../FooterComponent/Refund";
import ContactForm from "../FooterComponent/ContactForm";
import Contest from "../Contest/ContestDetail";
import ContestRegistration from "../Contest/ContestRegistration";
import AboutUs from "../AboutUs/AboutUs";
import Pricing from '../Pricing/Pricing';
import UserDashboard from '../UserDashboard/UserDashboard';
import ContestPage from '../ContestPage/ContestPage';

const useStyles = makeStyles({
  root: {
    backgroundColor:"White",
    width: "100%",
	height:'auto'
  },
});

const HomeComponent = () => {
      const classes = useStyles();
	 
      return (
        <div className={classes.root}>
		  {/* <Header /> */}
		  
          <Router>
			<Privacy path="/privacy" />
			<DataDeletion path="/datadeletion" />
			<Pricing path="/payment" />
			<ContestRegistration path="/contest/register" />
			<Contest path="/contest" />
			<AboutUs path="/about" />
			<ContactForm path="/contact" />
			<Terms path="/terms" />
			<Refund path="/refund" />
			<UserDashboard path="/user/dashboard" />
			<SocialLoginComponent path="/user/auth/*" />
            <UploadComponent path="/upload" />
			<MainComponent exact path="/" />
			<ContestPage path="contestpage"/>
          </Router>
		 
        </div>
      );
};

export default HomeComponent;