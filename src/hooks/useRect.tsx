import { useLayoutEffect, useState } from 'react';

import type { RectResult } from '../types/hooks/useRect.types';

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

function useRect<T extends HTMLElement>(ref: React.RefObject<T>): RectResult {
  const [rect, setRect] = useState<RectResult>(
    ref && ref.current ? getRect(ref.current) : getRect()
  );

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    setRect(getRect(element));
  }, [ref]);

  return rect;
}

export default useRect;
