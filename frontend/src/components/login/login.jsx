import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="#">
				ManoVaidya
        </Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}



const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh',
	},
	image: {
		backgroundImage: 'url(https://source.unsplash.com/random)',
		backgroundRepeat: 'no-repeat',
		backgroundColor:
			theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	error: {
		color: 'red',
	}
}));

export default function Login(props) {
	const classes = useStyles();
	const [emailid, setEmail] = useState({ emailid: '' });
	const [errorIncorrect, setErrorIncorrect] = useState(false);
	const [errorInvalid, setErrorInvalid] = useState(false);
	const [errorInternal, setErrorInternal] = useState(false);
	const [errorRequired, setErrorRequired] = useState(false);
	const [password, setPassword] = useState({ password: '' });

	const handleEmail = (event) => {
		setEmail(event.target.value);
	};

	const handlePassword = (event) => {
		setPassword(event.target.value);
	};

	const handleSubmit = (event) => {
		setErrorIncorrect(false);
		setErrorInternal(false);
		setErrorInvalid(false);
		setErrorRequired(false);
		var userdata = {
			"emailid": emailid,
			"password": password
		};
		console.log(userdata["password"].length);
		if (userdata["emailid"].length == 0 || userdata["password"].length == 0) {
			setErrorRequired(true);
		}
		else {
			const putMethod = {
				method: 'PUT', // Method itself
				headers: {
					'Content-type': 'application/json; charset=UTF-8', // Indicates the content
				},
				body: JSON.stringify(userdata) // We send data in JSON format
			};
			const url = window.location.href + "signup/login";
			// make the HTTP put request using fetch api
			fetch(url, putMethod)
				.then(async (response) => {
					if (response.status === 200)
						props.handleLoginUpdate(emailid);
					else if (response.status === 201)
						props.handleTherapistLoginUpdate(emailid)
					else if (response.status === 400) {
						console.log("error" + response.status);
						await setErrorInvalid(true);
					}
					else if (response.status === 206) {
						console.log("error" + response.status)
						await setErrorIncorrect(true);
					}
					else {
						console.log("error" + response.status);
						await setErrorInternal(true);
					}
				})
				.catch(err => console.log(err));
		}
	};
	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7} className={classes.image} />
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
					</Avatar>
					<Typography component="h1" variant="h5">
						Login
            </Typography>
					<form className={classes.form} noValidate>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							onChange={handleEmail}
							autoComplete="email"
							autoFocus
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							onChange={handlePassword}
							autoComplete="current-password"
						/>

						{errorIncorrect && <span className={classes.error}> Incorrect Credentials<br /></span>}
						{errorInvalid && <span className={classes.error}> Invalid Credentials<br /></span>}
						{errorInternal && <span className={classes.error}> Internal error, please try agaon after sometime!<br /></span>}
						{errorRequired && <span className={classes.error}>All Fields Required<br /></span>}
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/>
						<Button
							onClick={handleSubmit}
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							Sign In
              </Button>
						<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
									Forgot password?
                  </Link>
							</Grid>
							<Grid item>
								<Link href="#" variant="body2">
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
						<Box mt={5}>
							<Copyright />
						</Box>
					</form>
				</div>
			</Grid>
		</Grid>
	);
}