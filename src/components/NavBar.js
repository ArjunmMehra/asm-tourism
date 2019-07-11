import React, { Component } from 'react';
import logo from '../images/logo.png'
import  {FaAlignRight} from 'react-icons/fa'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    state = {
        isOpen: false
    }

    handleToggle = () =>{
        this.setState(()=>{
            return (
                { isOpen: !this.state.isOpen }
            )
        })
    }

    render() {
        return (
            <nav className="navbar">
                <div id="navb" className="nav-center">
                <div className="nav-header">
                <Link to="/">
                    <img className="nav-logo" src={logo} alt="LOGO_IMG"/>
                </Link>
                <button className="nav-btn" type="button" onClick={this.handleToggle}>
                    <FaAlignRight className="nav-icon"/>
                </button>
                </div>
                <ul className= {this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                {/* @todo seperate the links in another file in array */}
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/rooms">Rooms</Link>
                    </li>
                </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;