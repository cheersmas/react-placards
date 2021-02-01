import {useEffect, useState} from "../../_snowpack/pkg/react.js";
import {generateUniqueId} from "../utils/helpers.js";
const useGenerateArrayWithIds = (array = [], width = 5) => {
  const [stateArray, setStateArray] = useState(array);
  useEffect(() => {
    if (stateArray?.length) {
      const stateArrayLength = stateArray.length;
      let newArray = [...stateArray];
      if (stateArrayLength < width) {
        const newSize = Math.ceil(width / stateArrayLength) * stateArrayLength;
        newArray = Array.from({length: newSize}).fill(0).map((z, i) => stateArray[i % array.length]);
      }
      setStateArray(newArray?.map((item) => ({
        ...item,
        id: generateUniqueId()
      })));
    }
  }, []);
  return stateArray;
};
export default useGenerateArrayWithIds;
