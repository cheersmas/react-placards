import { useCallback, useEffect, useState } from 'react';

import calculateRotatingIndicies from '../utils/helpers';

export const useRotatingIndicies = (
  size = 5,
  duration = 5000
): [number, () => void, number[]] => {
  const [counter, setCounter] = useState<number>(0);
  const memoizedRotatingIndicies = useCallback(
    (c, s) => calculateRotatingIndicies(c, s),
    [counter]
  );
  const updateCounter = () => {
    if (counter === size - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };
  useEffect(() => {
    const timer = setInterval(() => updateCounter(), duration);
    return () => {
      clearInterval(timer);
    };
  });
  return [counter, updateCounter, memoizedRotatingIndicies(counter, size)];
};

export default useRotatingIndicies;
