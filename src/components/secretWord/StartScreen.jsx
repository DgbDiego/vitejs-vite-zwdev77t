import React from 'react'
import "./StartScreen.css"

const StartScreen = ({comando}) => {
  return (
    <div className='start'>
        <h1>Secret Word</h1>
        <p> Clique no botão abaixo para jogar</p>
        <button onClick={comando} >Começar</button>
    </div>
  )
}

export default StartScreen