export const isPositiveFloat = (s) => {
  return !isNaN(s) && Number(s) > 0;
}