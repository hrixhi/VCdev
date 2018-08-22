import React from 'react';

import { Slider, InputNumber, Row, Col } from 'antd';

class IntegerStep extends React.Component {
  render() {
    return (
      <Row>
        <Col span={12}>
          <Slider min={1} max={15} onChange={(value) => this.props.onChange(value)} value={this.props.inputValue} />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={20}
            style={{ marginLeft: 16 }}
            value={this.props.inputValue}
            onChange={this.props.onChange}
          />
        </Col>
      </Row>
    );
  }
}

export default IntegerStep;