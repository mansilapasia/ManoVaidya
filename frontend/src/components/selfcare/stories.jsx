import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import {Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Heading from './heading';
import inshead from '../../imgs/storhead.jpg';
import Grid from '@material-ui/core/Grid';
import Roll from 'react-reveal/Roll';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
      },
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }));

const heading = {
    title: 'Inspirational Stories',
    image: inshead,
    description:
    "A good inspirational story  motivates us to keep fighting for our heart’s desires and dream.",
    imgText: 'main image description',
  };

export default function Stories(props){
    const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    
    return(
       
    <React.Fragment>
        <CssBaseline />
        <Container maxwidth="xl">
          <main>
            <Roll>
            <Heading post={heading} />
            <Typography variant="h6" color="inherit" paragraph>
            Often in life  we feel down and slumping in our life. At these times our soul needs inspiration just like the body needs food.
            <br></br>
            Good inspirational stories and quotes are a great way to uplift our soul fill it with hope and optimism. 
            Stories are a powerful tool to touch our heart. 
            A good inspirational story  motivates us to keep fighting for our heart’s desires and dream. 
             <br></br>
             Inspiring Stories trigger an emotional pulse point in our hearts and minds when we are in a distressing situation. 
            At the time of distress, the inspirational stories can help us to see the light at the end of the tunnel, and give us the burst of hope and courage to persevere.
           <br></br>
           The stories teach us lessons, fills our heart with hope and make us feel better.
            </Typography>
            </Roll>
            <br></br>
          </main>
        </Container>
        <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Belief" {...a11yProps(0)} />
          <Tab label="Failures" {...a11yProps(1)} />
          <Tab label="Encouragement" {...a11yProps(2)} />
          <Tab label="Honesty" {...a11yProps(3)} />
          <Tab label="Opportunity" {...a11yProps(4)} />
          <Tab label="Struggles" {...a11yProps(5)} />
        
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <h4>The Elephant Rope</h4>
      A gentleman was walking through an elephant camp, and he spotted that the elephants weren’t being kept in cages or held by the use of chains.
      All that was holding them back from escaping the camp, was a small piece of rope tied to one of their legs.
      As the man gazed upon the elephants, he was completely confused as to why the elephants didn’t just use their strength to break the rope and escape the camp. They could easily have done so, but instead, they didn’t try to at all.
      Curious and wanting to know the answer, he asked a trainer nearby why the elephants were just standing there and never tried to escape.
      <br></br>
      The Trainer replied "When they were young we used the same size rope to tie them and,at that age it was enough to hold them.As they grew up,they are conditioned to believe the rope can still hold them,so they never try to break free."
      <h4>Moral of the Story:</h4>
      No matter how much the world tries to hold you back, always continue with the belief that what you want to achieve is possible. Believing you can become successful is the most important step in actually achieving it.
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h4>The Marble Statue</h4>
        In the middle of a beautiful city, there was a museum laid with beautiful marble tiles and with a huge marble statue as a part of the display.  Many people from all over the world visited the museum every day and admired the beautifully crafted statue. 
        One night, the marble tiles started talking to the marble statue.
        <br></br>
        Marble Tiles: Hey statue, Don’t you think that it is just not fair that everybody from all over the world come all the way here to admire you while ignoring and stepping on me.
        <br></br>
        Marble Statue: My dear brother, marble tile, Don’t you remember we are actually from the same cave.
        <br></br>
        Marble Tile: Yes! I do, that is why i feel it is even more unfair. Both of us were born from the same cave and yet the world treats us so differently now. This is so unfair!
        <br></br>
        Marble Tiles: Yes, I despise that guy. How could he use those nasty tools on me.
        <br></br>
        Marble Statue: Well, Since you resisted his tools he couldn’t work on you. When he decided to give up on you, he started working on me instead. I knew at once that i would be something different and unique after his efforts. I bore all the painful tools he used on me and allowed him craft me as he wanted!
        <br></br>
        Marble Tiles: But those tools were so painful.
        <br></br>
        Marble Statue: My brother, there is a price for everything in life. Since, you decided to resist and gave up half way, you can’t blame anybody who steps on you now.!
        The marble tiles silently listened to his brothers words. and started to reflect on it.
        <h4>Moral Of the Story:</h4> The harder the knocks you go through in life, the more you learn and put them to use in the future! Do not be discouraged by setbacks and failures! Keep trying to be better.

      </TabPanel>
      <TabPanel value={value} index={2}>
        <h4>The Group Of Frogs </h4>
        As a group of frogs was traveling through the woods, two of them fell into a deep pit. When the other frogs crowded around the pit and saw how deep it was, they told the two frogs that there was no hope left for them.
        However, the two frogs decided to ignore what the others were saying and they proceeded to try and jump out of the pit.<br></br> 
        Despite their efforts, the group of frogs at the top of the pit were still saying that they should just give up. That they would never make it out.
        Eventually, one of the frogs took heed to what the others were saying and he gave up, falling down to his death. The other frog continued to jump as hard as he could. Again, the crowd of frogs yelled at him to stop the pain and just die.
        He jumped even harder and finally made it out. <br></br>When he got out, the other frogs said, “Did you not hear us?”
        The frog explained to them that he was deaf. He thought they were encouraging him the entire time.
        <h4>Moral Of the Story:</h4>People’s words can have a big effect on other’s lives. Think about what you say before it comes out of your mouth. It might just be the difference between life and death.
      </TabPanel>
      <TabPanel value={value} index={3}>
        <h4>A Pound Of Butter</h4>
        There was a farmer who sold a pound of butter to a baker. One day the baker decided to weigh the butter to see if he was getting the right amount, which he wasn’t. Angry about this, he took the farmer to court.
        <br></br>The judge asked the farmer if he was using any measure to weight the butter. The farmer replied, “Honor, I am primitive. I don’t have a proper measure, but I do have a scale.”
        <br></br>The judge asked, “Then how do you weigh the butter?”
        <br></br>The Farmer replied, "Your Honor, long before the baker started buying butter from me, I have been buying a pound loaf of bread from him. Every day when the baker brings the bread, I put it on the scale and give him the same weight in butter. If anyone is to be blamed, it is the baker. "
        <h4>Moral Of the Story:</h4>In life, you get what you give. Don’t try and cheat others.
      </TabPanel>
      <TabPanel value={value} index={4}>
        <h4>The Obstacle In Our Path</h4>In ancient times, a King had a boulder placed on a roadway. He then hid himself and watched to see if anyone would move the boulder out of the way. Some of the king’s wealthiest merchants and courtiers came by and simply walked around it.
        <br></br>Many people loudly blamed the King for not keeping the roads clear, but none of them did anything about getting the stone out of the way.
        <br></br>A peasant then came along carrying a load of vegetables. Upon approaching the boulder, the peasant laid down his burden and tried to push the stone out of the road. After much pushing and straining, he finally succeeded.
        <br></br>After the peasant went back to pick up his vegetables, he noticed a purse lying in the road where the boulder had been.
        The purse contained many gold coins and a note from the King explaining that the gold was for the person who removed the boulder from the roadway.
        <h4>Moral Of The Story</h4>Every obstacle we come across in life gives us an opportunity to improve our circumstances, and whilst the lazy complain, the others are creating opportunities through their kind hearts, generosity, and willingness to get things done.
      </TabPanel>
      <TabPanel value={value} index={5}>
        <h4>The Butterfly</h4>A man found a cocoon of a butterfly.One day a small opening appeared. He sat and watched the butterfly for several hours as it struggled to force its body through that little hole.
        <br></br>Until it suddenly stopped making any progress and looked like it was stuck.So the man decided to help the butterfly. He took a pair of scissors and snipped off the remaining bit of the cocoon. The butterfly then emerged easily, although it had a swollen body and small, shriveled wings.
        <br></br>The man didn’t think anything of it and sat there waiting for the wings to enlarge to support the butterfly. But that didn’t happen. The butterfly spent the rest of its life unable to fly, crawling around with tiny wings and a swollen body.
        <br></br>Despite the kind heart of the man, he didn’t understand that the restricting cocoon and the struggle needed by the butterfly to get itself through the small opening; were God’s way of forcing fluid from the body of the butterfly into its wings. To prepare itself for flying once it was out of the cocoon.
        <h4>Moral of the story:</h4>Our struggles in life develop our strengths. Without struggles, we never grow and never get stronger, so it’s important for us to tackle challenges on our own, and not be relying on help from others.
      </TabPanel>
    </div>
        <br></br><br></br>
        <center>
        <Grid item xs={12} sm={6}>
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
        
      </React.Fragment>
    );
  }