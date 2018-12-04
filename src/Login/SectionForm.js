import React, { Component } from 'react';
import {ConfigFire} from '../Firebase/Firebase';
import { withRouter} from 'react-router-dom';
import './SectionForm.css';

class SectionForm extends Component{
    constructor(props){
        super(props);

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

        this.state = {
            email: '',
            pass: '',
        };
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }

    handleChangePass(event) {
        this.setState({pass: event.target.value});
    }

    handleLogin(){
        // .then(()=>{
        //     this.props.history.replace('/home');    
        // })
        // esta wea no jala, no se qué le moví :'(
        ConfigFire.auth().signInWithEmailAndPassword(this.state.email, this.state.pass)
        .then(
            this.props.history.push("/home")
        )
        .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
    }

    render(){
        return(
            <section className="back-img">
                <form className="col-lg-4 col-md-6 col-sm-8 col-xs-4 offset-xs-2 offset-sm-2 offset-md-3 offset-lg-4 form-login">   
                    <div className="form-group">
                        <label for="exampleInputEmail1">Correo</label>
                        <input type="email" className="form-control inputs" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Ingresa tu correo" value={this.state.email} onChange={this.handleChangeEmail} required/> 
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Contraseña</label>
                        <input type="password" className="form-control inputs" id="exampleInputPassword1" placeholder="Contraseña"
                        value={this.state.pass} onChange={this.handleChangePass} required/>
                    </div>
                    <button onClick={this.handleLogin} type="submit" className="btn btn-primary">Inicia sesión</button>
                </form>        
            </section>
        );
    }
}
export default withRouter(SectionForm);