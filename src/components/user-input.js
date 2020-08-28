import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import { bindActionCreators } from "redux";

import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import InputIcon from "@material-ui/icons/Input";
import GitHubIcon from "@material-ui/icons/GitHub";
import AdbIcon from "@material-ui/icons/Adb";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  userInputRoot: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "azure",
    marginBottom: theme.spacing(1),
  },
  inputGroup: {
    display: "flex",
    alignItems: "center",
  },
  textField: {
    width: "250px",
  },
  profile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const getUserIcon = (iconIndex) => {
  switch (iconIndex) {
    case 1:
      return <GitHubIcon />;
    case 2:
      return <AdbIcon />;
    case 3:
      return <AnnouncementIcon />;
    case 4:
      return <DirectionsRunIcon />;
    default:
      return <GitHubIcon />;
  }
};

const TextComponent = ({
  name,
  icon,
  submitUserQuestion,
  submitForChatbotAnswer,
  ...props
}) => {
  const classes = useStyles();

  const [question, setQuestion] = useState("");

  const onKeyPress = (evt) => {
    if (evt.keyCode === 13) {
      submitUserQuestion(question);
      setQuestion("");
      submitForChatbotAnswer(question);
    }
  };

  return (
    <Paper className={classes.userInputRoot}>
      <div className={classes.inputGroup}>
        &nbsp;
        <InputIcon />
        &nbsp;
        <TextField
          label="Enter"
          className={classes.textField}
          value={question}
          onChange={(evt) => setQuestion(evt.target.value)}
          onKeyDown={onKeyPress}
        ></TextField>
      </div>
      <div className={classes.profile}>
        <Typography variant="caption">{name}</Typography>
        {getUserIcon(icon)}
      </div>
      &nbsp;
    </Paper>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.user.name,
    icon: state.user.icon,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitUserQuestion: bindActionCreators(
      actions.submitUserQuestion,
      dispatch
    ),
    submitForChatbotAnswer: bindActionCreators(
      actions.submitForChatbotAnswer,
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TextComponent);
