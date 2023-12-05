import React from "react";
import Guess from "../WordleComponents/Guess";
import { range } from "../../utils/helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../Wordle.astro";

export default function GuessList({ guessList, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} value={guessList[num]} answer={answer} />
      ))}
    </div>
  );
}
