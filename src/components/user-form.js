import React from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import { bindActionCreators } from "redux";

import { makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

import GitHubIcon from "@material-ui/icons/GitHub";
import AdbIcon from "@material-ui/icons/Adb";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    margin: theme.spacing(1),
    width: 225,
  },
  title: {
    textAlign: "center",
  },
  inputLabel: {
    textAlign: "center",
    width: 200,
  },
  formControl: {
    width: 200,
  },
}));

const UserFormComponent = ({
  name,
  icon,
  open,
  changeUserName,
  changeUserIcon,
  tweakUserDialog,
  ...props
}) => {
  const classes = useStyles();

  return (
    <Dialog open={open}>
      <DialogTitle>
        <Typography variant={"subtitle1"} className={classes.title}>
          Chatbot Settings
        </Typography>
      </DialogTitle>
      <div className={classes.form}>
        <TextField
          label="User Nickname"
          defaultValue={name}
          className={classes.inputLabel}
          onChange={(evt) => changeUserName(evt.target.value)}
        />
        <br />
        <FormControl className={classes.formControl}>
          <InputLabel id="user-icon">Choose your user icon</InputLabel>
          <Select
            labelId="user-icon"
            id="user-icon"
            value={icon}
            onChange={(evt) => changeUserIcon(evt.target.value)}
          >
            <MenuItem value={1}>
              <GitHubIcon /> - the git master
            </MenuItem>
            <MenuItem value={2}>
              <AdbIcon /> - droid expert
            </MenuItem>
            <MenuItem value={3}>
              <AnnouncementIcon /> - not without surprise
            </MenuItem>
            <MenuItem value={4}>
              <DirectionsRunIcon /> - in a rush
            </MenuItem>
          </Select>
        </FormControl>
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={() => tweakUserDialog(false)}
        >
          Confirm
        </Button>
        <br />
      </div>
    </Dialog>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.user.name,
    icon: state.user.icon,
    open: state.user.open,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeUserName: bindActionCreators(actions.changeUserName, dispatch),
    changeUserIcon: bindActionCreators(actions.changeUserIcon, dispatch),
    tweakUserDialog: bindActionCreators(actions.tweakUserDialog, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserFormComponent);
