import React from "react";
import { checkGuess } from "../../../utils/wordle-helpers";
import { WORDS } from "../../../utils/wordle-data";
import { sample } from "../../../utils/helpers";
import GuessInput from "./GuessInput";
import GuessList from "./GuessList";
import LostBanner from "./LostBanner";
import WonBanner from "./WonBanner";
import Keyboard from "./Keyboard";

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
    } else if (nextGuessList.length >= 6) {
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
