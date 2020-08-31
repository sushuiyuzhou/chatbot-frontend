import React from "react";

import configureStore from "./redux/store";
import { Provider as ReduxProvider } from "react-redux";

import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";

import UserForm from "./components/user-form";
import UserInput from "./components/user-input";
import ChatWindow from "./components/chat";
import Menu from "./components/menu";

import WindowImage from "./img/rain.jpg";

const theme = createMuiTheme({
  status: {},
});

const store = configureStore();

const appStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
    // backgroundImage: `url(${WindowImage})`,
  },
  mainView: {
    width: "100%",
    maxWidth: "600px",
    minHeight: "96vh", // fill the screen by default
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    // backgroundColor: "#b2ebf2",
    backgroundImage: `url(${WindowImage})`,
    margin: "1vh",
  },
  menu: {
    height: "6vh",
  },
  chatWindow: {
    height: "80vh",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    marginTop: theme.spacing(1),
    width: "90%",
    display: "block",
  },
  userInput: {
    height: "10vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

const App = () => {
  const classes = appStyles();

  return (
    <ThemeProvider theme={theme}>
      <ReduxProvider store={store}>
        <div className={classes.root}>
          <Paper elevation={3} className={classes.mainView}>
            <UserForm />
            <div className={classes.menu}>
              <Menu />
            </div>
            <div className={classes.chatWindow}>
              <ChatWindow />
            </div>
            <div className={classes.userInput}>
              <UserInput />
            </div>
          </Paper>
        </div>
      </ReduxProvider>
    </ThemeProvider>
  );
};

export default App;
