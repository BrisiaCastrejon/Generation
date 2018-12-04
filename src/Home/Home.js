import React, { Component } from 'react';
import Navbar from './Navbar';
import Map from './Map';
import Search from './Search';

class Home extends Component{
    constructor(props){
        super(props)

        this.handleCurrentPosition = this.handleCurrentPosition.bind(this);
        this.handleShowPosition = this.handleShowPosition.bind(this);

        this.state = {
            coords: {
                lat:19.43,
                lng:-99.13
            }
        }
    }

    handleCurrentPosition(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.handleShowPosition);
        } else {
            console.log('navegador no soportado');
        }  
    }

    handleShowPosition(position){
        const newLatitude = position.coords.latitude;
        const newLongitude = position.coords.longitude;
        this.setState({
            coords:{
                lat:newLatitude,
                lng:newLongitude
            }})
    }

    componentDidMount(){
        this.handleCurrentPosition();
    }

    render(){
        console.log(this.state);
        
        return(
            // <div>
            // <Search latitude={this.state.latitude} longitude={this.state.longitude} handleCurrentPosition={this.handleCurrentPosition}/>
            // <ButtonLogout />
            // </div>
            <div>
            <Navbar />
            <Map coords={this.state.coords}/>
            <Search />
           
            </div>
        );
    }
}
export default Home;