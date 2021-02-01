import {useEffect, useState} from "../../_snowpack/pkg/react.js";
import {requestInterval} from "../utils/helpers.js";
const useTraversingArray = (array = [], width, duration = 5e3) => {
  const [initial, setInitial] = useState(true);
  const [stateArray, setStateArray] = useState(() => array.map((v, i) => i));
  const [start, setStart] = useState(0);
  const end = (start + width - 1) % stateArray.length;
  const updateStart = () => setStart((prevStart) => (prevStart + 1) % stateArray.length);
  useEffect(() => {
    const stateArrayLength = stateArray.length;
    if (stateArrayLength < width) {
      const newSize = Math.ceil(width / stateArrayLength) * stateArrayLength;
      setStateArray(() => Array.from({length: newSize}).fill(0).map((z, i) => i));
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
