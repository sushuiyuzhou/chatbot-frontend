import React from "react";

import Paper from "@material-ui/core/Paper";
import GitHubIcon from "@material-ui/icons/GitHub";
import Avatar from "@material-ui/core/Avatar";
import { Typography } from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";

import { makeStyles } from "@material-ui/core/styles";

const BotSentenceStyle = makeStyles((theme) => ({
  indent: {
    display: "flex",
    justifyContent: "flex-start",
  },
  sentence: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    maxWidth: "85%",
  },
  profile: {
    //   display: "flex",
    //   flexDirection: "column",
    //   justifyContent: "flex-start",
    //   alignItems: "center",
    //   maxHeight: "50px",
  },
  avatar: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  content: {
    // border: "blue solid 1px",
    minWidth: "60%",
  },
  timeWrapper: {
    display: "flex",
    justifyContent: "flex-end",
  },
  time: {
    ...theme.typography.button,
    fontSize: "10px",
  },
}));

const BotSentence = ({ time, sentence }) => {
  const classes = BotSentenceStyle();

  return (
    <React.Fragment>
      <div className={classes.indent}>
        <div elevation={2} className={classes.profile}>
          {/*<Typography variant="caption">sushuiyuzhou</Typography>*/}
          <Avatar className={classes.avatar}>
            <GitHubIcon />
          </Avatar>
        </div>
        &nbsp;
        <div>
          <Paper elevation={2} className={classes.sentence}>
            &nbsp;
            <div className={classes.content}>
              <div className={classes.timeWrapper}>
                <Typography
                  variant="caption"
                  color="secondary"
                  className={classes.time}
                >
                  {time}
                </Typography>
              </div>
              <Typography variant="body2">{sentence}</Typography>
            </div>
            &nbsp;
          </Paper>
        </div>
      </div>
      <br />
    </React.Fragment>
  );
};

export default BotSentence;
