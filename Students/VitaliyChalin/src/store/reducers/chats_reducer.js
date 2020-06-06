import update from  'react-addons-update';

import { ADD_CHAT, SUCCESS_CHAT_LOADING } from '../actions/chats_actions.js';

let initialStore = {
    chats: {}
}

export default function chatsReducer(store = initialStore, action) {
    switch (action.type) {
        case ADD_CHAT: {
            let chatId = Object.keys(store.chats).length + 1;

            return update(store, {
                chats: {
                    $merge: {
                        [chatId]: {
                            title: action.title,
                            messagesList: []
                        }
                    }
                }
            });
        }
        case SUCCESS_CHAT_LOADING: {
            return update(store, {
                chats: { $set: action.payload }
            })
        }
        default:
            return store;
    }
}