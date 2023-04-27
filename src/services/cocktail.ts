import CocktailModel from '../model/cocktail';

const LoginURL = 'http://localhost:8081/api/v1/cocktails';

const getAllCocktails = (callback: (cocktails: CocktailModel[]) => void) => {
    fetch(`${LoginURL}/`)
        .then((res) => res.json())
        .then((data) => callback(data.results.map((result: any) => new CocktailModel(result))));
};

export { getAllCocktails };
