import React from 'react';

import Button from 'antd/es/button';
import {Col, Tooltip} from 'antd';

export const GoBackButton = ({setEditInputToggle, editInputToggle}) => (
  <Tooltip title={'Go Back'} color={'blue'} key={'blue'}>
    <Col className='my-anime'>
      <Button type="primary" onClick={() => {
        setEditInputToggle(!editInputToggle);
      }}>Back
      </Button>
    </Col>
  </Tooltip>
);
