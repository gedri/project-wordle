import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import WinBanner from '../WinBanner';
import LoseBanner from '../LoseBanner/LoseBanner';

function getAnswer() {
  const word = sample(WORDS);
  console.log({word});
  return word;
}

function Game() {
  const [answer, setAnswer] = React.useState(getAnswer);
  const [guessResults, setGuessResults] = React.useState([]);
  const [winOrLose, setWinOrLuse] = React.useState()

  function submitGuess(guess) {
    if (winOrLose) return;

    console.log(guess);
    const nextGuessResults = [...guessResults, guess];
    setGuessResults(nextGuessResults);

    if (guess === answer) {
      setWinOrLuse('win');
    } else if (nextGuessResults.length === NUM_OF_GUESSES_ALLOWED) {
      setWinOrLuse('lose');
    } 
  }

  function restartGame() {
    setAnswer(getAnswer());
    setWinOrLuse();
    setGuessResults([]);
  }

  return (
    <>
      <button onClick={restartGame}>Restart Game</button>
      <GuessResults guessResults={guessResults} answer={answer} />
      <GuessInput submitGuess={submitGuess} winOrLose={winOrLose} />
      {winOrLose === 'win' && <WinBanner numGuesses={guessResults.length} />}
      {winOrLose === 'lose' && <LoseBanner answer={answer} />}
    </>
  )
}

export default Game;
