import React from 'react';
import { Modal, Button } from 'antd';
import Appointment from './Appointments/Appointment';
import {Card} from 'antd';
const confirm = Modal.confirm;

class ModalComponent extends React.Component {
  state = {
    modal2Visible: false,
    loading: false,
    showSubmit: false,
    confirmvisible: false
  }

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }

  // the function that handles the book apointment
  confirm = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, confirmvisible: true });
    }, 2000);
  }

  // modal2Visible: false to close the modal


  showsubmit = () => {
    this.setState({showSubmit: true})
  }

  cancel = () => {
    this.setState({showSubmit: false})
  }

  render() {

    const title = 'Dr. ' + this.props.doc.firstname + ' ' + this.props.doc.lastname
    return (
      <div>
        <Button onClick={() => this.setModal2Visible(true)}>Explore More</Button>
        <Modal
          width="45%"
          title={title}
          wrapClassName="vertical-center-modal"
          visible={this.state.modal2Visible}
          onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}
          footer={[
            this.state.showSubmit ? 
            (<div>
             <Button key="submit" type="primary" loading={this.state.loading} onClick={this.confirm}>
              Book Appointment
            </Button></div>) : null
          ]}
        >
            <Card width="50%">
          <p><strong>Speciality</strong>&nbsp;{this.props.doc.type}</p>
          <p><strong>Clinic</strong>&nbsp;{this.props.doc.clinic}</p>
          <p><strong>Address</strong>&nbsp;{this.props.doc.address}</p>
          </Card>
          <Card width="50%"><strong>Available appointments</strong><br/><br/><Appointment cancel= {this.cancel} submit={this.showsubmit} doc={this.props.doc}/></Card>
        </Modal>
        
      </div>
    )
  }
}



export default ModalComponent;