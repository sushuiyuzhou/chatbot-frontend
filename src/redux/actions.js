import * as types from "./types";

import axios from "axios";

import { apiHost } from "../config";

export const changeText = (text) => {
  return { type: types.TEST, text };
};

export const changeUserName = (name) => {
  return { type: types.CHANGE_USER_NAME, name };
};

export const changeUserIcon = (icon) => {
  return { type: types.CHANGE_USER_ICON, icon };
};

export const tweakUserDialog = (open) => {
  return { type: types.TWEAK_USER_DIALOG, open };
};

export const submitUserQuestion = (question) => {
  return { type: types.SUBMIT_USER_QUESTION, question };
};

export const restartChat = () => {
  return { type: types.RESTART_CHAT };
};

export const submitForChatbotAnswer = (payload) => {
  return (dispatch) => {
    axios
      .post(apiHost, { question: payload })
      .then((response) => {
        dispatch({
          type: types.GET_CHATBOT_ANSWER,
          answer: response.data.answer,
        });
      })
      .catch((error) => {
        if (error.message && error.message === "Network Error") {
          dispatch({
            type: types.GET_CHATBOT_ANSWER,
            answer: "It seems I'm not here at the moment",
          });
        }
      });
  };
};
