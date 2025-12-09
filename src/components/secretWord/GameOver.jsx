import React from 'react'
import './GameOver.css'

const GameOver = ({retry, score=0}) => {
  return (
    <div>
        <h2>Fim de Jogo</h2>
        <h2>Voce fez <span>{score}</span> pontos.</h2>
        <button onClick={retry}>Voltar ao menu</button>
    </div>
  )
}

export default GameOver