export function getRandomEmail() {
  const random = Math.floor(Math.random() * 10000);
  return `jussarateste${random}@example.com`;
}