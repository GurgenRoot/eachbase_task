import React from "react";

import Button from "antd/es/button";
import EditOutlined from "@ant-design/icons/lib/icons/EditOutlined";
import {Col, Tooltip} from "antd";
import {notification} from "antd";

export const EditButton = ({editInputToggle,setEditInputToggle,task,setEditInputItemId,editInputItemId}) => {
    const openNotification = () => {

        const args = {
            message: 'The task id done',
            description:
                `You can't edit the completed task. Create another task`,
            duration: 0,
        };
        notification.open(args);
    };

    return(
        <Tooltip title={"Edit"} color={'blue'} key={'blue'}>
           <Col className={editInputToggle && editInputItemId === task.id ? 'my-edit_anime' : null}>
              <Button
               type="primary"
               icon={<EditOutlined />}
               onClick={() => {
                   if (task.completed) {
                       openNotification()
                       return
                   }
                   else {
                       setEditInputItemId(task.id)
                       setEditInputToggle(false)
                   }
               }}
              />
           </Col>
        </Tooltip>
    )
};
