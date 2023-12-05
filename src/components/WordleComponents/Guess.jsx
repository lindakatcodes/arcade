import React from "react";
import { range } from "../../utils/helpers";
import { WORD_LENGTH } from "../Wordle.astro";

// hadn't thought of this - having another "component" within the same file
// only decent when the component is small and only used by the main file component
function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}

export default function Guess({ value, answer }) {
  return (
    <p className="guess">
      {range(WORD_LENGTH).map((num) => (
        <Cell
          key={num}
          letter={value ? value[num].letter : undefined}
          status={value ? value[num].status : undefined}
        />
      ))}
    </p>
  );
}
