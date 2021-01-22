import { useEffect, useState } from 'react';

const useRotatingNumber = (size: number, duration = 1000): number[] => {
  const [rotatingArray, setArray] = useState(
    Array(size)
      .fill(0)
      .map((v, i) => i)
  );
  const [counter, setCounter] = useState<number>(0);
  useEffect(() => {
    const timer = setInterval(() => setCounter(counter + 1), duration);
    return () => {
      clearInterval(timer);
    };
  });
  useEffect(() => {
    setArray(rotatingArray.map((item) => (item === 0 ? size - 1 : item - 1)));
  }, [counter]);

  return rotatingArray;
};

export default useRotatingNumber;
