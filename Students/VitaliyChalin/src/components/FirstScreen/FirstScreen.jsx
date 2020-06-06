import React from 'react';
import bgFront from '../../layout/img/bg_front.svg';

import './style.css';

export default class FirstScreen extends React.Component {
    render () {
        
        const wrapperStyle = {
            backgroundImage: `url(${ bgFront })`
        }
        
        return (
            <div className="messages__layout first-screen__wrapper" style={ wrapperStyle }>
                <h2 className="first-screen__title mb-3">Привет!</h2>
                <p className="first-screen__text">Пожалуйста, выберите чат или добавьте пользователя.</p>
            </div>
        )
    }
}