import React from "react";

function Banner({ status, handleReset, children }) {
  return (
    <div className={`${status} banner`}>
      {children}
      {handleReset && (
        <button type="button" onClick={handleReset}>
          New Game?
        </button>
      )}
    </div>
  );
}

export default Banner;
