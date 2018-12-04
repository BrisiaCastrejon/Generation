import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component{

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
                <img alt="logotipo de generation" className="logo" src="https://www.generation.org/wp-content/themes/generation/images/logos/generation-logo.svg"/>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                    <a className="nav-item nav-link" href="#acerca">Acerca de Generation</a>
                    <a className="nav-item nav-link" href="#mision">Misión</a>
                    <a className="nav-item nav-link" href="#vision">Visión</a>
                    <a className="nav-item nav-link" href="#qa">Q&A</a>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Navbar;