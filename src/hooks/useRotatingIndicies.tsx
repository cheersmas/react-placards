import { useCallback, useEffect, useState } from 'react';

import calculateRotatingIndicies from '../utils/helpers';

export const useRotatingIndicies = (size = 5, duration = 1000): number[] => {
  const [counter, setCounter] = useState<number>(size);
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
  return memoizedRotatingIndicies(counter, size);
};

export default useRotatingIndicies;
