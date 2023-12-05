import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../Wordle.astro";
import { checkGuess } from "../../utils/wordle-helpers";
import { WORDS } from "../../utils/wordle-data";
import { sample } from "../../utils/helpers";
import GuessInput from "../WordleComponents/GuessInput";
import GuessList from "../WordleComponents/GuessList";
import LostBanner from "../WordleComponents/LostBanner";
import WonBanner from "../WordleComponents/WonBanner";
import Keyboard from "../WordleComponents/Keyboard";

export default function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");
  const [answer, setAnswer] = React.useState(() => {
    return sample(WORDS);
  });

  function addGuessToList(guessValue) {
    const nextGuessList = [...guessList, guessValue];
    setGuessList(nextGuessList);
    if (guessValue === answer) {
      setGameStatus("won");
    } else if (nextGuessList.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  const validatedGuessList = guessList.map((guess) =>
    checkGuess(guess, answer)
  );

  function resetGame() {
    setGuessList([]);
    setGameStatus("running");
    setAnswer(sample(WORDS));
  }

  return (
    <>
      <GuessList guessList={validatedGuessList} answer={answer} />
      <GuessInput addGuessToList={addGuessToList} gameStatus={gameStatus} />
      <Keyboard validatedGuessList={validatedGuessList} />
      {gameStatus === "won" && (
        <WonBanner numOfGuesses={guessList.length} handleReset={resetGame} />
      )}
      {gameStatus === "lost" && (
        <LostBanner answer={answer} handleReset={resetGame} />
      )}
    </>
  );
}
