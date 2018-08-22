import React from 'react';
import { Select } from 'antd';

const Option = Select.Option;

class Selector extends React.Component {

shouldComponentUpdate(nextProps, nextState) {
  if(nextProps.times !== this.props.times) {
    return true
  }
  return false
}

handleChange = (value) => {
  console.log(`selected ${value}`);
}

render() {

    const times = this.props.times.map((time) => {
      let timess = time.hour + ':' + (time.minute===0? '00' :time.minute);
      return <Option key={timess} value={ timess }>{ timess }</Option>
    })

    const x = this.props.times[0].hour + ':' + (this.props.times[0].minute===0?'00':this.props.times[0].minute);
    console.log(x)
    
    return(
        <div>
          <Select defaultActiveFirstOption style={{ width: 120 }} onChange={this.handleChange} onSelect={this.props.onSelect}>
          {times}
          </Select>
    </div>
    )
}

}

export default Selector;


