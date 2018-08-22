import React from 'react';
import {Card} from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../actions'; 
import MapComponent from './MapComponent';

class MapContainer extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.receivedDocs!=null) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        const toRender = this.props.showMap ? 
        <Card title="Doctors around you">
        <MapComponent
        center={this.props.center}
        isMarkerShown
        markers={this.props.receivedDocs}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCAJ8pBK2XSG5rUbv5F7MNk4iZuT2lk098"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `67vh` }} />}
      /></Card> : null

        return (
           <div> {toRender} </div>
        )
    }
}

function mapStateToProps(state) {
    return { 
      receivedDocs: state.doc.receivedDocs
    };
  }
  
export default connect(mapStateToProps, actions)(MapContainer);