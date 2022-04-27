import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import { InfoBar } from '../InfoBar/InfoBar';
import { Input } from '../Input/Input';
import { Messages } from '../Messages/Messages';
import './Chat.css';
import { TextContainer } from '../TextContainer/TextContainer';

let socket;

export const Chat = ({ location }) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const ENDPOINT = 'localhost:8080';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
        socket = io(ENDPOINT);
        setName(name);
        setRoom(room);
        socket.emit('join', { name, room }, () => {
            
        });
        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([ ...messages, message]);
        });
        socket.on("roomData", ({ users }) => {
            setUsers(users);
        });
    }, [messages]);

    const handleMessage = (e) => {
        setMessage(e.target.value);
    };

    // Function for sending messages
    const sendMessage = (e) => {
        e.preventDefault();
        if(message) {
            socket.emit('sendMessage', message);
        }
        setMessage('');
    };

    console.log(message, messages);

    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar 
                    room={ room }
                />
                <Messages 
                    messages={ messages }
                    name={ name }
                />
                <Input 
                    message={ message }
                    handleMessage={ handleMessage }
                    sendMessage={ sendMessage }
                />
            </div>
            <TextContainer users={users}/>
        </div>
    );

};
