import update from 'react-addons-update';

import { ADD_PROFILE, SUCCESS_PROFILE_LOADING } from '../actions/profiles_actions.js';

const initialStore = {
    profiles: {}
}

export default function profileReducer(store = initialStore, action) {
    switch (action.type) {
        case ADD_PROFILE: {
            return update(store, {
                profiles: {
                    $merge: {
                        [action.chatId]: { userName: action.userName, bio: action.bio, avatar: action.avatar }
                    }
                }
            })
        }
        case SUCCESS_PROFILE_LOADING: {
            return update(store, {
                profiles: { $set: action.payload }
            })
        }
        default:
            return store;
    }
}