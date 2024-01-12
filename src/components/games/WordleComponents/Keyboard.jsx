import React from "react";
import { range } from "../../../utils/helpers";

const rows = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function getStatusByLetter(validatedGuesses) {
  const statusObj = {};

  validatedGuesses.forEach((guess) => {
    guess.forEach(({ letter, status }, index) => {
      if (statusObj[letter]) {
        statusObj[letter][index] = status;
      } else {
        const letterArr = range(5).map((spot) => "");
        statusObj[letter] = letterArr;
        statusObj[letter][index] = status;
      }
    });
  });

  return statusObj;
}

function getStatusClass(letterObj) {
  let classToShow = "";
  if (!letterObj) return;

  letterObj.includes("correct")
    ? (classToShow = "correct")
    : letterObj.includes("misplaced")
    ? (classToShow = "misplaced")
    : (classToShow = "incorrect");

  return classToShow;
}

export default function Keyboard({ validatedGuessList }) {
  let statusByLetter = getStatusByLetter(validatedGuessList);

  return (
    <div>
      {rows.map((row, index) => (
        <div className="keyboard-row" key={index}>
          {row.map((letter) => {
            const statusClass = getStatusClass(statusByLetter[letter]);
            return (
              <span key={letter} className={`key ${statusClass || "none"}`}>
                {letter}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}
