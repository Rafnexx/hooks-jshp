import React, { useState, useEffect } from "react";
import Button from "../buttons/Button";

function CustomHook() {
  const userText = useKeyPress("Once upon a time...");
  // const userText2 = useKeyPress("Not upon a time...");

  return (
    <div className="user-input">
      <h1>Your text will show up below! Backspace works!</h1>
      <blockquote className="user-input-block">{userText}</blockquote>
      {/* <blockquote className="user-input-block">{userText2}</blockquote> */}
      <Button actionText="TEST" actionFunction={() => alert("hey")} />
    </div>
  );
}

function useKeyPress(startV) {
  const [userText, setText] = useState(startV);

  const handleUserKeyPress2 = e => {
    const { key, keyCode } = e;

    if (keyCode === 32 || (keyCode >= 65 && keyCode <= 90)) {
      setText(`${userText}${key}`);
    }

    if (key === "Backspace") {
      const c = userText.slice(0, userText.length - 1);
      setText(c);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress2);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress2);
    };
  });

  return userText;
}

export default CustomHook;
