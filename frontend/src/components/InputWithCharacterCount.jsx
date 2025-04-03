import React, { useState } from "react";
import { useGame } from "../context/GameContext";

const InputWithCharacterCount = ({
  maxLength = 15,
  placeholder = "Type Something...",
}) => {
  const { userName, setUserName } = useGame();
  const [text, setText] = useState(userName);

  const handleChange = (e) => {
    const inputText = e.target.value;
    if (inputText.length <= maxLength) {
      setText(inputText);
      setUserName(inputText);
      localStorage.setItem("userName", inputText);
    }
  };

  return (
    <div className="flex justify-center items-center border-2 border-black/10 w-full rounded-3xl outline-0 font-semibold">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder={placeholder}
        maxLength={maxLength}
        className="p-4 w-full outline-0"
      />
      <div className="pr-4 gap-[1px] text-[#2b2b2b]/50 flex items-center">
        {text.length}
        <span className="text-xs font-bold">/</span>
        {maxLength}
      </div>
    </div>
  );
};

export default InputWithCharacterCount;
