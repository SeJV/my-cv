import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Navbar from'./components/Navbar'
import Home from './pages/Home'
import CV from './pages/CV'
import Projects from './pages/Projects'

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/cv">
                    <CV />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
