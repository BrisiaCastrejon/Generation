import React, { Component } from 'react';
import './Login.css';
import Navbar from './Navbar';
import SectionForm from './SectionForm';

class Login extends Component{

    render(){
        return(
            <section>
                <section><Navbar /></section>
                <section className="row"><SectionForm /></section>              
            </section>
        );
    }
}
export default Login;