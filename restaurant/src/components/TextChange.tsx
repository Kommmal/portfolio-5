"use client";

import React, { useState, useEffect } from "react";

const TextChange: React.FC = () => {
  // Defining the array of texts
  const texts: string[] = ["Frontend Developer", "Frontend Developer", "Frontend Developer"];

  // State hooks with type annotations
  const [currenText, setCurrentText] = useState<string>(""); // Current displayed text
  const [endValue, setEndValue] = useState<number>(1); // Length of text to display
  const [isForward, setIsForward] = useState<boolean>(true); // Is text moving forward (typing) or backward (deleting)
  const [index, setIndex] = useState<number>(0); // Index to loop through texts array

  useEffect(() => {
    // Create an interval for updating the text
    const intervalId = setInterval(() => {
      // Update the current text based on the current index and endValue
      setCurrentText(texts[index].substring(0, endValue));

      // If typing, increase the endValue, otherwise decrease it (for deleting)
      if (isForward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }

      // If we reached the end of the text, start deleting (move backward)
      if (endValue > texts[index].length + 10) {
        setIsForward(false);
      }

      // If we deleted all characters, start typing again and move to the next text in the array
      if (endValue < 2) {
        setIsForward(true);
        setIndex((prev) => (prev + 1) % texts.length); // Corrected: Use modulo to loop through the array
      }
    }, 50);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  return <div className="transition ease duration-300">{currenText}</div>;
};

export default TextChange;
