import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Chat } from './components/Chat/Chat';
import { Join } from './components/Join/Join';
import './App.css';

export const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={ Join } />
                    <Route path="/chat" exact component={ Chat } />
                </Switch>
            </div>
        </Router>
    );
};
