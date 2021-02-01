export const calculateRotatingIndicies = (
  currentIndex: number,
  size: number
): number[] =>
  Array.from({ length: size })
    .fill(0)
    .map((_, i) => Math.abs(currentIndex + i) % size);

export const generateUniqueId = (): string =>
  `_${Math.random().toString(36).substr(2, 9)}`;

export const requestInterval = (fn: () => void, delay: number): number => {
  let start: number | null = null;
  let handle;

  function loop(timeStamp: number) {
    if (!start) {
      start = timeStamp;
    }
    handle = requestAnimationFrame(loop);
    const delta = Math.min(1, (timeStamp - start) / delay);
    if (delta === 1) {
      fn.call(null);
      start = null;
    }
  }

  handle = requestAnimationFrame(loop);
  return handle;
};
