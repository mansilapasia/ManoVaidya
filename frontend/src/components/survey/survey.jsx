import React from 'react';
import Survey from 'material-survey/components/Survey';
import { Button, Typography } from '@material-ui/core';
import Heading from '../selfcare/heading';
import headimag from '../../imgs/men1.jpg';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate';


const heading = {
  title: 'Take a Cognitive Health Test ',
  description:
    "Online screening is one of the quickest and easiest ways to determine whether you are experiencing symptoms of a mental health condition.",
  image: headimag,
  imgText: 'main image description',
};
const useStyles = makeStyles((theme) => ({
  progress: {
    marginTop: '-40px',
  }
}));
export default function MySurvey(props) {
  const classes = useStyles();
  const [indicator, setindicator] = useState(0);
  const handleComplete = (data) => {
    const putMethod = {
      method: 'PUT', // Method itself
      headers: {
        'Content-type': 'application/json; charset=UTF-8', // Indicates the content
      },
      body: JSON.stringify(data) // We send data in JSON format
    };
    const url = window.location.href + "survey/surveyanswer";
    // make the HTTP put request using fetch api
    console.log(putMethod);
    fetch(url, putMethod)
      .then((response) => {
        response.json().then(data => {
          setindicator(data.response);
        });
      })
      .catch(err => console.log(err));

    //console.log(JSON.stringify(data));
  }

  return (
    <React.Fragment>
      <Zoom>
        <Heading post={heading} />
      </Zoom>

      <center>
        <Rotate top left>
          <Typography variant="h6" color="inherit" paragraph>
            Take a proactive approach to your mental health and well being with this test.
            <br></br>
          </Typography>
        </Rotate>


      </center>
      <Survey
        onFinish={answers => {
          { console.log(answers) }
          { handleComplete(answers) }
        }}
        form={{
          questions: [
            {
              choices: [
                { text: "15-25", value: "1" },
                { text: "26-35", value: "2" },
                { text: "36-45", value: "3" },
                { text: "46-55", value: "4" },
                { text: "55+", value: "5" }
              ],
              isRequired: true,
              name: "age group",
              title: "What is your age range?",
              type: "radiogroup"
            },
            {
              choices: [
                { text: "Male", value: "1" },
                { text: "Female", value: "2" },
                { text: "other", value: "3" }
              ],
              isRequired: true,
              name: "gender",
              title: "Your Gender",
              type: "radiogroup"
            },
            {
              choices: [
                { text: "Service", value: "2" },
                { text: "Student", value: "1" },
                { text: "Retired", value: "5" },
                { text: "Freelancer", value: "4" },
                { text: "Businessman", value: "3" },
                { text: "Other", value: "6" }
              ],
              isRequired: true,
              name: "Occupational Status",
              title: "What is your occupational status?",
              type: "radiogroup"
            },
            {
              choices: [
                { text: "Nearly Everyday", value: "4" },
                { text: "Several days", value: "3" },
                { text: "Some of the days", value: "2" },
                { text: "Not at all", value: "1" },
              ],
              isRequired: true,
              name: "interest or pleasure",
              title: "How often do you have little interest or pleasure in doing things?",
              type: "radiogroup"
            },
            {
              choices: [
                { text: "Nearly Everyday", value: "4" },
                { text: "Several days", value: "3" },
                { text: "Some of the days", value: "2" },
                { text: "Not at all", value: "1" },
              ],
              isRequired: true,
              name: "feel down",
              title: "How often do you feel down, depressed, or hopeless?",
              type: "radiogroup"
            },
            {
              choices: [
                { text: "Nearly Everyday", value: "4" },
                { text: "Several days", value: "3" },
                { text: "Some of the days", value: "2" },
                { text: "Not at all", value: "1" },
              ],
              isRequired: true,
              name: "feel tired",
              title: "How often do you feel tired or feel having very little energy?",
              type: "radiogroup"
            },
            {
              choices: [
                { text: "Nearly Everyday", value: "4" },
                { text: "Several days", value: "3" },
                { text: "Some of the days", value: "2" },
                { text: "Not at all", value: "1" },
              ],
              isRequired: true,
              name: "feel bad",
              title: "How often do you feel bad about yourself - or that you are a failure and you have let yourself or your family down or have felt any sort of guilt?",
              type: "radiogroup"
            },
            {
              choices: [
                { text: "Nearly Everyday", value: "4" },
                { text: "Several days", value: "3" },
                { text: "Some of the days", value: "2" },
                { text: "Not at all", value: "1" },
              ],
              isRequired: true,
              name: "feel trouble",
              title: "How often do you feel trouble concentrating on things, such as reading the newspaper or watching television? ",
              type: "radiogroup"
            },
            {
              choices: [
                { text: "Nearly Everyday", value: "4" },
                { text: "Several days", value: "3" },
                { text: "Some of the days", value: "2" },
                { text: "Not at all", value: "1" },
              ],
              isRequired: true,
              name: "feel slowly",
              title: "How often do you feel that you are moving or speaking so slowly that other people could have noticed or the opposite -being so fidgety or restless that you have been moving around a lot more than usual?  ",
              type: "radiogroup"
            },
            {
              choices: [
                { text: "Nearly Everyday", value: "4" },
                { text: "Several days", value: "3" },
                { text: "Some of the days", value: "2" },
                { text: "Not at all", value: "1" },
              ],
              isRequired: true,
              name: "feel sad",
              title: "How often do you feel sad or like crying? ",
              type: "radiogroup"
            },
            {
              choices: [
                { text: "Nearly Everyday", value: "4" },
                { text: "Several days", value: "3" },
                { text: "Some of the days", value: "2" },
                { text: "Not at all", value: "1" },
              ],
              isRequired: true,
              name: "feel angry",
              title: "How often do you feel angry?",
              type: "radiogroup"
            },
            {
              choices: [
                { text: "Nearly Everyday", value: "4" },
                { text: "Several days", value: "3" },
                { text: "Some of the days", value: "2" },
                { text: "Not at all", value: "1" },
              ],
              isRequired: true,
              name: "confusion",
              title: "How often do you experience having confusion or slowed thinking? ",
              type: "radiogroup"
            },
            {
              choices: [
                { text: "Nearly Everyday", value: "4" },
                { text: "Several days", value: "3" },
                { text: "Some of the days", value: "2" },
                { text: "Not at all", value: "1" },
              ],
              isRequired: true,
              name: "thoughts",
              title: "How often do you experience having thoughts that you would be better off dead, or of hurting yourself? ",
              type: "radiogroup"
            },
            {
              choices: [
                { text: "Nearly Everyday", value: "4" },
                { text: "Several days", value: "3" },
                { text: "Some of the days", value: "2" },
                { text: "Not at all", value: "1" },
              ],
              isRequired: true,
              name: "poor appetite",
              title: "How often do you overeat or have a poor appetite?  ",
              type: "radiogroup"
            },
            {
              choices: [
                { text: "Nearly Everyday", value: "4" },
                { text: "Several days", value: "3" },
                { text: "Some of the days", value: "2" },
                { text: "Not at all", value: "1" },
              ],
              isRequired: true,
              name: "sleep cycle",
              title: "Is your sleep cycle disturbed or irregular?  ",
              type: "radiogroup"
            },
            {
              choices: [
                { text: "Yes", value: "1" },
                { text: "No", value: "0" }
              ],
              isRequired: true,
              name: "diagnosed",
              title: "Have you ever been diagnosed with a mental disorder before?  ",
              type: "radiogroup"
            },
          ]
        }}
      />
      <br></br>
      <center>
        <Typography variant="h5" color="primary">
          Result
    </Typography>
        <Typography variant="h6" color="inherit" paragraph>
          The Result of your cognitive health test is given below.The different colours show different levels of your depression<br></br>
         Green colour: The level of depression here is almost negligible<br></br>
         Yellow colour: The level of depression here is mild<br></br>
         Orange colour: The level of  depression here is moderate<br></br>
         Red colour: The level of depression here is  severe and needs immediate medical assistance
    </Typography>

      </center>

      <br></br><br></br>

      <div>
        <ProgressBar>
          <ProgressBar variant="success" now={25} label="None" key={1} />
          <ProgressBar variant="warning" now={25} label="Mild" key={2} />
          <ProgressBar variant="danger" now={25} label="Moderate" key={3} />
          <ProgressBar variant="extreme" now={25} label="Severe" key={4} />
        </ProgressBar>

        <ProgressBar className={classes.progress}>
          <ProgressBar animated variant="indicator" now={(indicator * 20)} />
        </ProgressBar>
      </div>
      <br></br><br></br>
    </React.Fragment>
  );

}



