import { useEffect, useState } from 'react';

import type { Item } from '../types/components/Notification.types';
import { generateUniqueId } from '../utils/helpers';

const useGenerateArrayWithIds = (
  array: Item[] = [],
  width = 5
): Item[] | [] => {
  // TODO explore if you could use useRef/useState in here
  // returns the indicies of the current array
  const [stateArray, setStateArray] = useState(array);
  // effect to generate array if array.length < width
  useEffect(() => {
    if (stateArray?.length) {
      const stateArrayLength = stateArray.length;
      let newArray = [...stateArray];
      if (stateArrayLength < width) {
        const newSize = Math.ceil(width / stateArrayLength) * stateArrayLength;
        newArray = Array.from({ length: newSize })
          .fill(0)
          .map((z, i) => stateArray[i % array.length]);
      }
      setStateArray(
        newArray?.map((item) => ({
          id: generateUniqueId(),
          ...item
        }))
      );
    }
  }, []);
  return stateArray;
};

export default useGenerateArrayWithIds;
