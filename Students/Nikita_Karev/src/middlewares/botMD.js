import { SEND_MSG, sendMessage } from '../store/actions/messages_actions.js';

export default store => next => action => {
    switch (action.type) {
        case SEND_MSG: {
            if (action.sender) {
                setTimeout(() => {
                    let id = Object.keys(store.getState().msgReducer.messages).length + 1;
                    return store.dispatch(
                        sendMessage(id, null, 'Again you? Do not disturb me!')
                    )
                }, 1000)
            }
        }
    }
    return next(action);
};