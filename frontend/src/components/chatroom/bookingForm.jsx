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
import { useEffect } from 'react';
import { green } from '@material-ui/core/colors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const useStyles = makeStyles((theme) => ({
    spacing: {
        textAlign: 'center',
    },
    root: {
        flexGrow: 1,
        marginTop: '10px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        flexBasis: '100%',
        color: theme.palette.text.secondary,

    },
    paperbtn: {
        padding: theme.spacing(2),
        textAlign: 'center',
        flexBasis: '100%',
        color: theme.palette.text.secondary,
        cursor: 'pointer',
    },
    griditem: {
        textAlign: 'center',
    },
    maindiv: {
        width: '-webkit-fill-available',
        marginRight: '75px',
    },
    select: {
        width: 'fit-content',
    },
    confirmbtn: {
        backgroundColor: "#00d52a",
        padding: theme.spacing(2),
        textAlign: 'center',
        flexBasis: '100%',
        color: theme.palette.text.secondary,
        cursor: 'pointer',
    }
}));



export default function SessionForm(props) {
    const [emailid, setEmail] = useState({ emailid: props.emailid });
    const [therapist, setTherapist] = useState({ therapist: props.therapist });
    const [content, setContent] = useState({ content: 4 });
    const [therapists, setTherapists] = useState({ therapists: [] });
    const classes = useStyles();
    const [sessions, setSessions] = useState({ sessions: [] });
    const [selectedsession, setSelectedSession] = useState();
    const [setbtn, setButton] = useState(0);

    function randomName() {
        var min = 0;
        var max = 4;
        var rand = min + (Math.random() * (max - min));

        var names = ['Jethalal', 'Iyerdi', 'Popatlal', 'Mehtus', 'Tapu'];
        console.log(names[Math.round(rand)]);
        return names[Math.round(rand)];

    }

    async function selectTherapist() {
        console.log(content.content);
        const getMethod = {
            method: 'GET', // Method itself
            headers: {
                'Content-type': 'application/json; charset=UTF-8', // Indicates the content
            } // We send data in JSON format
        };
        const url = window.location.href + "signup/gettherapists";
        await fetch(url, getMethod)
            .then(async (response) => {
                await response.json().then(async data => {
                    await setTherapists({ therapists: data });
                    await setContent({ content: 1 });
                });
            });
        console.log(content.content);
    }

    async function bookSession() {
        let request = {
            "therapist": therapist.therapist
        };
        const postMethod = {
            method: 'POST', // Method itself
            headers: {
                'Content-type': 'application/json; charset=UTF-8', // Indicates the content
            }, // We send data in JSON format
            body: JSON.stringify(request)
        };
        console.log(postMethod);
        const url = window.location.href + "signup/gettherapistsessions";
        // make the HTTP put request using fetch api
        await fetch(url, postMethod)
            .then(async (response) => {
                await response.json().then(async data => {
                    await setSessions({ sessions: data })
                    await setContent({ content: 2 });
                });
            });
    }
    async function checkUserType() {
        if (therapist.therapist === '') {
            console.log(content.content);
            await selectTherapist();
            await setContent({ content: 1 });
            await console.log(content.content);
        }
        else
            bookSession();

    }
    useEffect(() => {
        if (!props.fetched) {
            console.log("ths");
            checkUserType();
        }
    }, []);
    const putTherapist = (event) => {
        const email = event.currentTarget.id;
        let requestData = {
            "emailid": emailid.emailid,
            "therapist": email
        };
        const putMethod = {
            method: 'PUT', // Method itself
            headers: {
                'Content-type': 'application/json; charset=UTF-8', // Indicates the content
            }, // We send data in JSON format
            body: JSON.stringify(requestData)
        };
        console.log(putMethod);
        const url = window.location.href + "signup/updatetherapist";
        fetch(url, putMethod)
            .then(async (response) => {
                if (response.status == 200)
                    setContent({ content: 2 });
                toast.success('Therapist Successfully Selected!');
            });

    }


    function showSessions() {
        let today = new Date();
        //console.log(today);
        let date = today.getDate();
        //console.log(date);
        //console.log(date + 1);
        let month = today.getMonth() + 1;
        let year = today.getFullYear();
        //console.log(month);
        let datesDisplay = [];

        if (date == 31) {
            date = 0;
            if (month == 12)
                month = 1;
            else month++;
        }
        if (date == 30) {
            if (month <= 7 && month % 2 == 0) {
                month++;
                date = 0;
            }
            if (month >= 8 && month % 2 != 0) {
                month++;
                date = 0;
            }
        }
        if (date == 28) {
            if (month == 2) {
                if (year % 4 != 0) {
                    date = 0;
                    month++;
                }
            }
        }
        for (let i = 1; i <= 5; i++) {

            let sessionid = {
                dt: ++date,
                mn: month,
                yr: year,
            };
            //console.log(sessionid.time);
            datesDisplay.push(
                <Grid container item xs={16} spacing={2}>
                    <React.Fragment>
                        <Grid item xs={2}>
                            <Paper className={classes.paper}>{date} / {month} / {year}</Paper>
                        </Grid>
                        <Grid item xs={1.7}>
                            <Paper className={classes.paper} id={JSON.stringify(sessionid)} data-time={8} onClick={selectTiming}>08:00 HRS</Paper>
                        </Grid>
                        <Grid item xs={1.7}>
                            <Paper className={classes.paper} id={JSON.stringify(sessionid)} data-time={9} onClick={selectTiming}>09:00 HRS</Paper>
                        </Grid>
                        <Grid item xs={1.7}>
                            <Paper className={classes.paper} id={JSON.stringify(sessionid)} data-time={10} onClick={selectTiming}>10:00 HRS</Paper>
                        </Grid>
                        <Grid item xs={1.7}>
                            <Paper className={classes.paper} id={JSON.stringify(sessionid)} data-time={11} onClick={selectTiming}>11:00 HRS</Paper>
                        </Grid>
                        <Grid item xs={1.8}>
                            <Paper className={classes.paper} id={JSON.stringify(sessionid)} data-time={14} onClick={selectTiming}>14:00 HRS</Paper>
                        </Grid>
                        <Grid item xs={1.8}>
                            <Paper className={classes.paper} id={JSON.stringify(sessionid)} data-time={15} onClick={selectTiming}>15:00 HRS</Paper>
                        </Grid>
                    </React.Fragment>
                </Grid>
            );
            if (date == 30) {
                if (month <= 7 && month % 2 == 0) {
                    date = 0;
                    month++;
                }
                if (month >= 8 && month % 2 != 0) {
                    date = 0;
                    month++;
                }
            }
            else if (date == 31) {
                if (month <= 7 && month % 2 != 0) {
                    date = 0;
                    month++;
                }
                if (month >= 8 && month % 2 == 0) {
                    date = 0;
                    month++;
                    if (month == 13) {
                        month = 1;
                        year++;
                    }
                }
            }
            else if (date == 28 || date == 29) {
                if (month == 2 && year % 4 != 0) {
                    month++;
                    date = 0;
                }
                if (month == 2 && year % 4 == 0 && date == 29) {
                    month++;
                    date = 0;
                }
            }
        }
        return (
            <div className={classes.maindiv}>
                {datesDisplay}
            </div>
        );

    }

    async function selectTiming(event) {
        console.log(event.currentTarget.dataset.time);
        let eventdata = JSON.parse(event.currentTarget.id);
        //console.log(eventdata["dt"]);
        let timings = {
            "useremail": emailid.emailid,
            "therapistemail": therapist.therapist,
            "date": eventdata["dt"],
            "month": eventdata["mn"],
            "year": eventdata["yr"],
            "time": parseInt(event.currentTarget.dataset.time),
            "roomid": "1jd6umj3ytz",
        };
        setButton(1);
        console.log(timings);
        console.log(parseInt(event.currentTarget.dataset.time));
        await setSelectedSession(timings);
    }

    async function putSlot(event) {
        const postMethod = {
            method: 'POST', // Method itself
            headers: {
                'Content-type': 'application/json; charset=UTF-8', // Indicates the content
            }, // We send data in JSON format
            body: JSON.stringify(selectedsession)
        };
        console.log(postMethod);
        const url = window.location.href + "signup/addsession";
        // make the HTTP put request using fetch api
        await fetch(url, postMethod)
            .then(async (response) => {
                if (response.status === 201)
                    setContent({ content: 3 });
                else
                    console.log(response);
            });
    }
    function showTherapists() {

        return (
            therapists.therapists.therapists.map((t) => (
                <Grid container item xs={16} spacing={3}>
                    <React.Fragment>
                        <Grid item xs={4}>
                            <Paper className={classes.paper}>Anonymous Name: {randomName()}</Paper>
                        </Grid>
                        <Grid item xs={5}>
                            <Paper className={classes.paper}>Gender: {t.gender == 1 ? <span>Male</span> : <span>Female</span>}Age: {t.age}</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            {console.log(t.emailid)}
                            <Paper className={classes.paperbtn} id={t.emailid} onClick={putTherapist}>Select Me</Paper>
                        </Grid>
                    </React.Fragment>
                </Grid>
            ))
        );
    }
    return (
        <div>
            <Grid container spacing={1}>

                {content.content === 1 ? <>Select one of the therapists {showTherapists()}</> : null}
                {content.content === 2 ? showSessions() : null}

                {content.content === 3 ? (<div>Session Slot Confirmed !</div>) : null}


            </Grid>


            {setbtn == 1 ?
                <div className={classes.select}>
                    <Paper className={classes.paper}> Selected Slot:{selectedsession.date}/{selectedsession.month}/{selectedsession.year} - {selectedsession.time}:00 HRS</Paper>
                    <br />
                    {content.content != 3 ? <Paper className={classes.confirmbtn} onClick={putSlot}>Confirm Slot</Paper> : null}
                </div>
                : null}

        </div>
    );
}
