import React from "react";
import Banner from "./Banner";

export default function WonBanner({ numOfGuesses, handleReset }) {
  return (
    <Banner status="happy" handleReset={handleReset}>
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
        </strong>
        .
      </p>
    </Banner>
  );
}
