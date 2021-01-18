import React, {useState, useRef} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
  heading: {
    fontSize: "25px",
    color: "#f3c800",
    textAlign: "center",
  },
  input: {
    padding: "15px 20px",
    border: "none",
    borderRadius: " 24px",
    marginTop: "10px",
    fontWeight: "bold",
    background: "#ddd",
  },
  label: {
    fontSize: "13px",
    color: "#333",
    paddingLeft: "20px",
    letterSpacing: "0.05rem",
    marginLeft: "-70px",
  },
  submitButton: {
    width: "168px",
    height: "50px",
    background: "#f3c800",
    borderRadius: "30px",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
  },
});

const CreatePasswordComponent = props => {
	  const classes = useStyles();
      const [error, setError] = useState(false);
    /*   const password = useRef();
      const confirmPassword = useRef(); */
	  const [password, setPassword] = useState("");
     const [confirmPassword, setConfirmPassword] = useState("");
    /*   const passwordHandler = (e) => {
          e.preventDefault();
          if (password.current.value === confirmPassword.current.value) {
            props.submit();
            setError(false);
          } else {
            setError("Password does not match");
          }
      } */
	  
  const submitHandler = (e) => {
	  e.preventDefault();
	  if(!password  || !confirmPassword || password !== confirmPassword){
			setError('Please Check your details'); 
			return;
	  }
      if (password.length > 0 ) {
        authContext.turnOnLoader();
        axios
          .post(`${authContext.baseUrl}/user/register`, {
            username: email,
            name: name,
            password: password,
          })
          .then(function (response) {
            authContext.turnOffLoader();
            console.log(response.data);
            localStorage.setItem("user", JSON.stringify(response.data.data));
            authContext.login();
            navigate('/upload');
          })
          .catch(function (error) {
            authContext.turnOffLoader();
			if(error && error.response ){
				setError(error.response.data.message);
			}
				setError('Unable to Fetch')
            //toggleRegistering();
          });
      }
    }
	  
      return (
        <Container maxWidth="sm" className={classes.root}>
          <center>
            {error && <h4 style={{ color: "red" }}>{error}</h4>}
            <br />
            <form action="#" className="form">
              <h1 className={classes.heading}>Create your password</h1>
              <br />
              <br />
              <label htmlFor="password" className={classes.label}>
                Enter Password
              </label>
              <br />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="* * * * * * * * *"
                className={classes.input}
                onChange={(e) => props.password(e.target.value)}
                minLength="6"
                ref={password}
              />

              <br />
              <br />
              <br />

              <label htmlFor="confirmPassword" className={classes.label}>
                Retype Password
              </label>
              <br />
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="* * * * * * * * *"
                className={classes.input}
                onChange={(e) => props.confirmPassword(e.target.value)}
                minLength="6"
                ref={confirmPassword}
              />

              <br />
              <br />
              <br />
              <br />
              <center>
                <input
                  type="submit"
                  value="Create Password"
                  className={classes.submitButton}
                  onClick={passwordHandler}
                />
              </center>
            </form>
          </center>
        </Container>
      );
};

export default CreatePasswordComponent;