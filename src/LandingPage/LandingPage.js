import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
// import { Link, NavLink } from "react-router-dom";
import Footer from "../CommonComponents/Footer/Footer";
import "../CommonStyle/CommonStyle.css";
import "./LandingPage.css";
import logo from "../Images/Logo.svg";
import studioScreen from "../Images/studio_screen.svg";
import journeyManagerScreen from "../Images/journey_manager_screen.svg";
import controlCenterScreen from "../Images/control_center_screen.svg";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLightbulb, faSlidersH, faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// Add the icons to the library
library.add(faHome, faLightbulb, faSlidersH, faBusinessTime);
function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 96,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 6 : 0,
    style: { backgroundColor: trigger ? 'rgba(0, 0, 0, 0.4)' : 'transparent',
    backdropFilter: trigger ? 'blur(20px)' : 'none',
   }
  });
}


const LandingPage = () => { 


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
    <ElevationScroll>
    <AppBar className="app-bar"> 
        <Toolbar className="tool-bar">
          <img src={logo} alt="logo" className="logo" />
          <Button variant="contained" size="large" className="hero-img-btns" onClick={handleClickOpen}>
            Learn More!
          </Button>
          </Toolbar>
        </AppBar>
        </ElevationScroll>
      <Box className="hero-img-box">
        <div className="hero-img-content">
          <Typography variant="h6" color="white" className="f-s-2 f-w-600">
            Poet
          </Typography>
          <Typography variant="h1" className="hero-text f-w-700">
            Smart. Personal. Conversations.
          </Typography>
          <Typography color="white" className="f-s-125 m-t-2 m-b-2 description">
            Engage and empathise with your audiences by saying the right things,
            to the right person, through the right channel at the right time...
            just like a poet!
          </Typography>
          <Button variant="contained" size="large" className="hero-img-btns" onClick={handleClickOpen}>
            Start Your Conversations
          </Button>
        </div>
        <Dialog open={open} onClose={handleClose}>
        <img src={logo} alt="logo" className="dark-logo" />
        <DialogTitle>Request a Demo</DialogTitle>
        <DialogContent>
          <DialogContentText className="m-b-15">
          Just answer a few simple questions so we can personalize the right experience for you.
          </DialogContentText>
         <Grid container spacing={2} className="m-b-15">
            <Grid item xs={6}>
          <TextField id="firstName" label="First Name" placeholder="Enter your first name" variant="outlined" required fullWidth/>
          </Grid>
          <Grid item xs={6}>
          <TextField id="lastName" label="Last Name" placeholder="Enter your last name" variant="outlined" required fullWidth/>
          </Grid>
          <Grid item xs={12}>
          <TextField id="email" label="Business Email" placeholder="Enter your business email" variant="outlined" required fullWidth pattern="^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$"  />
          </Grid>
          {/* <Grid item xs={6}>
          <TextField id="companySize" label="Company Size" placeholder="Enter your company size" variant="outlined" required fullWidth/>
          </Grid>
          <Grid item xs={6}>
          <TextField id="interestModule" label="Interested Module" placeholder="Enter your interested module" variant="outlined" required fullWidth/>
          </Grid> */}
          <Grid item xs={12}>
          <TextField id="comment" label="What would you be using poet for?" variant="outlined" placeholder="Enter your comment" required fullWidth  multiline rows={3}/>
          </Grid>
          </Grid>
          <DialogActions className="no-padding">
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleClose}>Request</Button>
        </DialogActions>
         
        </DialogContent>
      
        
      </Dialog>



        <div class="scroll-downs">
          <div class="mousey">
            <div class="scroller"></div>
          </div>
          <Typography class="scroll-txt">Scroll Down</Typography>
        </div>
      </Box>

      <Box className="h-100vh w-100 d-flex-ver-cen">
        <Container maxWidth="lg">
          <Typography variant="h3" className="f-w-700 primary-color m-b-4">
            Why use poet?
          </Typography>
          <Grid container spacing={12}>
            <Grid item xs={6} className="d-flex">
              <div>
              <FontAwesomeIcon icon="home" className="fa-custom-icons" />
              </div>
              <div>
                <Typography className="grey-50">Higher Productivity</Typography>
                <Typography variant="h4" className="f-w-700 m-b-1">
                  All In One Place
                </Typography>
                <Typography className="line-height-2">
                  Create communication templates across a variety of
                  communication channels, share and get feedback or go through
                  an approval workflow all in one place. You can create
                  templates by reusing existing assets and fragments of text,
                  logic or visuals from previous work.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={6} className="d-flex">
              <div><FontAwesomeIcon icon="lightbulb" className="fa-custom-icons"/></div>
              <div>
                <Typography className="grey-50">
                  Higher Effectiveness & Improved Busiess KPIs
                </Typography>
                <Typography variant="h4" className="f-w-700 m-b-1">
                  Intelligent
                </Typography>
                <Typography className="line-height-2">
                  Use AI assistant to generate copy based on previous
                  communication performance at a segment level. Embedded
                  insights on how your channels are performing, optimize
                  delivery based on individual and segment level behaviour and
                  improve communication content based on what works best at an
                  individual level.
                </Typography>
              </div>
            </Grid>

            <Grid item xs={6} className="d-flex">
            
              <div><FontAwesomeIcon icon="sliders-h" className="fa-custom-icons"/></div>
              <div>
                <Typography className="grey-50">
                  Reduced Communication Cost & Better CX
                </Typography>
                <Typography variant="h4" className="f-w-700 m-b-1">
                  Control
                </Typography>
                <Typography className="line-height-2">
                  Control and coordinate communication between channels at an
                  individual customer level based on explicit business rules as
                  well as implicit rules discovered based on customer
                  preferences and previous interaction and engagement history.
                </Typography>
              </div>
            </Grid>

            <Grid item xs={6} className="d-flex">
              <div><FontAwesomeIcon icon="business-time" className="fa-custom-icons"/></div>
              <div>
                <Typography className="grey-50">
                  Faster Time To Value
                </Typography>
                <Typography variant="h4" className="f-w-700 m-b-1">
                  Flexible
                </Typography>
                <Typography className="line-height-2">
                  Integrate with your existing CPaaS providers or user our
                  channels to complement or improve them. Bard does not lock you
                  in one way or the other, but rather complements your existing
                  investments and technology landscape.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box className="h-100vh gradient-bg w-100 d-flex-ver-cen">
        <Container maxWidth="lg">
          <Grid container alignItems="center" spacing={12}>
            <Grid item xs={5}>
              <Typography variant="h2" className="f-w-700 m-b-3" color="white">
                poet can help you better...
              </Typography>
              <Typography variant="h4" className="f-w-700 m-b-2" color="white">
                Create & Manage
              </Typography>
              <Typography className="line-height-2" color="white">
                Whether it is In-App messaging, Insta or good old SMS, with Bard
                you can create communication and templates that can be reused
                across journeys, campaigns or message based channels. You can
                design, preview and collaborate with other teams to get the
                perfect communication out to your customers. All templates are
                versioned, and you can compare the performance of different
                versions against each other so you can continuously learn and
                improve.
              </Typography>
            </Grid>
            <Grid item xs={7} className="mockupup-img-grid">
              <img src={studioScreen} alt="Studio Screen" className="w-100" />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box className="h-100vh w-100 d-flex-ver-cen">
        <Container maxWidth="lg">
          <Grid container alignItems="center" spacing={12} className="plan-text-grid">
          <Grid item xs={5}>
              <Typography variant="h4" className="f-w-700 m-b-2 primary-color">
                Plan, Test & Orchestrate
              </Typography>
              <Typography className="line-height-2">
                Test different variants of the same template to see which one
                performs best with a segment, at a certain point of the day or a
                certain channel. Once you are satisfied with a winning
                communication Bard will orchestrate the journeys where the
                communication or template is included, making smart decisions at
                real-time based on individual customer behaviour.
              </Typography>
            </Grid>
            <Grid item xs={7} className="mockup-img-grid-2">
              <img
                src={journeyManagerScreen}
                alt="Journey Manager Screen"
                className="w-100"
              />
            </Grid>
            
          </Grid>
        </Container>
      </Box>

      <Box className="h-100vh gradient-bg w-100 d-flex-ver-cen">
        <Container maxWidth="lg">
          <Grid container alignItems="center" spacing={12}>
            <Grid item xs={5}>
              <Typography variant="h4" className="f-w-700 m-b-2" color="white">
                Control & Optimize
              </Typography>
              <Typography className="line-height-2" color="white">
                Reduce tone-deaf moments, prioritize communication delivery
                between channels based on explicit rules as well as individual
                customer preferences. Bard also uses advanced intelligence to
                playback insights that you can use to design better
                communications and interact through the right channel and the
                right time.
              </Typography>
            </Grid>
            <Grid item xs={7} className="mockupup-img-grid">
              <img
                src={controlCenterScreen}
                alt="Control Center Screen"
                className="w-100"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className="m-t-5 p-t-3">
        <Footer />
      </Box>
    </>
  );
};

export default LandingPage;
