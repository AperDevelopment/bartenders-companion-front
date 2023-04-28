import CocktailModel from '../model/cocktail';

const API_KEY = process.env.REACT_APP_BACKEND_API_KEY || '';

const LoginURL = 'http://localhost:8081/api/v1/cocktails';

const getAllCocktails = (callback: (cocktails: CocktailModel[]) => void) => {
    fetch(`${LoginURL}/`, {
        method: 'GET',
        headers: {
            'X-Api-Key': API_KEY
        }
    })
        .then((res) => res.json())
        .then((data) => callback(data.results.map((result: any) => new CocktailModel(result))));
};

const getCocktailById = (id: number, callback: (cocktail: CocktailModel) => void) => {
    fetch(`${LoginURL}/${id}`, {
        method: 'GET',
        headers: {
            'X-Api-Key': API_KEY
        }
    })
        .then((res) => res.json())
        .then((data) => callback(new CocktailModel(data.result)));
};

export { getAllCocktails, getCocktailById };
