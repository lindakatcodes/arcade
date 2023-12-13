import React from "react";
import Guess from "../WordleComponents/Guess";
import { range } from "../../utils/helpers";

export default function GuessList({ guessList, answer }) {
  return (
    <div className="guess-results">
      {range(6).map((num) => (
        <Guess key={num} value={guessList[num]} answer={answer} />
      ))}
    </div>
  );
}
