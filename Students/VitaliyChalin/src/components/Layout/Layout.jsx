import React, { Profiler } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header.jsx';
import ChatList from '../ChatList/ChatList.jsx';
import Profile from '../Profile/Profile.jsx';
import FirstScreen from '../FirstScreen/FirstScreen.jsx';
import MessageField from '../MessageField/MessageField.jsx';

import './style.css';

export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.string,
        userName: PropTypes.string,
        pathCode: PropTypes.string
    };
    static defaultProps = {
        chatId: '',
        pathCode: ''
    };

    render() {
        let userName = this.props.userName;
        let pathCode = this.props.pathCode;

        let thisLayout = '';

        if(pathCode !== 'profile' && !this.props.chatId) {
            thisLayout = (
                <div className="layout__wrapper">
                    <Header chatId={ this.props.chatId } userName={ userName } />
                    <ChatList chatId={ this.props.chatId } />
                    <FirstScreen chatId={ this.props.chatId } />
                </div>
            );
        } else if(pathCode !== 'profile' && this.props.chatId) {
            thisLayout = (
                <div className="layout__wrapper">
                    <Header chatId={ this.props.chatId } userName={ userName } />
                    <ChatList chatId={ this.props.chatId } />
                    <MessageField chatId={ this.props.chatId } />
                </div>
            );
        } else if(pathCode === 'profile' && this.props.chatId) {
            thisLayout = (
                <div className="layout__wrapper">
                    <Header chatId={ this.props.chatId } userName={ userName } />
                    <ChatList chatId={ this.props.chatId }  widthCont={ '20%' }  />
                    <MessageField chatId={ this.props.chatId } widthCont={ '55%' } />
                    <Profile chatId={ this.props.chatId } />
                </div>
            );
        }

        return thisLayout;
    }
}