import { combineReducers } from "redux";

import * as types from "./types";
import initialState from "./initialState";

const testReducer = (state = initialState.test, action) => {
  switch (action.type) {
    case types.TEST:
      return { ...state, key: action.text };
    default:
      return state;
  }
};

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case types.CHANGE_USER_NAME:
      return { ...state, name: action.name };
    case types.CHANGE_USER_ICON:
      return { ...state, icon: action.icon };
    case types.TWEAK_USER_DIALOG:
      return { ...state, open: action.open };
    default:
      return state;
  }
};

const chatReducer = (state = initialState.chat, action) => {
  switch (action.type) {
    case types.SUBMIT_USER_QUESTION:
      return [
        ...state,
        {
          party: "user",
          time: new Date().toLocaleString(),
          content: action.question,
        },
      ];
    case types.GET_CHATBOT_ANSWER:
      return [
        ...state,
        {
          party: "bot",
          time: new Date().toLocaleString(),
          content: action.answer,
        },
      ];
    case types.RESTART_CHAT:
      return [];
    default:
      return state;
  }
};

// root reducer
export default combineReducers({
  // format - name of the state section : reducer function
  test: testReducer,
  user: userReducer,
  chat: chatReducer,
});
