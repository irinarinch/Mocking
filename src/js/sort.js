export default function getSortHeroes(arr) {
  return arr.sort((a, b) => b.health - a.health);
}
