import { useEffect, useState } from 'react';

import type { Item } from '../types/components/Notification.types';

const useTraversingArray = (
  array: Item[] = [],
  width: number,
  duration = 5000
): { currentArray: number[] } => {
  // TODO explore if you could use useRef/useState in here
  // returns the indicies of the current array);
  const [stateArray, setStateArray] = useState(() => array.map((v, i) => i));
  const [start, setStart] = useState(0);
  const end = (start + width - 1) % stateArray.length;

  const updateStart = () =>
    setStart((prevStart) => (prevStart + 1) % stateArray.length);

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
    }, duration);
    return () => clearInterval(timer);
  });

  if (start < end) {
    return {
      currentArray: stateArray.slice(start, end + 1)
    };
  }
  return {
    currentArray: [
      ...stateArray.slice(start, stateArray.length),
      ...stateArray.slice(0, end + 1)
    ]
  };
};

export default useTraversingArray;
