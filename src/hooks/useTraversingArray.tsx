import { useEffect, useState } from 'react';

import type { Item } from '../types/components/Components.types';
import { requestInterval } from '../utils/helpers';

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
    const handle = requestInterval(() => {
      updateStart();
      setInitial(false);
    }, duration);
    return () => cancelAnimationFrame(handle);
  }, [stateArray]);

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
