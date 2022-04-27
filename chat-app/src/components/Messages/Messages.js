import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import { Message } from './Message/Message';
import './Messages.css';

export const Messages = ({ messages, name }) => {
    return (
        <ScrollToBottom className="messages">
            { 
                messages.map((message, i) => {
                    return <Message 
                                key={i}
                                message={ message }
                                name={ name }
                            />
                })
            }
        </ScrollToBottom>
    );
};
