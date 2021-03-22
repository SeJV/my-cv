import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Navbar from'./components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import CV from './pages/CV'
import Projects from './pages/Projects'
import Impressum from './pages/Impressum'
import Finance from './pages/Finance'

function App() {
    return (
        <Router>
            <Navbar />
            <div className="body">
                <Switch>
                    <Route path="/cv"><CV /></Route>
                    <Route path="/projects"><Projects /></Route>
                    <Route path="/impressum"><Impressum /></Route>
                    <Route path="/finance"><Finance /></Route>
                    <Route path="/"><Home /></Route>
                </Switch>
            <Footer/>
            </div>
        </Router>
    );
}

export default App;
