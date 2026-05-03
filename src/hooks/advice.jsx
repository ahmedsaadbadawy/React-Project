import React from "react";
import { useEffect, useState } from "react";

import { HugeiconsIcon } from "@hugeicons/react";
import { PauseIcon } from "@hugeicons/core-free-icons";
import { DiceFaces05Icon } from "@hugeicons/core-free-icons";
const Advice = () => {
  const [advice, setAdvice] = useState("[]");
  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    console.log(data);

    setAdvice(data.slip);
  }

  useEffect(() => {
    getAdvice();
  }, []);
  return (
    <div className="h-screen w-screen bg-[#202632] flex items-center justify-center">
      <div className="card bg-[#313A49] mx-4 px-8 py-6 max-w-120 rounded-4xl text-center flex flex-col gap-3">
        <span className="text-[#55FEAA] text-sm md:text-base">
          Advice #{advice.id}
        </span>
        <h1 className="font-bold text-white md:text-2xl">"{advice.advice}"</h1>
        <div className="flex items-center justify-center">
          <span className="h-0.5 w-full bg-mist-600 "></span>
          <HugeiconsIcon
            className="fill-white mx-2"
            icon={PauseIcon}
            size={40}
            color="white"
            strokeWidth={2}
          />
          <span className="h-0.5 w-full bg-mist-600"></span>
        </div>
        <button
          className="bg-[#55FEAA] w-12 h-12 mx-auto -mb-12 mt-1 rounded-full flex items-center justify-center shadow cursor-pointer hover:bg-[#55FEAA]/90"
          onClick={() => getAdvice()}>
          <HugeiconsIcon
            className="fill-[#202632] mx-auto"
            icon={DiceFaces05Icon}
            size={30}
            color="#55FEAA"
            strokeWidth={2}
          />
        </button>
      </div>
    </div>
  );
};

export default Advice;
