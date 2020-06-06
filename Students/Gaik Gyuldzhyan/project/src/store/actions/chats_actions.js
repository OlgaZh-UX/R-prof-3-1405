import { getJSON, RSAA } from 'redux-api-middleware';

export let ADD_CHAT = '@@chat/ADD_CHAT';

export let START_CHATS_LOADING = '@@messages/START_CHATS_LOAING';
export let SUCCESS_CHATS_LOADING = '@@messages/SUCCESS_CHATS_LOAING';
export let ERROR_CHATS_LOADING = '@@messages/ERROR_CHATS_LOAING';

export let addChat = title => ({
    type: ADD_CHAT,
    title
});