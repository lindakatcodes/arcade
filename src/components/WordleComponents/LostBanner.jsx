import React from "react";
import Banner from "../WordleComponents/Banner";

export default function LostBanner({ answer, handleReset }) {
  return (
    <Banner status="sad" handleReset={handleReset}>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}
