import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';

export const Join = () => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleRoom = (e) => {
        setRoom(e.target.value);
    };

    const handleLink = (e) => (
        (!name || !room) ? e.preventDefault() : null 
    );

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <div>
                    <input 
                        placeholder="Name"
                        className="joinInput"
                        type="text"
                        onChange={ handleName } 
                    />
                </div>
                <div>
                    <input 
                        placeholder="Room"
                        className="joinInput mt-20"
                        type="text"
                        onChange={ handleRoom } 
                    />
                </div>
                <Link 
                    onClick={ handleLink }
                    to={`/chat?name=${name}&room=${room}`}
                >
                    <button
                        className="button mt-20"
                        type="submit"
                    >
                        Sign In
                    </button>
                </Link>
            </div>
        </div>
    );

};
