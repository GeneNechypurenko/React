import React, { useState } from "react";
import PetInfo from "./PetInfo";

const App = () => {
  const [isHungry, setIsHungry] = useState(true);
  const [mood, setMood] = useState("happy");

  const feedPet = () => {
    setIsHungry(false);
    setMood("satisfied");
  };

  return (
    <div className="App">
      <h1 className="text-center pt-8 text-3xl font-black text-white">
        MY PET
      </h1>
      <PetInfo
        name="Buddy"
        type="Dog"
        age={2}
        mood={mood}
        isHungry={isHungry}
      />

      <div>
        <button
          className={`
    p-4 bg-violet-400 font-black text-white w-full
    absolute bottom-0 left-1/2 transform -translate-x-1/2 
    ${isHungry ? "hover:bg-violet-500 cursor-pointer" : "bg-gray-500"}
  `}
          onClick={feedPet}
          disabled={!isHungry}
        >
          {isHungry ? "Feed Buddy" : "Buddy is Full"}
        </button>
      </div>
    </div>
  );
};

export default App;
