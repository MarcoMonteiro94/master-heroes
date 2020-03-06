export const loadHeroData = async () => {
  const cachedHeroes = localStorage.getItem('heroes');

  if (cachedHeroes) {
    return JSON.parse(cachedHeroes);
  }

  const response = await fetch(
    'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json'
  );

  const allHeroes = await response.json();

  if (allHeroes && Array.isArray(allHeroes)) {
    localStorage.setItem('heroes', JSON.stringify(allHeroes));
  }

  return allHeroes;
};
