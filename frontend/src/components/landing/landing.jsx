import React from 'react';
import Signup from '../../components/signup/signup';
import Login from '../../components/login/login';
import Chatroom from '../../components/chatroom/chatroom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';
import { Grid, SwipeableDrawer, List, ListItem, withTheme } from '@material-ui/core';
import { Suspense } from 'react';
import { useImage } from 'react-image';
import homeimg from '../../imgs/homeimg.jpg';
import logo from '../../imgs/logo.png';
import ReactSession from 'react-client-session/dist/ReactSession';
import MySurvey from '../survey/survey';
import Selfcare from '../../components/selfcare/selfcare';
import Yoga from '../selfcare/yoga';
import Quotes from '../selfcare/quotes';
import Stories from '../selfcare/stories';
import Meditate from '../selfcare/meditate';
import Chatbot from '../../components/chatbot/chatbot';
import RTCMultiConnection from 'rtcmulticonnection';



function HomeImageComponent() {
  const { src } = useImage({
    srcList: homeimg,
  })

  return (
    <img src={src} alt='home' loader={<div>Loading..</div>} />
  )
}

function LogoComponent() {
  const { src } = useImage({
    srcList: logo,
  })
  return (
    <img src={src} height='70px' />
  )
}


const styles = makeStyles((theme) => ({
  anchorSpacing: {
    marginLeft: '10px',
  },

  logoPadding: {
    padding: '0px 5px 0px 10px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

//let connection = new RTCMultiConnection();

class Landing extends React.Component {

  constructor(props) {
    super(props);
    ReactSession.setStoreType("localStorage");
    this.state = {
      drawerActivate: false,
      drawer: false,
      loggedin: ReactSession.get("emailid") == null ? false : true,
      emailid: ReactSession.get("emailid"),
      content: 0,
      usertype: ReactSession.get("usertype") == null ? 0 : ReactSession.get("usertype"),
      handleLoginUpdate: this.handleLoginUpdate.bind(this),
      handleTherapistLoginUpdate: this.handleTherapistLoginUpdate.bind(this),
      handleYogaClick: this.handleYogaClick.bind(this),
      handleQuotesClick: this.handleQuotesClick.bind(this),
      handleStoriesClick: this.handleStoriesClick.bind(this),
      handleMeditateClick: this.handleMeditateClick.bind(this),
    };
  }
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-3.2.1.min.js";
    script.async = true;
    document.body.appendChild(script);
    const script2 = document.createElement("script");
    script2.src = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js";
    script2.async = true;
    document.body.appendChild(script2);

    var sheet = document.createElement('link');
    sheet.rel = 'stylesheet';
    sheet.href = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
    sheet.type = 'text/css';
    //  document.head.appendChild(sheet);

    const script4 = document.createElement("script");
    script4.src = "https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js";
    script4.async = true;
    document.body.appendChild(script4);
    const script5 = document.createElement("script");
    script5.src = "https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js";
    script5.async = true;
    document.body.appendChild(script5);

    //Kartik merge
    //let connection = new RTCMultiConnection();
    const script6 = document.createElement("script");
    script6.src = "https://rtcmulticonnection.herokuapp.com/dist/RTCMultiConnection.min.js";
    script6.async = true;
    document.body.appendChild(script6);
    const script7 = document.createElement("script");
    script7.src = "https://rtcmulticonnection.herokuapp.com/socket.io/socket.io.js";
    script7.async = true;
    document.body.appendChild(script7);
  }

  handleLoginUpdate(someArg) {
    ReactSession.setStoreType("localStorage");
    ReactSession.set("emailid", someArg);
    ReactSession.set("usertype", 1);
    this.setState({
      emailid: someArg,
      loggedin: true,
      usertype: 1,
      content: 0,
    });
  }
  handleTherapistLoginUpdate(someArg) {
    ReactSession.setStoreType("localStorage");
    ReactSession.set("emailid", someArg);
    ReactSession.set("usertype", 2);
    this.setState({
      emailid: someArg,
      loggedin: true,
      content: 0,
      usertype: 2,
    });

  }
  handleLogin = (event) => {
    if (!this.state.loggedin)
      this.setState({
        content: 2,
      });
  }
  handleSignup = (event) => {
    if (!this.state.loggedin)
      this.setState({
        content: 1,
      });
  }
  handleLoggedin = (event) => {
    if (this.state.loggedin) {
      ReactSession.setStoreType("localStorage");
      ReactSession.set("emailid", null);
      this.setState({
        emailid: null,
        loggedin: false,
        content: 0,
        usertype: 0,
      });
    }

  }
  handleChatroom = (event) => {
    if (this.state.loggedin)
      this.setState({
        content: 10,
      });
    else
      this.setState({
        content: 2,
      });
  }
  handleYogaClick = (event) => {
    this.setState({
      content: 5,//for yoga
    });

  }
  handleQuotesClick = (event) => {
    this.setState({
      content: 6,//for quotes
    });

  }
  handleStoriesClick = (event) => {
    this.setState({
      content: 7,//for stories
    });

  }
  handleMeditateClick = (event) => {
    this.setState({
      content: 8,//for stories
    });

  }
  handleSurvey = (event) => {
    this.setState({
      content: 3,
    });
  }
  handleSelfcare = (event) => {
    this.setState({
      content: 4,
    });
  }
  handleChatbot = (event) => {
    this.setState({
      content: 9,
    });
  }
  handleLogo = (event) => {
    if (!this.state.loggedin)
      this.setState({
        content: 0,
      });
  }

  mySwitch = (param) => {
    switch (param) {
      case 1:
        return (<Signup handleLoginUpdate={this.state.handleLoginUpdate} handleTherapistLoginUpdate={this.state.handleTherapistLoginUpdate} />);
      case 2:
        return (<Login handleLoginUpdate={this.state.handleLoginUpdate} handleTherapistLoginUpdate={this.state.handleTherapistLoginUpdate} />);
      case 3:
        return (<MySurvey />);
      case 4:
        return (<Selfcare handleYoga={this.state.handleYogaClick} handleQuotes={this.state.handleQuotesClick} handleStories={this.state.handleStoriesClick} handleMeditate={this.state.handleMeditateClick} />);
      case 5:
        return (<Yoga handleYoga={this.state.handleYogaClick} handleQuotes={this.state.handleQuotesClick} handleStories={this.state.handleStoriesClick} handleMeditate={this.state.handleMeditateClick} />);
      case 6:
        return (<Quotes handleYoga={this.state.handleYogaClick} handleQuotes={this.state.handleQuotesClick} handleStories={this.state.handleStoriesClick} handleMeditate={this.state.handleMeditateClick} />);
      case 7:
        return (<Stories handleYoga={this.state.handleYogaClick} handleQuotes={this.state.handleQuotesClick} handleStories={this.state.handleStoriesClick} handleMeditate={this.state.handleMeditateClick} />);
      case 8:
        return (<Meditate handleYoga={this.state.handleYogaClick} handleQuotes={this.state.handleQuotesClick} handleStories={this.state.handleStoriesClick} handleMeditate={this.state.handleMeditateClick} />);
      case 9:
        return (<Chatbot />);
      case 10: console.log(this.state.usertype);
        return (<Chatroom emailid={this.state.emailid} usertype={this.state.usertype} />);
      default: return (<Suspense fallback={<div>Loading...</div>}>
        <HomeImageComponent />
      </Suspense>);
    }
  }
  /*componentWillMount(){
      if(window.innerWidth <= 600){
        this.setState({drawerActivate:true});
      }
  
      window.addEventListener('resize',()=>{
        if(window.innerWidth <= 600){
          this.setState({drawerActivate:true});
        }
        else{
          this.setState({drawerActivate:false})
        }
      });
    }
  
    //Small Screens
    createDrawer(){
      return (
        <div>
          <AppBar >
            <Toolbar>
              <Grid container direction = "row" justify = "space-between" alignItems="center">
                <Button
                  className = {this.props.classes.sideBarIcon}
                  onClick={()=>{this.setState({drawer:true})}} >
                    MV
                    </Button>
  
                <Typography color="inherit" variant = "headline">ManoVaidya</Typography>
                <Typography color="inherit" variant = "headline"></Typography>
              </Grid>
            </Toolbar>
          </AppBar>
  
          <SwipeableDrawer
           open={this.state.drawer}
           onClose={()=>{this.setState({drawer:false})}}
           onOpen={()=>{this.setState({drawer:true})}}>
  
             <div
               tabIndex={0}
               role="button"
               onClick={()=>{this.setState({drawer:false})}}
               onKeyDown={()=>{this.setState({drawer:false})}}>
  
              <List className = {this.props.classes.list}>
                 <ListItem key = {1} button divider> Option 1 </ListItem>
                 <ListItem key = {2} button divider> Option 2 </ListItem>
                 <ListItem key = {3} button divider> Option 3 </ListItem>
               </List>
  
           </div>
         </SwipeableDrawer>
  
        </div>
      );
    }
  
    //Larger Screens
    destroyDrawer(){
      const {classes} = this.props
      return (
        <AppBar>
          <Toolbar>
            <Typography variant = "headline" style={{flexGrow:1}} color="inherit" >ManoVaidya</Typography>
            <Typography variant = "subheading" className = {classes.padding} color="inherit" >OPTION 1</Typography>
            <Typography variant = "subheading" className = {classes.padding} color="inherit" >OPTION 2</Typography>
            <Typography variant = "subheading" className = {classes.padding} color="inherit" >OPTION 3</Typography>
          </Toolbar>
        </AppBar>
      )
    }

    */

  render() {
    return (
      <div>
        <AppBar position="static" style={{ background: '#ffffff', color: 'black' }}>
          <Toolbar className={styles.appbar}>
            <Suspense fallback={<div>Loading/.</div>}>
              <LogoComponent />
            </Suspense>
            <Typography variant="h6" className={styles.title} onClick={this.handleLogo}>
              Mano vaidya
                    </Typography>
            {this.state.usertype === 1 || this.state.usertype === 0 ? <Button color="inherit" onClick={this.handleSurvey}>Cognitive Health Test</Button> : <h2></h2>}

            {this.state.usertype === 1 || this.state.usertype === 0 ? <Button color="inherit" onClick={this.handleChatbot}>Chatbot</Button> : <h2></h2>}

            <Button color="inherit" onClick={this.handleChatroom}>Therapy Chatroom</Button>

            {this.state.usertype === 1 || this.state.usertype === 0 ? <Button color="inherit" onClick={this.handleSelfcare}>Selfcare Activities</Button> : <h2></h2>}

            {!this.state.loggedin ? <Button color="inherit" onClick={this.handleLogin}>Login</Button> : <Button color="inherit" onClick={this.handleLoggedin}>{this.state.emailid}</Button>}

            {!this.state.loggedin ? <Button color="inherit" onClick={this.handleSignup}>Signup</Button> : <h2></h2>}

          </Toolbar>
        </AppBar>

        { this.mySwitch(this.state.content)}
      </div>
    );
  }
};

export default Landing;
