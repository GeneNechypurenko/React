import React from "react";

const PetInfo = ({ name, type, age, mood, isHungry }) => {
  return (
    <div className="pet-info absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
     h-[600px] w-[400px] bg-stone-400 rounded-2xl shadow-neutral-900 shadow-md text-gray-800
     flex flex-col items-center">
      <img
        className="rounded-t-2xl"
        src="golden-retriever-puppy-i199792.jpg"
      ></img>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Type:</strong> {type}
      </p>
      <p>
        <strong>Age:</strong> {age} years old
      </p>
      <p>
        <strong>Mood:</strong> {mood}
      </p>
      <p>
        <strong>Hunger Status:</strong> {isHungry ? "Hungry" : "Not Hungry"}
      </p>
    </div>
  );
};

export default PetInfo;
