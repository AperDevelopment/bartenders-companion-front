class CocktailModel {
    readonly id: number;
    readonly name: string;
    readonly description?: string;
    readonly volume_ml: number;
    readonly is_alcoholic: boolean;
    readonly is_vegan: boolean;
    readonly is_hot: boolean;
    readonly ingredients: string[];
    readonly instructions: string[];

    constructor(cocktail: any) {
        const { id, name, description, volume_ml, is_alcoholic, is_vegan, is_hot, ingredients, instructions } = cocktail;
        this.id = id;
        this.name = name;
        this.description = description;
        this.volume_ml = volume_ml;
        this.is_alcoholic = is_alcoholic;
        this.is_vegan = is_vegan;
        this.is_hot = is_hot;
        this.ingredients = ingredients;
        this.instructions = instructions;
    }
}

export default CocktailModel;
