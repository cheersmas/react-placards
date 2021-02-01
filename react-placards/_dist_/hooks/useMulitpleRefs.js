import {createRef, useEffect, useState} from "../../../_snowpack/pkg/react.js";
const useMultipleRefs = (arrLength) => {
  const [elRefs, setElRefs] = useState([]);
  useEffect(() => {
    setElRefs(() => Array(arrLength).fill(0).map((_, i) => elRefs[i] || createRef()));
  }, [arrLength]);
  return [elRefs];
};
export default useMultipleRefs;
