import { Button, Modal } from 'antd'
import React from 'react'

export const CheckUser = (props) => {
  return (
    <Modal visible={true} width={450} onCancel={() => window.location.href = props.link} footer={null} style={{margin:"auto"}}>
        <div style={{display:"flex", flexDirection: "column",justifyContent: "center",alignItems: "center",width: "100%",height: "100%"}}>

        <p>{props.message}</p>
        <Button type='primary' onClick={() => window.location.href = props.link}>Okay</Button>
        </div>
    </Modal>
  )
}
