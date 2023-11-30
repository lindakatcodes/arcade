// all the query selectors
let answer: HTMLInputElement | null = document.querySelector("#answer");
let attemptCount: HTMLInputElement | null = document.querySelector("#attempt");
let userInput: HTMLInputElement | null = document.querySelector("#user-guess");
let finalResult: HTMLElement | null = document.querySelector(".final-result");
let message: HTMLElement | null = document.querySelector(".message");
let guessesBox: HTMLElement | null = document.querySelector(".text-guess");
let encodedGuessesBox: HTMLElement | null =
  document.querySelector(".icon-guess");

// event listeners for buttons
document.querySelector(".form-button")!.addEventListener("click", (e) => {
  guess(e);
});

document.querySelector(".replay-button")?.addEventListener("click", () => {
  resetAnswerValues();
  userInput!.value = "";
  finalResult!.innerHTML = "????";
  finalResult!.classList.remove("success");
  finalResult!.classList.remove("error");
  message!.innerHTML = "";
  message!.classList.remove("success");
  message!.classList.remove("error");
  guessesBox!.innerHTML = "";
  encodedGuessesBox!.innerHTML = "";
  toggleReplayButton();
});

// helper functions
function toggleReplayButton() {
  document.querySelector(".guessing-div")!.classList.toggle("hidden");
  document.querySelector(".replay-div")!.classList.toggle("hidden");
}

function resetAnswerValues() {
  answer!.value = Math.floor(Math.random() * 9999).toString();
  // if the random number is not 4 values long, pad the front with zeroes
  while (answer!.value.length < 4) {
    answer!.value = "0" + answer!.value;
  }
  attemptCount!.value = "0";
}

function setMessage(text, type?) {
  message!.innerHTML = text;
  if (type) {
    if (type === "success") {
      message!.classList.add("success");
      message!.classList.remove("error");
    } else if (type === "error") {
      message!.classList.add("error");
      message!.classList.remove("success");
    }
  }
}

function validateInputLength(param) {
  if (param.length === 4) {
    return true;
  } else {
    setMessage("Guesses must be exactly 4 characters long.", "error");
    return false;
  }
}

function showAnswer(gotIt) {
  finalResult!.innerHTML = answer!.value;

  if (gotIt) {
    finalResult!.classList.add("success");
  } else {
    finalResult!.classList.add("error");
  }
}

// show the user a visual of their last guess and which numbers are in which position
function setResultDetails(userGuess: string) {
  const right = `✔`;
  const mixed = `⇄`;
  const wrong = `✘`;

  const rightAnswer = answer!.value;
  let encodedAnswer = document.createElement("p");
  const regularAnswer = document.createElement("p");
  regularAnswer.innerHTML += userGuess;

  for (let i = 0; i < 4; i++) {
    let current = userGuess.charAt(i);
    if (rightAnswer.charAt(i) === current) {
      encodedAnswer.innerHTML += right;
    } else if (rightAnswer.includes(current)) {
      encodedAnswer.innerHTML += mixed;
    } else {
      encodedAnswer.innerHTML += wrong;
    }
  }

  encodedAnswer.style.marginTop = "0";
  encodedAnswer.style.marginBottom = "0.25rem";
  regularAnswer.style.marginTop = "0";
  regularAnswer.style.marginBottom = "0.25rem";

  guessesBox!.append(regularAnswer);
  encodedGuessesBox!.append(encodedAnswer);
}

// returns a boolean based on the number of correct numbers in the guess
function getResults(userGuess: string) {
  let correctNumbers = 0;
  const rightAnswer = answer!.value;

  for (let i = 0; i < 4; i++) {
    let current = userGuess.charAt(i);
    if (rightAnswer.charAt(i) === current) {
      correctNumbers++;
    }
  }

  if (correctNumbers === 4) {
    return true;
  } else {
    return false;
  }
}

// main game function
function guess(e) {
  e.preventDefault();

  // for initial load or reset
  if (answer!.value === "" || attemptCount!.value === "") {
    resetAnswerValues();
  }

  // making sure to convert here and use this when changing the value so it does math right ;)
  let attempts = Number(attemptCount!.value);

  if (!validateInputLength(userInput!.value)) {
    return false;
  } else {
    attempts += 1;
  }

  setResultDetails(userInput!.value);
  let guessIsRight: boolean = getResults(userInput!.value);
  attemptCount!.value = attempts.toString();

  if (guessIsRight) {
    setMessage("You Win! :)", "success");
    showAnswer(true);
    toggleReplayButton();
  } else if (!guessIsRight && attempts >= 10) {
    setMessage("You Lose! :(", "error");
    showAnswer(false);
    toggleReplayButton();
  } else {
    setMessage("Incorrect, please try again.");
  }
}
