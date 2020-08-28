import React from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import { bindActionCreators } from "redux";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  textRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  echoText: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));

const TextComponent = ({ text, handleTextChange, ...props }) => {
  const classes = useStyles();

  const handleChange = (evt) => {
    handleTextChange(evt.target.value);
  };

  return (
    <div className={classes.textRoot}>
      <form noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="TO UPPER"
          variant="outlined"
          onChange={handleChange}
        />
      </form>
      <div className={classes.echoText}>{text}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    text: state.test.key,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleTextChange: bindActionCreators(actions.changeText, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TextComponent);
