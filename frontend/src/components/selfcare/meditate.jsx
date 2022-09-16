import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Heading from './heading';
import medhead from '../../imgs/medhead.jpg';
import m1 from '../../imgs/medhead1.jpg';
import Paper from '@material-ui/core/Paper';
import {Button, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import postive from '../../imgs/positivemed.mp4';
import mind from '../../imgs/mindmeditation.mp4';
import anx from '../../imgs/anxmeditation.mp4';
import dep from '../../imgs/depmeditation.mp4';
import clear from '../../imgs/clearmeditation.mp4';
import LightSpeed from 'react-reveal/LightSpeed';

const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
      },
      cardDetails: {
        flex: 1,
      },
      cardMedia: {
        width: 380,
      },
      root: {
        backgroundColor: theme.palette.grey[300],
      },
      vidcard: {
        maxWidth: 400,
      },
      gridconatiner: {
        paddingLeft : 80,
        paddingRight : 50, 
      },
      sidebarSection: {
        marginTop: theme.spacing(0),
      },
     
    
  }));
const heading = {
    title: 'Meditation',
    image: medhead,
    description:
    "Meditation isn’t about becoming a different person, a new person, or even a better person. It’s about training in awareness and getting a healthy sense of perspective. You’re not trying to turn off your thoughts or feelings. You’re learning to observe them without judgment. And eventually, you may start to better understand them as well..",
    imgText: 'main image description',
  };
  
    
  
export default function Meditate(props){
    const classes = useStyles();
    return(
        <React.Fragment>
        <CssBaseline />
        <Container maxwidth="xl">
          <main>
            <Heading post={heading} />
            <LightSpeed>
            <Typography variant="h6" color="inherit" paragraph className={classes.root}>
            Meditation has become one of the most popular ways to relieve stress among people of all walks of life. This age-old practice, which can take many forms and may or may not be combined with many spiritual practices, can be used in several important ways.
            Meditation affects the body in exactly the opposite ways that stress does—by triggering the body's relaxation response. It restores the body to a calm state, helping the body repair itself and preventing new damage from the physical effects of stress.
             It can calm your mind and body by quieting the stress-induced thoughts that keep your body's stress response triggered.
            </Typography>
            <Grid container spacing={0}>
            <CardActionArea>
             <Card className={classes.card}>
            <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                Benefits Of Meditation
              </Typography>
              <Typography variant="h6" color="textSecondary">
              Meditation can give you a sense of calm, peace and balance that can benefit both your emotional well-being and your overall health.
              And these benefits don't end when your meditation session ends. Meditation can help carry you more calmly through your day and may help you manage symptoms of certain medical conditions.
              </Typography>
              <Typography variant="h6" paragraph>
              The benefits of meditation can include:<br></br>
                Gaining a new perspective on stressful situations<br></br>
                Building skills to manage your stress<br></br>
                Increasing self-awareness<br></br>
                Focusing on the present<br></br>
                Reducing negative emotions<br></br>
                Increasing imagination and creativity<br></br>
                Increasing patience and tolerance
              </Typography>
            </CardContent>
          </div>
            <CardMedia className={classes.cardMedia} image={m1} />
         </Card>
         </CardActionArea>
          </Grid>
            <br></br>
            <Grid container spacing={4} className={classes.gridconatiner}>
              <Grid itemGrid container item xs={12} sm={6}>
              <card className={classes.vidcard}>
                <CardActionArea>
                    <cardMedia>
                    <div class="embed-responsive embed-responsive-16by9">
                    <video controls="true" class="embed-responsive-item" height="300" width="400">
                    <source src={postive} type="video/mp4" />
                    </video>
                    </div>
                    </cardMedia>
                    
                    <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                        Morning Positive Meditation
                    </Typography>
                    </CardContent>
                    </CardActionArea>
                </card>
              </Grid>
              <Grid itemGrid container item xs={12} sm={6}>
                <card className={classes.vidcard}>
                <CardActionArea>
                    <cardMedia>
                    <div class="embed-responsive embed-responsive-16by9">
                    <video controls="true" class="embed-responsive-item" height="300" width="400">
                    <source src={clear} type="video/mp4" />
                    </video>
                    </div>
                    </cardMedia>
                    
                    <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                        Clear Your Mind Meditation
                    </Typography>
                    </CardContent>
                    </CardActionArea>
                </card>
                </Grid>
              <Grid itemGrid container item xs={12} sm={6}>
                <card className={classes.vidcard}>
                <CardActionArea>
                    <cardMedia>
                    <div class="embed-responsive embed-responsive-16by9">
                    <video controls="true" class="embed-responsive-item" height="300" width="400">
                    <source src={mind} type="video/mp4" />
                    </video>
                    </div>
                    </cardMedia>
                    
                    <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                        Mindfulness Meditation
                    </Typography>
                    </CardContent>
                    </CardActionArea>
                </card>
                </Grid>
                <Grid itemGrid container item xs={12} sm={6}>
                <card className={classes.vidcard}>
                <CardActionArea>
                    <cardMedia>
                    <div class="embed-responsive embed-responsive-16by9">
                    <video controls="true" class="embed-responsive-item" height="300" width="400">
                    <source src={anx} type="video/mp4" />
                    </video>
                    </div>
                    </cardMedia>
                    
                    <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                       Meditation for Stress and Anxiety
                    </Typography>
                    </CardContent>
                    </CardActionArea>
                </card>
                </Grid>
                <Grid itemGrid container item xs={12} sm={6}>
                <card className={classes.vidcard}>
                <CardActionArea>
                    <cardMedia>
                    <div class="embed-responsive embed-responsive-16by9">
                    <video controls="true" class="embed-responsive-item" height="300" width="400">
                    <source src={dep} type="video/mp4" />
                    </video>
                    </div>
                    </cardMedia>
                    
                    <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                        Meditation to help fight Depression
                    </Typography>
                    </CardContent>
                    </CardActionArea>
                </card>
                </Grid>
            </Grid>
          </LightSpeed>

            <br></br><br></br><br></br>
        <center>
        <Grid item xs={12} sm={12}>
              <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                Activities
              </Typography>
              <Button onClick={props.handleYoga}> Yoga</Button>
              <Button onClick={props.handleQuotes}> Motivational Routine </Button>
              <Button onClick={props.handleStories}>Inspirational Stories</Button>
              <Button onClick={props.handleMeditate}>Meditation</Button>
            </Grid>
        </center>
        
            <br></br><br></br>
            </main>
        </Container>
      </React.Fragment>
    );
}