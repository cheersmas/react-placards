import { useEffect, useState } from 'react';

import type { Item } from '../types/components/Components.types';

const useTraversingArray = (
  array: Item[] = [],
  width: number,
  duration = 5000
): { initial: boolean; currentArray: number[] } => {
  // TODO explore if you could use useRef/useState in here
  // returns the indicies of the current array);
  const [initial, setInitial] = useState(true);
  const [stateArray, setStateArray] = useState(() => array.map((v, i) => i));
  const [start, setStart] = useState(0);
  const end = (start + width - 1) % stateArray.length;

  const updateStart = () =>
    requestAnimationFrame(() =>
      setStart((prevStart) => (prevStart + 1) % stateArray.length)
    );

  // effect to generate array if array.length < width
  useEffect(() => {
    const stateArrayLength = stateArray.length;
    if (stateArrayLength < width) {
      const newSize = Math.ceil(width / stateArrayLength) * stateArrayLength;
      setStateArray(() =>
        Array.from({ length: newSize })
          .fill(0)
          .map((z, i) => i)
      );
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      updateStart();
      setInitial(false);
    }, duration);
    return () => clearInterval(timer);
  });

  if (start < end) {
    return {
      initial,
      currentArray: stateArray.slice(start, end + 1)
    };
  }
  return {
    initial,
    currentArray: [
      ...stateArray.slice(start, stateArray.length),
      ...stateArray.slice(0, end + 1)
    ]
  };
};

export default useTraversingArray;
