import React, { useState, useRef } from "react";

const App = () => {
  const [response, setResponse] = useState("");
  const ballRef = useRef(null);

  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes – definitely",
    "You may rely on it",
    "As I see it",
    "Yes",
    "Most Likely",
    "Outlook good",
    "Signs point to yes",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
    "Reply hazy",
    "Try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate",
    "Ask again",
  ];
  debugger;
  const handleClick = () => {
    const randomResponse = Math.floor(Math.random() * responses.length);
    const animations = [
      "animate__shakeX",
      "animate__shakeY",
      "animate__wobble",
    ];
    const randomAnimation = Math.floor(Math.random() * animations.length);

    if (ballRef.current) {
      ballRef.current.classList.add(
        "animate__animated",
        animations[randomAnimation]
      );
      ballRef.current.addEventListener(
        "animationend",
        () => {
          ballRef.current?.classList.remove(
            "animate__animated",
            animations[randomAnimation]
          );
          setResponse(responses[randomResponse]);
        },
        { once: true }
      );
    }
  };

  return (
    <div>
      <h1 className="text-center text-amber-400 text-6xl font-black pt-20">
        Ask a question, then click the Magic 8 ball!
      </h1>
      <div id="wrapper">
        <div id="img-wrapper" ref={ballRef} onClick={handleClick}>
          <span id="response">{response}</span>
        </div>
      </div>
    </div>
  );
};

export default App;
