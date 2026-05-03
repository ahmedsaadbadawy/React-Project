import React from "react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { BlueButton, MyCard } from "@/lib/common";

const counter = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 0) {
      console.log("App mounted");
    }
    if (count < 0) {
      return () => {
        // بتشتغل من تاني تغيير في المتغير
        console.log("App unmounted");
      };
    }
  }, [count]); // [bounding variable to listen to changes]

  // setCount((count2) => count2 + 1) OR setCount(count + 1)

  function handleCount(behavior) {
    switch (behavior) {
      case "increment":
        setCount((count1) => count1 + 1);
        break;
      case "decrement":
        setCount((count1) => count1 - 1);
        break;
      case "reset":
        setCount(0);
        break;
    }
  }

  return (
    // or <div> => cause JSX file must have only one root/parent element.
    <>
      <h1
        className={cn(
          "my-10 text-4xl text-center font-bold text-blue-500 transition-colors duration-600",
          { "text-red-500": count < 0 },
          { "text-gray-500": count == 0 },
        )}>
        Positive or Negative
      </h1>
      <MyCard>
        <div className="flex justify-between items-center mx-10">
          <div className="counterBtns flex items-center gap-10">
            <BlueButton
              label="Increment"
              fun={() => handleCount("increment")}
            />
            <BlueButton
              label="Decrement"
              fun={() => handleCount("decrement")}
            />
            <BlueButton label="Reset" fun={() => handleCount("reset")} />
          </div>
          <p className="count">{count}</p>
        </div>
      </MyCard>
    </>
  );
};

export default counter;
