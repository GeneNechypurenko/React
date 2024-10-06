import React, { useState } from "react";
import { transliterate } from "./transliterate";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [transliteratedText, setTransliteratedText] = useState("");

  const handleInputChange = (event) => {
    const text = event.target.value;
    setInputText(text);
    setTransliteratedText(transliterate(text));
  };

  return (
    <div
      className="h-[400px] w-[600px] bg-white rounded-2xl
    absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
    flex flex-col items-center justify-evenly
    shadow-neutral-900 shadow-md"
    >
      <h1 className="w-full text-center text-3xl text-[#191970] font-black">
        Transliteration App
      </h1>

      <textarea
        placeholder="Your text here..."
        value={inputText}
        onChange={handleInputChange}
        className="resize-none bg-[#191970] text-white p-4 rounded-md shadow-neutral-500 shadow-md"
        rows="4"
        cols="50"
      ></textarea>

      <textarea
        placeholder="Translitaration will be here..."
        value={transliteratedText}
        readOnly
        className="resize-none bg-[#191970] text-white p-4 rounded-md shadow-neutral-500 shadow-md"
        rows="4"
        cols="50"
      ></textarea>
    </div>
  );
};

export default App;
