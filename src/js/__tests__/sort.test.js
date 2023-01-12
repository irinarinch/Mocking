import getSortHeroes from '../sort';

const heroes = [
  { name: 'мечник', health: 30 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const sortedHeroes = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 30 },
];

test('sorting heroes', () => {
  const result = getSortHeroes(heroes);
  expect(result).toEqual(sortedHeroes);
});
