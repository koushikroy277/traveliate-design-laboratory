import React from "react";
import {
  makeStyles,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
 
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    marginRight: 30,
    flexShrink: 0,
    paddingTop: 10,
    paddingBottom: 10,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(18),
    color: "#3a86ff",
    paddingTop: 10,
    paddingBottom: 10,
  },
}));

export function PkgTimeline(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography>
          </Typography>
          <Typography
            className={classes.heading}
            style={{ fontWeight: "600", marginLeft: 10 }}
          >
            {props.timeDay}
          </Typography>
          <Typography className={classes.secondaryHeading}>
            {props.timeHead}
          </Typography>
        </AccordionSummary>
        <AccordionDetails id="panel1bh-des">
          <Typography style={{ marginLeft: 80 }}>
            {props.timeDes}
            <div data-aos="fade-left">
              <img
                src={props.timeImg}
                alt="travel"
              />
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export function PkgIncludeTime(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            className={classes.heading}
            style={{
              color: "#3a86ff",
              fontWeight: "500",
              marginLeft: 50,
            }}
          >
            {props.incHead}
          </Typography>
        </AccordionSummary>
        <AccordionDetails id="panel1a-des">
          <Typography style={{ marginLeft: 80 }}>{props.incDes}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
