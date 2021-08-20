import React, { useEffect, useState } from 'react'
import './Game.scss'
import '../utils/strikePatterns.scss'
import {calculateWinner, idxPattern} from '../utils/helper'

export default function Game({players})  {
    
 const [squares, setSquares] = useState(Array(9).fill(null))
 const [isXnext, setIsXnext] = useState(true)
 const [score1, setScore1] = useState(0)
 const [score2, setScore2] = useState(0)
 const [step, setStep] = useState(0)
 const [status, setStatus] = useState('')

 const [player1, player2] = players
 const xO = isXnext ? 'X' : 'O'
 const winner = getWinnerName()

 useEffect(() => {
    if (winner) {
        setStatus(winner)
    }  
    if (step === 9 && !winner) {
        setStatus('draw')
    }  
    if (winner === player1) {
        setScore1((prevState) => prevState + 1)
    } 
    if (winner === player2) {
        setScore2((prevState) => prevState + 1)
    }   
 }, [winner, step, player1, player2]) 

const onClick = (e) => {
    let i = +e.target.id
    setStep((prevState) => prevState + 1)

    if (squares[i] === null) {
        setSquares((prevState) => {
            prevState[i] = xO
            setIsXnext(!isXnext)
            return [...prevState] 
        })
    } 
}

function getWinnerName() {
        if(calculateWinner(squares) !== null) {
            return calculateWinner(squares) === 'X' ? player1 : player2   
        }
        return null
    }   

function resetBoard() {
    setSquares(Array(9).fill(null))
    setIsXnext(true)
    setStep(0)
    setStatus('')
}

const renderResult = () => {
    if (status === '') return
    return <div>
            <h2>{status === 'draw' ? `${status.toUpperCase()}!` : `The winner is ${winner}`}</h2>
            <button className='next-round-btn' onClick={resetBoard}>New round</button>
        </div>
}

const renderCrossLine = () => {
    const strikePatterns = ['row-1', 'row-2', 'row-3', 'col-1', 'col-2', 'col-3', 'd-1', 'd-2']
    return <div className={strikePatterns[idxPattern]}></div>
}
    return (
        <div className='game'>
        <div className='game-field' onClick={onClick}>
            {squares.map((el, i) => {
                let disabled = winner || status === 'draw' ? true : false
                return <button disabled={disabled} key={i} id={i} className='square'>{el}</button>
            })}
            {winner ? renderCrossLine() : null}
        </div>
        <div className='game-score'>
            <div className='score'>Score</div>
             <div> {player1} – Score: {score1} </div>
             <div> {player2} – Score: {score2} </div>
             {renderResult()} 
        </div>
        </div>
    )
}

