import React from "react";

export default function GuessInput({ addGuessToList, gameStatus }) {
  const [guess, setGuess] = React.useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.info({ guess });
    addGuessToList(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => {
          setGuess(e.target.value.toUpperCase());
        }}
        pattern="([A-Z]){5}"
        title="Guess must be 5 letters long"
        disabled={gameStatus !== "running"}
      />
      <span className="guess-input-hint">Guess a 5 letter word</span>
    </form>
  );
}
