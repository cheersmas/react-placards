import { useCallback, useEffect, useState } from 'react';

import calculateRotatingIndicies from '../utils/helpers';

const useTraversingArray = (
  array: number[],
  width: number,
  duration = 5000
) => {
  // TODO explore if you could use useRef/useState in here
  const [stateArray, setStateArray] = useState(array);
  const [counter, setCounter] = useState<number>(0);
  const [start, setStart] = useState(0);
  const end = (start + width - 1) % stateArray.length;

  const updateStart = () =>
    setStart((prevStart) => (prevStart + 1) % stateArray.length);

  const updateCounter = () => {
    if (counter === width - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  useEffect(() => {
    const stateArrayLength = stateArray.length;
    if (stateArrayLength < width) {
      const newSize = Math.ceil(width / stateArrayLength) * stateArrayLength;
      setStateArray(() =>
        Array.from({ length: newSize })
          .fill(0)
          .map((z, i) => stateArray[i % array.length])
      );
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      updateStart();
      updateCounter();
    }, duration);
    return () => clearInterval(timer);
  });

  const memoizedRotatingIndicies = useCallback(
    (c, s) => calculateRotatingIndicies(c, s),
    [counter]
  );

  if (start < end) {
    return {
      counter,
      rotatingIndicies: memoizedRotatingIndicies(counter, width),
      updateStart,
      updateCounter,
      currentArray: stateArray.slice(start, end + 1)
    };
  }
  return {
    counter,
    rotatingIndicies: memoizedRotatingIndicies(counter, width),
    updateStart,
    updateCounter,
    currentArray: [
      ...stateArray.slice(start, stateArray.length),
      ...stateArray.slice(0, end + 1)
    ]
  };
};

export default useTraversingArray;
