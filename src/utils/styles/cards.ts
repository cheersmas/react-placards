export const DEFAULT_DURATION = 1000;
export const DEFAULT_EASING = 'cubic-bezier(0.19, 0.49, 0.46, 0.96)';
export const DEFAULT_DELAY = 0;

export const calculateClip = (
  offsetheight: number,
  cardheight: number
): string => {
  if (cardheight > offsetheight) {
    return `inset(${cardheight - offsetheight}px 0 0 0)`;
  }
  return `inset(0 0 0 0)`;
};
export const setTransition = (
  duration: number,
  easing: string,
  delay: number,
  property = 'all'
): string => `${property} ${duration}ms ${easing} ${delay}ms`;
