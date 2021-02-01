import {useEffect, useLayoutEffect, useState} from "../../../_snowpack/pkg/react.js";
import useMultipleRefs from "./useMulitpleRefs.js";
function getRect(element) {
  let rect = {
    offsetHeight: 0,
    offsetWidth: 0
  };
  if (element)
    rect = {
      offsetHeight: element.offsetHeight,
      offsetWidth: element.offsetWidth
    };
  return rect;
}
const useRefsMeasurements = (arrayLength) => {
  const [measurements, setMeasurements] = useState([]);
  const [refs] = useMultipleRefs(arrayLength);
  const updateMeasurements = () => {
    if (refs.length) {
      const meta = refs.map((ref) => {
        const element = ref.current;
        return getRect(element || void 0);
      });
      setMeasurements(meta);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", updateMeasurements);
    return () => {
      window.removeEventListener("resize", updateMeasurements);
    };
  }, []);
  useLayoutEffect(() => {
    updateMeasurements();
  }, [refs]);
  return [refs, measurements];
};
export default useRefsMeasurements;
