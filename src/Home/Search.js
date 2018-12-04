import React from 'react';
import { geolocated } from 'react-geolocated';
 
class Search extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
      latitude:0,
      longitude:0
    }
  }
 componentDidUpdate(prevProps) {
    if (!prevProps.coords && this.props.coords) {
      //this.props.handleCurrentPosition(this.props.coords);      
    }
  }

  componentDidMount(){
    //console.log(this.props); 
  }

  render() {  
    return !this.props.isGeolocationAvailable
      ? <div>Your browser does not support Geolocation</div>
      : !this.props.isGeolocationEnabled
        ? <div>Geolocation is not enabled</div>
        : this.props.coords
          ? <table>            
          </table>
          : <div>Getting the location data&hellip; </div>;
  }
}
 
export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Search);
