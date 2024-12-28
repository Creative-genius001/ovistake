import React from 'react'
import { connectedButtonTabStyle, disconnectBtn } from './styles/style.css'

interface ConnectedButtonTabProp {
    onClickDisconnectBtn: ()=> void,

}

const ConnectedButtonTab = ({onClickDisconnectBtn}: ConnectedButtonTabProp) => {

  return (
    <div className={connectedButtonTabStyle}>
        <div>
            <button onClick={onClickDisconnectBtn} className={disconnectBtn}>Disconnect</button>
        </div>
    </div>
  )
}

export default ConnectedButtonTab