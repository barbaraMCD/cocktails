export const getCocktailsPerAlcool = async drink => {
  const url =
    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + drink;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const getRecipe = async recipe => {
  const url = `https://thecocktaildb.com/api/json/v1/1/search.php?s=${recipe}`;
  const response = await fetch(url);
  const data = await response.json();
  const result = data.drinks[0];
  return result;
};
