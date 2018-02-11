import React, {Component} from 'react';
import {Link, Switch, Route} from 'react-router-dom';

import logo from './images/logo.png';

import './index.css';

import Landing from './components/Landing';
import Booking from './components/Booking';

class Header extends Component {
    render() {
        return (
            <div id="wrapper">
                <nav className="navbar navbar-default navbar-static-top booking-main-nav" style={{marginBottom: "0"}}>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target="#navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to="/" className="navbar-brand brand-home"><img src={logo} alt="Logo"/></Link>
                    </div>
                    <div className="collapse navbar-collapse" id="navbar-collapse">
                        <ul className="nav navbar-top-links navbar-right nav-mobile ">
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                    Gör testet
                                </a>
                            </li>
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                    För legitimerade terapeuter
                                </a>
                            </li>
                            {/*/.dropdown*/}
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                    Logga in
                                </a>
                            </li>
                            <li className="dropdown">
                                <a className="dropdown-toggle br-btn" data-toggle="dropdown" href="#">
                                    Logga ut
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Landing}/>
                <Route exact path="/booking" component={Booking}/>
                <Route exact path="/forum" component={Forum}/>
                <Route exact path="/about" component={About}/>
            </Switch>
        )
    }
}

class Forum extends Component {
    render() {
        return (
            <div>
                <h1>Forum page</h1>
            </div>
        )
    }
}

class About extends Component {
    render() {
        return (
            <div>
                <h1>About page</h1>
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Main/>
            </div>
        )
    }
}

export default App;
