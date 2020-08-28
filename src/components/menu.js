import React from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import { bindActionCreators } from "redux";

import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import RefreshIcon from "@material-ui/icons/Refresh";
import Avatar from "@material-ui/core/Avatar";
import { blue, orange } from "@material-ui/core/colors";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  menuRoot: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "100%",
    width: "150px",
    marginTop: theme.spacing(1),
  },
  homeButton: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
  },
  refreshButton: {
    color: theme.palette.getContrastText(orange[500]),
    backgroundColor: orange[500],
  },
}));

const TextComponent = ({ restartChat, ...props }) => {
  const classes = useStyles();

  const redirectToGithub = () => {
    window.location.href = "https://github.com/sushuiyuzhou";
  };

  return (
    <div className={classes.menuRoot}>
      <Tooltip title="To Github" aria-label="home">
        <Avatar onClick={redirectToGithub} className={classes.homeButton}>
          <HomeIcon />
        </Avatar>
      </Tooltip>
      <Tooltip title="Restart chat" aria-label="refresh">
        <Avatar onClick={restartChat} className={classes.refreshButton}>
          <RefreshIcon />
        </Avatar>
      </Tooltip>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    restartChat: bindActionCreators(actions.restartChat, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TextComponent);
