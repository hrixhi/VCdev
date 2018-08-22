import React from 'react';
import {Card} from 'antd';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
const { withStateHandlers } = require("recompose");


class MapComponent extends React.Component {

    state = {}

    render() {
        const Markers = this.props.markers.map((doc) => {

            const title = 'Dr. ' + doc.firstname + ' ' + doc.lastname

            return (
            <Marker key={doc.lat} position={{lat: Number(doc.lat), lng: Number(doc.long)}} onClick={this.props.onToggleOpen}>
             {this.props.isOpen && <InfoWindow onCloseClick={this.props.onToggleOpen}>
            <div><Card title={title}><div>{doc.type}<br/>{doc.clinic}<br/>{doc.price}</div></Card></div>
            </InfoWindow>}
            </Marker>
            )

        })

        console.log(Markers)

        return (
            <div>
            <GoogleMap
            defaultZoom={13}
            defaultCenter={this.props.center}
            >
            {Markers}
            </GoogleMap>
            </div>
        )
    }

}

export default withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  })(withScriptjs(withGoogleMap(MapComponent)));