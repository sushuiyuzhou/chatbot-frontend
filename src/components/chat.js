import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import { bindActionCreators } from "redux";

import { makeStyles } from "@material-ui/core/styles";

import BotSentence from "./bot-sentence";
import UserSentence from "./user-sentence";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "450px",
    overflow: "auto",
    marginTop: "5px",
  },
  scroll1: {
    width: "100%",
    height: "75vh",
    overflow: "hidden",
  },
  scroll2: {
    width: "100%",
    height: "100%",
    overflowY: "scroll",
    paddingRight:
      "17px" /* Increase/decrease this value for cross-browser compatibility */,
    boxSizing: "content-box" /* So the width will be 100% + 17px */,
  },
}));

const generateChatView = (ctns) => {
  if (ctns) {
    return ctns.map((chat) => {
      if (chat.party === "bot") {
        return <BotSentence time={chat.time} sentence={chat.content} />;
      } else {
        return <UserSentence time={chat.time} sentence={chat.content} />;
      }
    });
  }
};

const ChatWindowComponent = ({ ctns, ...props }) => {
  const classes = useStyles();

  const scrollToBottom = () => {
    const messageBody = document.querySelector("#chat-window");
    messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, [ctns]);

  return (
    <div className={classes.root}>
      <div className={classes.scroll1}>
        <div id="chat-window" className={classes.scroll2}>
          {generateChatView(ctns)}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ctns: state.chat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitUserQuestion: bindActionCreators(
      actions.submitUserQuestion,
      dispatch
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatWindowComponent);
