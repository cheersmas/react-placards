export const calculateRotatingIndicies = (
  currentIndex: number,
  size: number
): number[] =>
  Array.from({ length: size })
    .fill(0)
    .map((_, i) => Math.abs(currentIndex + i) % size);

export const generateUniqueId = (): string =>
  `_${Math.random().toString(36).substr(2, 9)}`;
