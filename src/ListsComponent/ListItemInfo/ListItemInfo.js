import React from 'react';

import InfoCircleOutlined from '@ant-design/icons/lib/icons/InfoCircleOutlined';
import {Popover} from 'antd';

import ListItemInfoContent from '../ListItemInfoContent';

export const ListItemInfo = ({task}) => (
  <Popover placement="bottom" title='Other Information'
           content={<ListItemInfoContent task={task}/>}
           trigger="click"
  >
    <InfoCircleOutlined className='icon info-color'/>
  </Popover>
);
