const getData = async drink => {
  const url =
    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + drink;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

export default getData;
