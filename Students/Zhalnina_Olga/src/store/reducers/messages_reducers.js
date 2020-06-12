import update from "react-addons-update";

//import actions
import {
  SEND_MSG,
} from "../actions/messages_actions.js";
import { SUCCESS_MESSAGES_LOADING } from "../../../../../PR/6/src/store/actions/messages_actions.js";

const initialStore = {
  sender: "Me",
  users: ["Bob", "Alice", "Fill", "Alex"],
  respondent: "",
  messages: {},
};

export default function msgReducer(store = initialStore, action) {
  switch (action.type) {
    case SEND_MSG: {
      return update(store, {
        messages: {
          $merge: {
            [action.messageId]: {
              sender: action.sender,
              text: action.text,
            },
          },
        },
      });
    }
    case SUCCESS_MESSAGES_LOADING: {
      return update(store, {
        messages: { $set: action.payload },
      });
    }
    
    default:
      return store;
  }
}
