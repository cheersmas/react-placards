import type { RefObject } from 'react';
import { useLayoutEffect, useState } from 'react';

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
  useLayoutEffect(() => {
    if (refs.length) {
      const meta = refs.map((ref: React.RefObject<T>) => {
        const element = ref.current;
        return getRect(element || undefined);
      });
      setMeasurements(meta);
    }
  }, [refs]);
  return [refs, measurements];
};

export default useRefsMeasurements;
