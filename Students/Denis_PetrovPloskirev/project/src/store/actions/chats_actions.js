import { getJSON, RSAA } from 'redux-api-middleware';


export let START_CHATS_LOADING = '@@messages/START_CHATS_LOAING';
export let SUCCESS_CHATS_LOADING = '@@messages/SUCCESS_CHATS_LOAING';
export let ERROR_CHATS_LOADING = '@@messages/ERROR_CHATS_LOAING';

export let START_CHAT_ADDING = '@@messages/START_CHAT_ADDING';
export let SUCCESS_CHAT_ADDING = '@@messages/SUCCESS_CHAT_ADDING';
export let ERROR_CHAT_ADDING = '@@messages/ERROR_CHAT_ADDING';

export let START_CHAT_DELETING = '@@messages/START_CHAT_DELETING';
export let SUCCESS_CHAT_DELETING = '@@messages/SUCCESS_CHAT_DELETING';
export let ERROR_CHAT_DELETING = '@@messages/ERROR_CHAT_DELETING';


export let deleteChat = (chatId) => ({
  [RSAA]: {
    endpoint: `./api/chats/${chatId}`,
    method: 'DELETE',
    headers: { 'Content-type': 'application/json'},
    // body: JSON.stringify({chatId}),
    types: [
      START_CHAT_DELETING,
      {
        type: SUCCESS_CHAT_DELETING,
        payload: (action, state, res) => getJSON(res).then(json => ({ response: json, chat: { chatId}}))
      },
      ERROR_CHAT_DELETING
    ]
  }
});

export let addChat = title => ({
  [RSAA]: {
    endpoint: './api/chats',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title }),
    types: [
      START_CHAT_ADDING,
      {
        type: SUCCESS_CHAT_ADDING,
        payload: (action, state, res) => getJSON(res).then(json => ({ response: json, title}))
      },
      ERROR_CHAT_ADDING
    ]
  }
});

export let loadChats = title => ({
  [RSAA]: {
        endpoint: './api/chats',
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        types: [
          START_CHATS_LOADING,
          {
            type: SUCCESS_CHATS_LOADING,
            payload: (action, state, res) => getJSON(res).then(json => json)
          },
          ERROR_CHATS_LOADING
        ]
      }
});