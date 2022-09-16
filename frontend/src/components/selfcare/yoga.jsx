import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Heading from './heading';
import yogaheading from '../../imgs/yogahead.jpg';
import { Button, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import y1 from '../../imgs/yoga1.PNG';
import y2 from '../../imgs/yoga2.PNG';
import y3 from '../../imgs/yoga3.PNG';
import y4 from '../../imgs/yoga4.PNG';
import y5 from '../../imgs/yoga5.PNG';
import y6 from '../../imgs/yoga6.PNG';
import y7 from '../../imgs/yoga7.PNG';
import Zoom from 'react-reveal/Zoom';
import p1 from '../../imgs/pranayam1.mp4';
import p2 from '../../imgs/pranayam2.mp4';



const useStyles = makeStyles((theme) => ({
    mainGrid: {
      marginTop: theme.spacing(3),
    },
    card: {
        maxWidth: 400,
      },
      gridconatiner: {
        paddingLeft : 80,
        paddingRight : 50, 
      },
      vidcard: {
        maxWidth: 400,
      },
  }));
const heading = {
    title: 'Yoga',
    image: yogaheading,
    description:
    "Yoga is the journey of the self, through the self, to the self.",
    imgText: 'main image description',
  };
export default function Yoga(props){
    const classes = useStyles();
    return(
        <React.Fragment>
        <CssBaseline />
        <Container maxwidth="xl">
          <main>
            <Heading post={heading} />
            <Typography variant="h6" color="inherit" paragraph>
            When anxiety takes hold it can be difficult to find a way to refocus your mind. 
            Yoga has been shown to do amazing things for people living with anxiety, as well as depression.
            The benefits of yoga for mental and physical health are known to one and all.
            Asana practice helps counteract anxiety-driven depression because it reduces stress hormones like cortisol and adrenaline, inducing what’s known as the relaxation response.
            Once the relaxation response kicks in, many people feel that instead of trying to escape their feelings, they can stay with them, which is essential to identifying the psychological factors that trigger their anxiety and depression. 
            But the path to getting to this relaxed place varies by individual.<br></br>
            Following are a few yoga poses that you can do regularly to curb stress and anxiety:
            </Typography>
            <br></br>
            <Zoom>
            <Grid container spacing={3} className={classes.gridconatiner}>
              <Grid item xs={12} sm={6}>
              <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                component="img"
                alt="Butterfly Pose"
                image = {y1}
                title="Butterfly Pose"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                     Butterfly Pose(Baddha Konasana)
                     </Typography>
                    <Typography variant="body1" color="palette.primary.dark" component="p">
                    If you’re looking for a relatively simple posture that grounds you in the moment when you’re feeling anxious, then try Butterly Pose.<br></br>
                    With a focus on your breathing, yogis feel the pose encourages internal reflection.
                    It also combines the healing powers of meditation, as the pose encourages you to enter a meditative state.
                    </Typography>
                 </CardContent>
                </CardActionArea>
             </Card>
             </Grid>

             <Grid item xs={12} sm={6}>
             <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                component="img"
                alt="Bridge Pose"
                height="100%"
                image = {y3}
                title="Bridge Pose"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Bridge Pose (Setu Bandha Sarvangasana)
                     </Typography>
                    <Typography variant="body1" color="palette.primary.dark" component="p">
                    Bridge Pose is a powerful inversion that yogis believe opens up space around your heart.
                    By doing this it’s believed that it allows more space for you to focus and think more clearly.
                    Inversion poses generally can be helpful for those with anxiety.
                    </Typography>
                 </CardContent>
                </CardActionArea>
             </Card>
             </Grid>
             
             <Grid item xs={12} sm={6}>
             <Card className={classes.card} >
              <CardActionArea>
                <CardMedia
                component="img"
                alt="Extended Triangle Pose"
                image = {y2}
                title="Extended Triangle Pose"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Extended Triangle Pose (Utthita Trikonasana)
                     </Typography>
                    <Typography variant="body1" color="palette.primary.dark" component="p">
                    Yoga experts recommend Triangle Pose and Extended Triangle Pose as great postures for beginners.
                    Extended Triangle Pose in particular is thought to help alleviate anxiety and depression. It is seen as a posture that can better help you cope better when life is tough.
                    </Typography>
                 </CardContent>
                </CardActionArea>
             </Card>
             </Grid>
            
             <Grid item xs={12} sm={6}>
             <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                component="img"
                alt="Half Moon Pose"
                height="100%"
                image = {y4}
                title="Half Moon Pose"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                     Half Moon Pose (Ardha Chandrasana)
                     </Typography>
                    <Typography variant="body1" color="palette.primary.dark" component="p">
                    Though Half Moon Pose is not easy, it has many advantages when it comes to using yoga to improve your mental health.
                    The posture is a cooling one, encouraging a calm and soothing energy to enter your body and help you to relax.
                    We have a tendency to slouch when we feel low.
                    Half Moon Pose opens your body, encouraging better posture and improved self-esteem.
                    </Typography>
                 </CardContent>
                </CardActionArea>
             </Card>
             </Grid>
             <Grid item xs={12} sm={6}>
             <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                component="img"
                alt="Legs-Up-The-Wall Pose"
                height="100%"
                image = {y5}
                title="Legs-Up-The-Wall Pose"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Legs-Up-The-Wall Pose (Viparita Karani)
                     </Typography>
                    <Typography variant="body1" color="palette.primary.dark" component="p">
                    When you need to calm a busy mind there aren’t many postures as powerful as the Legs-Up-The-Wall Pose.
                    It can help you regain a sense of calm after a stressful day, making it an ideal posture for anxious people.
                    </Typography>
                 </CardContent>
                </CardActionArea>
             </Card>
             </Grid>
             <Grid item xs={12} sm={6}>
             <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                component="img"
                alt="Child’s Pose "
                height="100%"
                image = {y6}
                title="Child’s Pose "
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Child’s Pose (Balasana)
                     </Typography>
                    <Typography variant="body1" color="palette.primary.dark" component="p">
                    An article published by Harvard Medical School, highlights how Child’s Pose “provides a sense of calm and stability”, ideal if your anxiety is impacting on your sleep.
                    However don’t assume because it’s a calming pose that it’s easy, as they warn that you should be careful if you have any hip or knee injuries.
                    The grounding qualities of the posture give you the sense of being enveloped in calm.
                    </Typography>
                 </CardContent>
                </CardActionArea>
             </Card>
             </Grid>
             <Grid item xs={12} sm={6}>
             <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                component="img"
                alt="Camel Pose"
                height="100%"
                image = {y7}
                title="Camel Pose"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Camel Pose (Ustrasana)
                     </Typography>
                    <Typography variant="body1" color="palette.primary.dark" component="p">
                    Camel Pose is a powerful posture for people practicing yoga for back pain, however it’s also seen as great for dealing with your emotions.
                    It’s a great stress reliever, helping to lift you up (literally!) when you’re feeling weighed down by your problems.
                    The pose is also thought to open up the heart chakra, helping to release your emotions, with many people finding they start crying when practicing the pose.
                    </Typography>
                 </CardContent>
                </CardActionArea>
             </Card>
             </Grid>
             <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                Activities
              </Typography>
              <Button onClick={props.handleYoga}> Yoga</Button>
              <Button onClick={props.handleQuotes}> Motivational Routine </Button>
              <Button onClick={props.handleStories}>Inspirational Stories</Button>
              <Button onClick={props.handleMeditate}>Meditation</Button>
            </Grid> 
            <Grid itemGrid container item xs={12} sm={6}>
              <card className={classes.vidcard}>
                <CardActionArea>
                    <cardMedia>
                    <div class="embed-responsive embed-responsive-16by9">
                    <video controls="true" class="embed-responsive-item" height="300" width="400">
                    <source src={p1} type="video/mp4" />
                    </video>
                    </div>
                    </cardMedia>
                    
                    <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                        Nadishodhan Pranayam 
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
                    <source src={p2} type="video/mp4" />
                    </video>
                    </div>
                    </cardMedia>
                    
                    <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                        Pranayam
                    </Typography>
                    </CardContent>
                    </CardActionArea>
                </card>
              </Grid>
            </Grid>
           </Zoom>

                      
         </main>
        </Container>
      </React.Fragment>
    );
  }
       