// CSS
import './secretWord.css'

// Components
import React, {useCallback, useEffect, useState} from 'react'
import StartScreen from '../../components/secretWord/StartScreen'
import Game from '../../components/secretWord/Game'
import GameOver from '../../components/secretWord/GameOver'


// Data
import {wordsList} from '../../data/words'


export const meta = {
   title: "Desafio 6\nSecret Word",
   icon: "FileCheck",
   menu: true,
   component: "SecretWord",
   path: "/pages/secao6/SecretWord",
};

const stages = [
    {id:1, name: "start"},
    {id:2, name: "game"},
    {id:3, name: "end"}
];

const SecretWord = () => {

    let defaultGuesses = 5;

    const [gameStage, setGameStage] = useState(stages[0].name);
    const [words] = useState(wordsList);
    
    const [pickedWord, setPickedWord] = useState('');
    const [pickedCategory, setPickedCategory] = useState('');
    const [letters, setLetters] = useState([]);

    const [guessedLetters, setGuessedLetters] = useState([]);
    const [wrongLetters, setWrongLetteres] = useState([]);
    const [guesses, setGuesses] = useState(defaultGuesses);
    const [score, setScore] = useState(0);
    
    const comprimentoLista = wordsList.length;
    
    //Seleciona Categoria e Palavra
    const pickWordAndCategory = () => {
        const categories = Object.keys(words);
        const category = categories[Math.floor(Math.random() * categories.length)];
        const word = words[category][Math.floor(Math.random() * words[category].length)]
        
        return {word, category};
        
    }

    //reinicia jogo e reseta estados
    const retry = () => {
        setScore(0);
        setGuesses(defaultGuesses);
        setGameStage(stages[0].name);
    }

    //Fim de jogo
    const gameOver = () => {
        setGameStage(stages[2].name);
    }

    //Inicia o jogo, selecionando a palavra e definindo os estados
    const startGame = useCallback(() => {
        clearLetterStates();
        const {word, category} = pickWordAndCategory();

        let wordLetters = word.split("");
        wordLetters = wordLetters.map((l) => l.toLowerCase());

        setPickedWord(word);
        setPickedCategory(category);
        setLetters(wordLetters);
        setGameStage(stages[1].name);

    });

    //Limpa as letras usadas
    const clearLetterStates = () => {
        setGuessedLetters([]);
        setWrongLetteres([]);
    }
    
    //Monitora condicao de derrota. Se chegar a 0, gameOver
    useEffect(() => {
        if(guesses <= 0){
            clearLetterStates();
            gameOver();
        }
    },[guesses]);

    //Monitora a condicao de vitoria
    useEffect(() => {

        const uniqueLetters = [... new Set(letters)]

        //Palavra correta. Adiciona Score e reinicia o jogo com nova palavra
        if(guessedLetters.length === uniqueLetters.length){
            setScore((actualScore) => actualScore + 100);
            startGame();
        }

    },[guessedLetters]);

    const verifyLetter = (letter) => {
        const normalizedLetter = letter.toLowerCase();

        if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
            return;
        }

        if(letters.includes(normalizedLetter)) {
            setGuessedLetters((actualGuessedLetters) =>[
                ...actualGuessedLetters,
                normalizedLetter
            ])
        } else {
            setWrongLetteres((actualWrongLetters) => [
                ...actualWrongLetters,
                normalizedLetter
            ])
            setGuesses((actualGuesses) => actualGuesses -1);

            
        }

    }

  return (
    <div className='secret_home'>
        <h2>{comprimentoLista}</h2>
        {gameStage === "start" && <StartScreen comando={startGame}/> }
        {gameStage === "game" && (
            <Game 
            verifyLetter={verifyLetter}
            pickedWord={pickedWord}
            pickedCategory={pickedCategory}
            letters={letters}
            guessedLetters={guessedLetters}
            wrongLetters={wrongLetters}
            guesses={guesses}
            score={score}
            />
        )}
        {gameStage === "end" && <GameOver retry={retry} score={score} /> }
    </div>
  )
}

export default SecretWord