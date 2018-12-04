import React, { Component } from 'react';
import Autocomplete from  'react-autocomplete';
import {getStocks, matchStocks} from '../Data/data'

//import {geolocated} from 'react-geolocated';
import './FilterJobs.css'

class Filter extends Component {

    state = { value: '' };

    render() {
        return(
   
        <div style = {{ marginTop: 40, marginLeft: 50 }}>
        <Autocomplete
          value={ this.state.value }
          inputProps={{ id: 'states-autocomplete' }}
          wrapperStyle={{ position: 'relative', display: 'inline-block' }}
          items={ getStocks() }
          getItemValue={ item => item.Name }
          shouldItemRender={ matchStocks }
          onChange={(event, value) => this.setState({ value }) }
          onSelect={ value => this.setState({ value }) }
          renderMenu={ children => (
            <div className = "menu">
              { children }
            </div>
          )}
          renderItem={ (item, isHighlighted) => (
            <div
              className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
              key={ item.Name } >
              { item.Address }
            </div>
          )}
        />

            <section>
                <button type="button" className="btn btn-outline-primary">Buscar</button>

            </section>
         </div>      
         ) };
}
  
  export default Filter;