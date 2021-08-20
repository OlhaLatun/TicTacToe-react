import React, { useState } from 'react';
import Modal from '../Modal'
import Game from '../Game'

export default function App() {

const [players, setPlayers] = useState(['Player 1', 'Player 2'])
const [modalStatus, setModalStatus] = useState(true)
 
  return (
    <>
    {modalStatus ? 
    <Modal 
    setPlayers={(p1, p2) => setPlayers([p1, p2])} 
    setModalStatus={() => setModalStatus(false)}
    /> 
    : null}
    <Game players={players}/> 
    </>
  )
}


