import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions'; 
import Card from './Card';

class CardComponent extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.receivedDocs!=null) {
        return true;
    } else {
        return false;
    }
  }

    render() {
      const cards = this.props.receivedDocs!=null ?
        this.props.receivedDocs.map((doc) => {
          return <Card doc={doc} key={doc._id}/>
        }) : null

      return (
        <div>{cards}</div>
      )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return { 
      receivedDocs: state.doc.receivedDocs
    };
}
  
export default connect(mapStateToProps, actions)(CardComponent);