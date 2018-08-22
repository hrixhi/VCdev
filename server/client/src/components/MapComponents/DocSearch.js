import React from 'react';
import {Input, Button, Alert} from 'antd';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import Slider from './Slider';
import { connect } from 'react-redux';
import * as actions from '../../actions'; 
import MapContainer from '../MapComponents/MapContainer';
import './DocSearch.css';
import CardComponent from './CardComponents/CardComponent';

class DocSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '', inputValue: 5, center: {}, error: null, showMap: false };
  }

  onChange = (value) => {
    this.setState({
      inputValue: value,
    });
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    this.setState({ address });
    
  };

  onSubmit = () => {
    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {this.setState({center: latLng, error: null}); this.props.searchForDocs({...latLng, range: this.state.inputValue}); this.setState({showMap: true})})
      .catch(error => this.setState({error: 'error', showMap: false}));
  }

  render() {
    return (
      <div style={{width: '100%', height: '100%'}}>
      <div className="left">
      <div className="lefter">

      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            Search for doctors or hospitals in: 
            <Input
              {...getInputProps({
                placeholder: 'Enter Location',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div><br/>
            Set Range in kilometers: <Slider inputValue={this.state.inputValue} onChange={this.onChange}/>
            <Button type="primary" icon="search" onClick={this.onSubmit}>Search</Button>
            { this.state.error === 'error' ? <div><br/><Alert
            message="Error"
            description="Please enter a valid address"
            type="error"
            showIcon
           /><br/></div>: null }
          </div>
        )}
      </PlacesAutocomplete> <br/>
        </div>
        <div className="cards">
        <CardComponent/> 
        </div>
       </div>
       <div className="right">
       <MapContainer showMap={this.state.showMap} center={this.state.center}/>
       </div>
       </div>     
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  return { 
    receivedDocs: state.doc.receivedDocs
  };
}

export default connect(mapStateToProps, actions)(DocSearch);