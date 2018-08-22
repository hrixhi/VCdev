import React from 'react';
import { DatePicker } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../../actions'; 
import Times from '../Times/Times';

class Appointment extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        if((nextProps.times && nextProps.times!==this.props.times) || (nextState.displayTime!==this.state.displayTime)) {
            return true
        } else {
            return false
        }
    }

    onChange = (date, dateString) => {
        console.log(date)
        if(!date) {
            this.setState({displayTime: false})
            this.props.cancel()
        } else {
        this.setState({displayTime: true})
       
        this.props.getApts({
            date: date.date(),
            month: date.month(),
            year: date.year(),
            docID: this.props.doc._id
        })

        }
    }
      
    constructor() {
        super();
        const today = new Date(),
        date = today.getDate(),
        month = today.getMonth(),
        time = today.getHours(),
        day = today.getDay();

        this.state = {
            date: date,
            time: time,
            month: month,
            day: day,
            today: today,
            displayTime: false
        };
    }

      
    render() {
        console.log(this.state.displayTime)
        return (
        <div>
          <DatePicker
            onChange = {this.onChange.bind(this)}
            dateRender={(current) => {
            const style = {};
            if (current.month() === this.state.month && current.date()>=this.state.date && current.date()<=this.state.date+7 && current.day()!==0) {
                if(this.state.time>=15 && current.date()===this.state.date) {    
                } else {
                    style.border = '1px solid #1890ff';
                    style.borderRadius = '50%';
                }
            }
            return (
            <div className="ant-calendar-date" style={style}>
                {current.date()}
             </div>
            );
            }}
            />
            { this.state.displayTime && this.props.times ?<div><br/><strong>Available times</strong><br/><br/>
            <Times times={this.props.times} onSelect={this.props.submit}/></div> : null
            }
        </div>

      )}

}

function mapStateToProps(state) {
    if(state.doc.apts) {
        return { 
            times: state.doc.apts.times
          };
    } else {
        return {}
    }
  }
  

export default connect(mapStateToProps, actions)(Appointment);


