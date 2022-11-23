import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { ApartmentOutlined } from '@ant-design/icons';
import { Modal, Space, Typography,Row,Col } from 'antd';

const { confirm } = Modal;
const { Text, Link } = Typography;


const showConfirm = () => {
  confirm({
    title: 'DONOR INFO',
    icon: <ApartmentOutlined />,
    content: (
      <Space direction="vertical" textAlign="center" style={{width: '100%'}} >
        <Row>
          <Col span={10}>
        <text>
          name:
        </text>
        </Col>
        <Col>
        <b>Srinu</b>
        </Col>
        </Row>
        <Row>
          <Col span={10}>
        <text>
          Aadhar No:
        </text>
        </Col>
        <Col>
        <b>123456789009</b>
        </Col>
        </Row>
        <Row>
          <Col span={10}>
        <text>
          Phone No:
        </text>
        </Col>
        <Col>
        <b>9848022338</b>
        </Col>
        </Row>
        <Row>
          <Col span={10}>
        <text>
           Valid Coupons:
        </text>
        </Col>
        <Col>
        <b>22</b>
        </Col>
        </Row>
        <Row>
          <Col span={10}>
        <text>
          Expired Coupons:
        </text>
        </Col>
        <Col>
        <b>04</b>
        </Col>
        </Row>
      </Space>
    ),
    cancelButtonProps : { style: { display: 'none' } },
    onOk() {
      console.log('OK');
    },
  });

 
};

const App = () => (
  <Space wrap>
    <Link onClick={showConfirm}>Confirm</Link>
  </Space>
);
export default App;
