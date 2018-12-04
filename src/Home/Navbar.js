import React, { Component } from 'react';
import ButtonLogout from './ButtonLogout';
import './Navbar.css';

class Navbar extends Component{

    render(){
        return(
            <header>
                <nav className="navbar navbar-light bg-light nav-pills">
                    <a className="navbar-brand" href="#inicio">
                    <img alt="logotipo de generation" className="logo" 
                    src="https://www.generation.org/wp-content/themes/generation/images/logos/generation-logo.svg"/>
                    </a>

                    <ButtonLogout />
                </nav>
            </header>
        );
    }
}
export default Navbar;