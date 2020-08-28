import React from "react";
import { connect } from "react-redux";

import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import GitHubIcon from "@material-ui/icons/GitHub";
import AdbIcon from "@material-ui/icons/Adb";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import { red } from "@material-ui/core/colors";

import { makeStyles } from "@material-ui/core/styles";

const BotSentenceStyle = makeStyles((theme) => ({
  indent: {
    display: "flex",
    justifyContent: "flex-end",
  },
  sentence: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    maxWidth: "70%",
  },
  profile: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    maxHeight: "50px",
  },
  content: {
    // border: "blue solid 1px",
  },
  timeWrapper: {
    display: "flex",
    justifyContent: "flex-end",
  },
  time: {
    ...theme.typography.button,
    fontSize: "10px",
  },
  avatar: {
    color: theme.palette.getContrastText(red[400]),
    backgroundColor: red[400],
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  icon: {
    width: theme.spacing(2),
    height: theme.spacing(2),
  },
}));

const BotSentence = ({ time, sentence, icon }) => {
  const classes = BotSentenceStyle();

  const getUserIcon = (iconIndex) => {
    switch (iconIndex) {
      case 1:
        return <GitHubIcon className={classes.icon} />;
      case 2:
        return <AdbIcon className={classes.icon} />;
      case 3:
        return <AnnouncementIcon className={classes.icon} />;
      case 4:
        return <DirectionsRunIcon className={classes.icon} />;
      default:
        return <GitHubIcon className={classes.icon} />;
    }
  };

  return (
    <React.Fragment>
      <div className={classes.indent}>
        <Paper elevation={2} className={classes.sentence}>
          &nbsp;
          <div className={classes.content}>
            <div className={classes.timeWrapper}>
              <Typography
                variant="caption"
                fontSize="small"
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
        &nbsp;
        <Avatar className={classes.avatar}>{getUserIcon(icon)}</Avatar>
      </div>
      <br />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    icon: state.user.icon,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BotSentence);
