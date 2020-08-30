import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

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
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  tab: {
    fontFamily: "Open Sans",
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container">
      <div className="title">WORK EXPERIENCES</div>
      <div className={classes.root}>
        <div className="table">
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
              <Tab label="Poly Ops" {...a11yProps(0)} />
              <Tab label="Rapid 7" {...a11yProps(1)} />
              <Tab label="CWIB" {...a11yProps(2)} />
              <Tab label="HMC" {...a11yProps(3)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <div className="main">
              <div className="header">
                <span>
                  <strong>Front End Developer Intern</strong> |
                </span>{" "}
                PolyOperations
              </div>
              <div className="date">JUN 2020 - PRESENT</div>
              <div className="info">
                <ul>
                  <li>
                    Create custom dashboards and projections for clients to
                    better manage their businesses
                  </li>
                  <li>
                    Implement new features and debug the interface in adherence
                    to UX guidelines
                  </li>
                  <li>
                    {" "}
                    Ideate and implement new onboarding features and build out
                    testing framework{" "}
                  </li>
                </ul>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="main">
              <div className="header">
                <span>
                  <strong>Software Engineer Intern</strong> |
                </span>{" "}
                Rapid7
              </div>
              <div className="date">JUN 2019 - AUG 2019</div>
              <div className="info">
                <ul>
                  <li>
                    Built intentionally vulnerable web applications using Django
                    as well as utilized existing ones to perform
                    agent-detectable attacks
                  </li>
                  <li>
                    Containerized application’s dependencies on Docker to
                    contribute to continuous integration efforts
                  </li>
                  <li>
                    Utilized the dashboard to debug the Java and Python agents
                  </li>
                </ul>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="main">
              <div className="header">
                <span>
                  <strong>Chief Technology Officer</strong> |
                </span>{" "}
                Claremont Women in Business
              </div>
              <div className="date">DEC 2018 - PRESENT</div>
              <div className="info">
                <ul>
                  <li>
                    Lead design project for official club website to reflect CWIB’s mission
                  </li>
                  <li>
                    Recruit, train, and guide team of four women interested in  exploring technology, 
                    coding, and website design 
                  </li>
                </ul>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <div className="main">
              <div className="header">
                <span>
                  <strong>Data Structure Tutor</strong> |
                </span>{" "}
                Harvey Mudd College
              </div>
              <div className="date">JAN 2020 - PRESENT</div>
              <div className="info">
                <ul>
                  <li>
                    Work with 60 students to explain algorithmic problem-solving  techniques and
                    core  concepts of CS
                  </li>
                  <li>
                    Successfully analyze and debug uniquely written code (C++) and provide 
                    constructive feedback and support
                  </li>
                </ul>
              </div>
            </div>
          </TabPanel>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding-bottom: 90px;
        }
        .table {
          max-width: 640px;
          margin: auto;
        }
        .title {
          font-weight: bold;
          font-size: 20px;
          line-height: 37px;
          letter-spacing: 0.25em;
          margin-bottom: 70px;
          margin-top: 100px;
        }
        .header {
          font-size: 20px;
          margin-top: 15px;
          text-align: center;
          margin-bottom: 10px;
        }
        .main {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        span {
          color: #369dca;
          font-family: "Open Sans", sans-serif;
          font-size: 18px;
        }
        ul {
          font-size: 14px;
          width: 70%;
          margin: auto;
          font-family: "Open Sans", sans-serif;
        }
        .date {
          font-size: 12px;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
}
