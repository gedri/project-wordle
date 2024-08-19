import React from 'react';

function GuessInput({winOrLose, submitGuess}) {

  const [guess, setGuess] = React.useState(''); 

  function handleSubmit(event) {
    event.preventDefault();
    submitGuess(guess);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper"
      onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        disabled={winOrLose}
        id="guess-input" 
        type="text" 
        pattern='[a-zA-Z]{5}'
        value={guess}
        onChange={event => setGuess(event.target.value.toUpperCase())}
        />
    </form>
  ); 
}

export default GuessInput;
