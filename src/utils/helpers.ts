const calculateRotatingIndicies = (
  currentIndex: number,
  size: number
): number[] =>
  Array.from({ length: size })
    .fill(0)
    .map((_, i) => Math.abs(currentIndex + i) % size);

export default calculateRotatingIndicies;
