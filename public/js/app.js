export function checkLoveCompatibility(petals1, petals2) {
  if (!Number.isInteger(petals1) || !Number.isInteger(petals2)) {
    return "Both petal counts must be integers";
  }
  return (
    (petals1 % 2 === 0 && petals2 % 2 !== 0) ||
    (petals1 % 2 !== 0 && petals2 % 2 === 0)
  );
}
