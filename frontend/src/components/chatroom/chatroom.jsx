import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';

import { useImage } from 'react-image';
import Grid from '@material-ui/core/Grid';
import { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import UserChatroom from './user';
import TherapistChatroom from './therapist';

import ReactSession from 'react-client-session/dist/ReactSession';

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
    imagediv: {
        backgroundImage: 'url(/session.png)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
    },
}));

export default function Chatroom(props) {
    const classes = useStyles();
    const [emailid, setEmail] = useState({ emailid: props.emailid });
    const [usertype, setType] = useState({ usertype: props.usertype });//ReactSession.get("usertype") });

    /*
    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleType = (event) => {
        setType(event.target.value);
    };
    */



    //{usertype.usertype === 1 ? <UserChatroom emailid={emailid.emailid} /> : <h2></h2>}
    //    {usertype.usertype === 2 ? <TherapistChatroom connection={props.connection} emailid={emailid.emailid} /> : <h2></h2>}

    return (
        <div>
            {console.log(usertype.usertype)}
            <div className={classes.imagediv}></div>
            <UserChatroom emailid={emailid.emailid} usertype={usertype.usertype} />
            <Box mt={5}>
                <Copyright />
            </Box>
        </div>

    );
}