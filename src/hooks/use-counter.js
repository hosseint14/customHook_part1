import { useState, useEffect } from "react";

const useCounter = (calcType) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      {
        calcType
          ? setCounter((prevCounter) => prevCounter + 1)
          : setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return counter;
};

export default useCounter;
