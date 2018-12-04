import React, { Component } from 'react';
import {ConfigFire} from '../Firebase/Firebase';
import { withRouter } from 'react-router-dom';
// styles
import './ButtonLogout.css'

class ButtonLogout extends Component{
    constructor(props){
        super(props);

        this.handleLogout = this.handleLogout.bind(this);

        this.state = {
            email: null,
            pass: '',
        };
    }

    handleLogout(){
        ConfigFire.auth().signOut()
        .then(
            this.props.history.replace('/login')
        )
        .catch(function(error) {
            // An error happened.
        });
    }
    render(){
        return(
            <div className="boton px-2 py-1">
            <a  onClick={this.handleLogout}>Cerrar sesión</a>
            </div>
        );
    }
}
export default withRouter(ButtonLogout);