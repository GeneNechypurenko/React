import React, { useState, useEffect, useRef } from "react";

const TimerApp = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const inputRef = useRef(null);

  const handleStart = () => {
    const inputTime = parseInt(inputRef.current.value, 10);
    if (!isNaN(inputTime) && inputTime > 0) {
      setTime(inputTime);
      setIsRunning(true);
      setIsPaused(false);
    }
  };

  const handlePause = () => {
    setIsPaused((prev) => !prev);
  };

  const handleStop = () => {
    setIsRunning(false);
    setTime(0);
    setIsPaused(false);
  };

  useEffect(() => {
    let timerId;
    if (isRunning && !isPaused && time > 0) {
      timerId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (time === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(timerId);
  }, [isRunning, isPaused, time]);

  return (
    <div
      className="absolute top-1/2 left-1/2 trasnform -translate-x-1/2 -translate-y-1/2 h-[300px] w-[600px]
     flex flex-col items-center justify-evenly gap-4 p-4 bg-white rounded-2xl
     shadow-black shadow-md"
    >
      <h1 className="text-4xl font-black text-[#191970]">Timer App</h1>

      <input
        ref={inputRef}
        type="number"
        placeholder="Enter seconds"
        className="w-full text-center border-2 border-[#191970] p-2 rounded-full outline-none font-black text-[#191970]"
        disabled={isRunning}
      />

      <div className="w-full flex justify-evenly items-center text-white font-black border-[#191970] border-2 rounded-2xl p-4">
        <button onClick={handleStart} disabled={isRunning} className="bg-[#191970] p-2 w-32 rounded-2xl">
          Start
        </button>
        <button onClick={handlePause} disabled={!isRunning} className="bg-[#191970] p-2 w-32 rounded-2xl">
          {isPaused ? "Resume" : "Pause"}
        </button>
        <button onClick={handleStop} className="bg-[#191970] p-2 w-32 rounded-2xl">Stop</button>
      </div>

      <h2 className="w-full p-4 rounded-2xl text-center text-2xl bg-[#191970] text-white font-black">{time > 0 ? time : "Time's up!"}</h2>
    </div>
  );
};

export default TimerApp;
