import React from "react";
import ReactDom from "react-dom";
import "./Layout.css";
//redux
import { Provider } from "react-redux";


import MessagesField from "../MessageField/MessageField.jsx";
import Header from "../Header/Header.jsx";
import ChartList from "../ChatList/ChatList.jsx";

import PropTypes from "prop-types";

// let user = "Me";

export default class Layout extends React.Component {
  static propTypes = {
    chatId: PropTypes.string,
    profile: PropTypes.bool,
  };
  static defaultProps = {
    chatId: "1",
    profile: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { messages } = this.state;
    if (
      Object.keys(prevState.messages).length < Object.keys(messages).length &&
      Object.values(messages)[Object.values(messages).length - 1].sender ===
        "me"
    ) {
      setTimeout(
        () => this.sendMessage("Не приставай ко мне, я робот!", "bot"),
        1000
      );
    }
  }

  sendMessage = (message, sender) => {
    const { messages, chats } = this.state;
    const { chatId } = this.props;

    const messageId = Object.keys(messages).length + 1;
    this.setState({
      messages: { ...messages, [messageId]: { text: message, sender: sender } },
      chats: {
        ...chats,
        [chatId]: {
          ...chats[chatId],
          messageList: [...chats[chatId]["messageList"], messageId],
        },
      },
    });
  };

  render() {
    return (
      <div className="layout">
        <Header chatId={this.props.match.params.chatId} profile={false} />
        <ChartList />
        
          <MessagesField
            chatId={this.props.chatId}
            chats={this.state.chats}
            messages={this.state.messages}
            sendMessage={this.sendMessage}
          />
        
      </div>
    );
  }
}
