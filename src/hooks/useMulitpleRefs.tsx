import { createRef, useEffect, useState } from 'react';

// TODO investigate return type
const useMultipleRefs = (arrLength: number) => {
  const [elRefs, setElRefs] = useState([]);
  useEffect(() => {
    setElRefs(() =>
      Array(arrLength)
        .fill(0)
        .map((_, i) => elRefs[i] || createRef())
    );
  }, [arrLength]);
  return [elRefs];
};

export default useMultipleRefs;
