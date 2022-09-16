import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Button, Typography } from '@material-ui/core';
import Heading from './heading';
import mov from '../../imgs/movhead.jpg';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import tileData from './tileData';
import Pulse from 'react-reveal/Pulse';

const useStyles = makeStyles((theme) => ({
   mainGrid: {
     marginTop: theme.spacing(3),
   },
   root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      //overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 1000,
      height: 1000,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
 }));
 const heading = {
   title: 'Motivational Routine',
   image: mov,
   //description:
   //"Yoga is the journey of the self, through the self, to the self.",
   imgText: 'main image description',
 };

export default function Quotes(props){
   const classes = useStyles();
   return(
   <React.Fragment>
        <CssBaseline />
        <Container maxwidth="xl">
          <main>
            <Heading post={heading} />
            <Pulse>
            <Typography variant="h6" color="inherit" paragraph>
            Self-care is all about the everyday habits that help you take care of and nurture your health and well-being.
            <br></br>
            "Self-care means really listening to your body, taking moments to check in, intentionally tuning in to the thoughts going on in your mind, and challenging your behaviors and belief systems if things feel out of alignment in your life,”
             says Kelsey Patel, a Los Angeles–based wellness expert and the author of the forthcoming book Burning Bright: Rituals, Reiki, and Self-Care to Heal Burnout, Anxiety, and Stress.
             <br></br>
             You may feel up for the challenge, but recognizing the need for self-care is one thing.
           <br></br>
           Actually adopting a self-care practice that can improve your life is another. Here’s how to do it.
            </Typography>
            </Pulse>
            <br></br>
          </main>
          <div className={classes.root}>
        <GridList cellHeight={400}  spacing={40} className={classes.gridList}>
        <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
          <ListSubheader component="div"></ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
            />
          </GridListTile>
        ))}
       </GridList>
        </div>
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
        </Container>
        
      </React.Fragment>
    );
  }