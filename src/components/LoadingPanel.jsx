import React, { useState, useEffect } from 'react'
import './LoadingPanel.css'

export const vis = false;

const LoadingPanel = ({message,enabled}) => {
    const [visible, setVisible] = useState(false)

    useEffect(() =>{
        setVisible(enabled)
    },[enabled])

    const OKClick = () => {
        setVisible(false)
    }

    const panelClass = visible ? "loadingPanel visible" : "loadingPanel hidden"

  return (
    <div className={panelClass} >
        <div className='cardPanel'>
            {message}
            <button onClick={() => OKClick()}>OK</button>
        </div>
    </div>
  )
}

export default LoadingPanel