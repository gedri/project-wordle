import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers'

function Guess({guess, answer}) {

  const results = checkGuess(guess, answer)

  return (
    <p className="guess">    
      {range(5).map(index => (
        <span className={`cell ${results ? results[index].status : ''}`} 
              key={index}>{guess ? guess[index] : ''}</span>
        ))}
    </p>
  )
}

export default Guess;
