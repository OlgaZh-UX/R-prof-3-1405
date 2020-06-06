import { RSAA, getJSON } from 'redux-api-middleware';

export let ADD_CHAT = '@@chat/ADD_CHAT';

export let START_CHAT_LOADING = '@@chat/START_CHAT_LOADING';
export let SUCCESS_CHAT_LOADING = '@@chat/SUCCESS_CHAT_LOADING';
export let ERROR_CHAT_LOADING = '@@chat/ERROR_CHAT_LOADING';

export let addChat = title => ({
    type: ADD_CHAT,
    title
});

export const loadChats = () => ({
    [RSAA]: {
        endpoint: './server/db/chats.json',
        method: 'GET',
        types: [
            START_CHAT_LOADING,
            {
                type: SUCCESS_CHAT_LOADING,
                payload: (action, state, res) => getJSON(res)
                            .then(json => json)
            },
            ERROR_CHAT_LOADING
        ]
    }
});