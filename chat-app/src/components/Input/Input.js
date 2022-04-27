import React from 'react';
import './Input.css';

export const Input = ({ message, handleMessage, sendMessage }) => {
    
    const handleSubmit = (e) => {
        sendMessage(e);
    };
    
    return (
        <form action="" className="form">
            <input 
                className="input"
                type="text" 
                placeholder="Type a message..."
                value={ message }
                onChange={ handleMessage }
                onKeyPress={ e => e.key === 'Enter' ? sendMessage(e) : null }
            />
            <button 
                className="sendButton"
                onClick={ handleSubmit }
            >
                Send
            </button>
        </form>
    );
};
