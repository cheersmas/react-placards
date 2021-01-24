import { useCallback, useEffect, useState } from 'react';

import calculateRotatingIndicies from '../utils/helpers';

export const useRotatingIndicies = (
  size = 5,
  duration = 5000
): [number, number[]] => {
  const [counter, setCounter] = useState<number>(0);
  const memoizedRotatingIndicies = useCallback(
    (c, s) => calculateRotatingIndicies(c, s),
    [counter]
  );
  useEffect(() => {
    const timer = setInterval(() => {
      if (counter === size - 1) {
        setCounter(0);
      } else {
        setCounter(counter + 1);
      }
    }, duration);
    return () => {
      clearInterval(timer);
    };
  });
  return [counter, memoizedRotatingIndicies(counter, size)];
};

export default useRotatingIndicies;
