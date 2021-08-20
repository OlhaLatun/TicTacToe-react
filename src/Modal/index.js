
import React, { useState } from 'react'
import './Modal.scss'

export default function Modal(props) {

    const [isValid, setIsValid] = useState(false)

  const handleSubmit = (e) => {
      e.preventDefault()
      const player1 = e.target[0].value
      const player2 = e.target[1].value

      if (player1 !== '' && player2 !== '') {
        props.setPlayers(player1, player2)
        props.setModalStatus()
      } else {
        setIsValid(true)
      }  
  }
    return (
        <div className='modal'>
            <form className='modal-form' onSubmit={handleSubmit}>
            <label htmlFor='player1'> Enter "Player 1" </label>
            <input className='modal-input'
                id='player1' 
                type='text'
                placeholder='Enter the name' />
            <label htmlFor='player2'> Enter "Player 2" </label> 
            <input className='modal-input'
                id='player2' 
                type='text'
                placeholder='Enter the name' />
                {isValid ? <span className='warn-message'>You forgot to enter your name</span> : null}
            <button className='modal-submit' type='submit' >Save</button>
            </form>
        </div>
    )
}