class CocktailModel {
    readonly id: number = -1;
    readonly name: string = '';
    readonly description: string = '';
    readonly volume_ml: number = 0;
    readonly is_alcoholic: boolean = false;
    readonly is_vegan: boolean = false;
    readonly is_hot: boolean = false;
    readonly ingredients: string[] = [];
    readonly instructions: string[] = [];

    constructor(cocktail: any) {
        console.table(cocktail);
        if (!cocktail) return;
        this.id = cocktail.id;
        this.name = cocktail.name;
        this.description = cocktail.description ?? '';
        this.volume_ml = cocktail.volume_ml;
        this.is_alcoholic = cocktail.is_alcoholic;
        this.is_vegan = cocktail.is_vegan;
        this.is_hot = cocktail.is_hot;
        this.ingredients = cocktail.ingredients ?? [];
        this.instructions = cocktail.instructions ?? [];
    }
}

export default CocktailModel;
