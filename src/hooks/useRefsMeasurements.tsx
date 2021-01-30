import type { RefObject } from 'react';
import { useEffect, useLayoutEffect, useState } from 'react';

import type { RectResult } from '../types/hooks/useRect.types';
import useMultipleRefs from './useMulitpleRefs';

function getRect<T extends HTMLElement>(element?: T): RectResult {
  let rect: RectResult = {
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

const useRefsMeasurements = <T extends HTMLElement>(
  arrayLength: number
): [RefObject<T>[], RectResult[]] => {
  const [measurements, setMeasurements] = useState<RectResult[]>([]);
  const [refs] = useMultipleRefs(arrayLength);
  const updateMeasurements = () => {
    if (refs.length) {
      const meta = refs.map((ref: React.RefObject<T>) => {
        const element = ref.current;
        return getRect(element || undefined);
      });
      setMeasurements(meta);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', updateMeasurements);
    return () => {
      window.removeEventListener('resize', updateMeasurements);
    };
  }, []);

  useLayoutEffect(() => {
    updateMeasurements();
  }, [refs]);
  return [refs, measurements];
};

export default useRefsMeasurements;
