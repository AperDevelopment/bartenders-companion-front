import React, { useEffect, useState } from 'react';
import './Cocktails.css';
import { getAllCocktails } from '../../services/cocktail';
import CocktailModel from '../../model/cocktail';
import CocktailCard from '../../components/CocktailCard';

const Cocktails = () => {
    document.title = "Cocktails • Bartender's Companion";

    const [cocktails, setCocktails] = useState<CocktailModel[]>([]);

    useEffect(() => getAllCocktails((cs) => setCocktails(cs)), []);

    return (
        <div className="cocktails-container">
            <h1>Cocktails</h1>
            <div className={`cocktail-list ${cocktails.length > 10 ? 'large-list' : ''}`}>
                {cocktails.map((cocktail) => (
                    <CocktailCard key={cocktail.name} cocktail={cocktail} />
                ))}
            </div>
        </div>
    );
};

export default Cocktails;
