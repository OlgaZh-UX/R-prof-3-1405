import update from 'react-addons-update';

//import actions
import {
    SEND_MSG,
    START_MESSAGES_LOADING,
    SUCCESS_MESSAGES_LOADING,
    ERROR_MESSAGES_LOADING
} from '../actions/messages_actions.js';


const initialStore = {
    messages: {},
    isLoading: false,
}

export default function msgReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MSG:
            {
                return update(store, {
                    messages: {
                        $merge: {
                            [action.messageId]: { user: action.sender, text: action.text }
                        }
                    }
                })
            }
        case START_MESSAGES_LOADING:
            {
                return update(store, {
                    isLoading: { $set: true },
                });
            }
        case SUCCESS_MESSAGES_LOADING:
            {
                return update(store, {
                    messages: { $set: action.payload },
                    isLoading: { $set: false }
                })
            }
        case ERROR_MESSAGES_LOADING:
            {
                return update(store, {
                    isLoading: { $set: false },
                })
            }
        default:
            return store;
    }
}