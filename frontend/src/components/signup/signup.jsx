import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
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
	next: {
		marginTop: theme.spacing(1),
		marginLeft: '42%',
		marginRight: '42%',
	},
	error: {
		color: 'red',
	}
}));

export default function Login(props) {
	const [error, setError] = useState(false);
	const classes = useStyles();
	const [email, setEmail] = useState({ emailid: '' });
	const [name, setName] = useState({ name: '' });
	const [phone, setPhone] = useState({ phone: '' });
	const [age, setAge] = useState({ age: '' });
	const [password, setPassword] = useState({ password: '' });
	const [gender, setGender] = useState({ gender: 1 });
	const [usertype, setUser] = useState(false);
	const [showdetails, showDetail] = useState({ showDetails: false });
	const [prooffile, setFile] = useState({ prooffile: null });
	const [prooffilename, setFileName] = useState({ prooffilename: '' });
	const [errorRequired, setErrorRequired] = useState(false);
	const [errorRegex, setErrorRegex] = useState(false);
	const [errorAge, setErrorAge] = useState(false);
	const [errorFile, setErrorFile] = useState(false);
	const [errorUserExists, setErrorUser] = useState(false);
	const handleChange = (event) => {
		setGender(event.target.value);
	};
	const handleEmail = (event) => {
		setEmail(event.target.value);
	};
	const handlePassword = (event) => {
		setPassword(event.target.value);
	};
	const handleName = (event) => {
		setName(event.target.value);
		console.log(name);
	};
	const handlePhone = (event) => {
		setPhone(event.target.value);
	};
	const handleAge = (event) => {
		setAge(event.target.value);
	};
	const handleUserType = (event) => {
		setUser(event.target.checked);
		setFile({ prooffile: null });
		setErrorFile(false);
	};
	const handleFileAdd = (event) => {
		setFile(event.target.files[0]);
		setFileName(event.target.files[0].name);
	};
	function isValid() {
		let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		console.log(email);
		if (!pattern.test(email)) {
			setErrorRegex(true);
			console.log(pattern.test(email));
			return (false);
		}
		return (true);
	}
	function isFilled() {
		if (password.length == 0 || email.length == 0) {
			setErrorRequired(true);
			return (false);
		}
		else
			return (true);
	}
	const handleNext = (event) => {
		setErrorRegex(false);
		setErrorRequired(false);
		if (isValid()) {
			if (isFilled()) {
				if (showdetails) {
					showDetail(false);
				}
				else {

					showDetail(true);
				}
			}
		}
	};
	function isValidData() {
		let letters = new RegExp(/^[ a-zA-Z]+$/);
		let numbers = new RegExp(/^[0-9]+$/);
		if (name.length == 0 || age.length == 0 || phone.length == 0) {
			setErrorRequired(true);
			return (false);
		}
		if (name.length < 2 || !letters.test(name)) {
			setErrorRegex(true);
			return (false);
		}
		if (phone.length != 10 || !numbers.test(phone)) {
			setErrorRegex(true);
			return (false);
		}
		if (age > 120) {
			setErrorAge(true);
			return (false);
		}

		console.log(prooffile);
		if (usertype) {
			if (prooffile == null) {
				setErrorRequired(true);
				console.log(prooffile);
				return (false);
			}
			if (prooffile.type != "application/pdf") {
				setErrorFile(true);
				return (false);
			}
		}
		console.log("no errors");
		return (true);
	}
	const handleSubmit = (event) => {
		setErrorRegex(false);
		setErrorRequired(false);
		setErrorAge(false);
		setErrorFile(false);
		setErrorUser(false);
		setError(false);
		if (isValidData()) {
			if (usertype === true) {
				if (isValid) {
					let form_data = new FormData();
					form_data.append('emailid', email);
					form_data.append('password', password);
					form_data.append('name', name);
					form_data.append('phone', phone);
					form_data.append('age', age);
					form_data.append('gender', gender);
					form_data.append('prooffile', prooffile, prooffilename);
					const putMethod = {
						method: 'POST', // Method itself
						body: form_data
					};
					console.log(putMethod);
					const url = window.location.href + "signup/registertherapist";
					// make the HTTP put request using fetch api
					fetch(url, putMethod)
						.then((response) => {
							if (response.status === 201)
								props.handleTherapistLoginUpdate(email);
							else if (response.status === 400) {
								console.log(response.json);
								setError(true);
							}
							else if (response.status === 206) {
								setErrorUser(true);
							}
							else
								setError(true);
						})
						.catch(err => console.log(err));
				}
			}
			else {
				var userdata = {
					"emailid": email,
					"password": password,
					"name": name,
					"phone": phone,
					"age": age,
					"gender": gender,
				};
				if (isValid) {
					const putMethod = {
						method: 'PUT', // Method itself
						headers: {
							'Content-type': 'application/json; charset=UTF-8', // Indicates the content
						},
						body: JSON.stringify(userdata) // We send data in JSON format
					};
					const url = window.location.href + "signup/registeruser";
					// make the HTTP put request using fetch api
					fetch(url, putMethod)
						.then((response) => {
							if (response.status === 201)
								props.handleLoginUpdate(email);
							else if (response.status === 400)
								setError(true);
							else if (response.status === 206)
								setErrorUser(true);
							else
								setError(true);
						})
						.catch(err => console.log(err));
				}
			}
		}
		//console.log(JSON.stringify(userdata));

	};
	return (
		<Grid container component="main" className={classes.root}>
			{console.log(usertype)}
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7} className={classes.image} />
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
					</Avatar>

					<Typography component="h1" variant="h5">
						Signup
            </Typography>
					<form className={classes.form} noValidate encType="multipart/form-data">
						{console.log(showdetails)}
						{showdetails && (
							<div>
								<TextField
									variant="outlined"
									margin="normal"
									required
									fullWidth
									id="emailid"
									label="Email Address"
									name="emailid"
									autoComplete="email"
									autoFocus
									value={email.length == null ? "" : email}
									onChange={handleEmail}
								/>
								<TextField
									id="password"
									value={password.length == null ? "" : password}
									name="password"
									label="Password"
									type="password"
									variant="outlined"
									required
									fullWidth
									onChange={handlePassword}
								/>
								{errorRegex && <span className={classes.error}>Enter Valid Email address!<br /></span>}
								{errorRequired && <span className={classes.error}>All values required!<br /></span>}

								<Button variant="contained" color="primary" onClick={handleNext} className={classes.next}>
									Next
				</Button>

							</div>
						)}

						{!showdetails && (
							<div>
								<Button variant="contained" color="primary" onClick={handleNext} className={classes.next}>
									Back
				</Button>
								<TextField
									variant="outlined"
									margin="normal"
									required
									fullWidth
									id="name"
									label="Name"
									name="name"
									autoComplete="name"
									onChange={handleName}
									autoFocus
								/>
								<TextField
									variant="outlined"
									margin="normal"
									required
									fullWidth
									id="phone"
									onChange={handlePhone}
									label="Phone Number"
									name="phone"
									autoComplete="phone"
									autoFocus
								/>
								<TextField
									variant="outlined"
									margin="normal"
									required
									fullWidth
									id="age"
									label="Age"
									name="age"
									autoComplete="age"
									onChange={handleAge}
									autoFocus
								/>

								<FormControl component="fieldset">
									<FormLabel component="legend">Gender</FormLabel>
									<RadioGroup aria-label="gender" name="gender1" value={gender} onChange={handleChange}>
										<FormControlLabel value="2" control={<Radio />} label="Female" />
										<FormControlLabel value="1" control={<Radio />} label="Male" />
										<FormControlLabel value="3" control={<Radio />} label="Other" />
									</RadioGroup>
								</FormControl>
								<br></br>
								{console.log(usertype)}
								<FormControlLabel
									control={<Checkbox
										checked={usertype}
										onChange={handleUserType}
										name="usertype"
										id="usertype"
										color="primary"
									/>
									}
									label="Do you want to join as a Professional Therapist?"
								/>
								<br></br>
								{ usertype === true ? <h4>Add a proof document</h4> : null}
								{ usertype === true ? <input required type="file" onChange={handleFileAdd} /> : <h4></h4>}
								{errorRequired && <span className={classes.error}>All values required!<br /></span>}
								{errorRegex && <span className={classes.error}>Enter all valid details!<br /></span>}
								{errorAge && <span className={classes.error}>Enter valid age!<br /></span>}
								{errorFile && <span className={classes.error}>Only PDF document allowed!<br /></span>}
								{errorUserExists && <span className={classes.error}>User already exists!<br /></span>}
								{error && <span className={classes.error}>Server error, please try again later!<br /></span>}

								<Button
									fullWidth
									variant="contained"
									color="primary"
									className={classes.submit}
									onClick={handleSubmit}

								>
									Sign Up
              	</Button>
							</div>
						)}
						<Box mt={5}>
							<Copyright />
						</Box>
					</form>
				</div>
			</Grid>
		</Grid>
	);
}