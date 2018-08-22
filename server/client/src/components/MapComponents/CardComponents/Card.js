import React from 'react';
import { Card } from 'antd';
import Modal from '../../Modal/Modal';

class SingleCard extends React.Component {
    render() {
        const title = 'Dr. ' + this.props.doc.firstname + ' ' + this.props.doc.lastname
        
      return (
        <div>
        <Card title={title} extra={ <Modal doc={this.props.doc}/> }>
        <div width="100%">
        <p><strong>{this.props.doc.type}</strong><br/></p>
        <p><strong>{this.props.doc.clinic}</strong><br/>{this.props.doc.price}<br/></p>
        <p><strong>Address</strong><br/>{this.props.doc.address}<br/></p>
        <p><strong>Phone</strong><br/>{this.props.doc.phone}</p></div>
        </Card>
        </div>
      )
    }
}
  
export default SingleCard