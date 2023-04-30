import React, { useEffect, useState } from 'react';
import './Cocktails.css';
import { getAllCocktails, insertCocktail, isAdmin } from '../../services/cocktail';
import CocktailModel from '../../model/cocktail';
import CocktailCard from '../../components/CocktailCard';
import { IoIosAdd } from 'react-icons/io';
import FloatingActionButton from '../../components/FloatingActionButton';
import CreationDialog from '../../components/CreationDialog';

const Cocktails = () => {
    document.title = "Cocktails • Bartender's Companion";

    const [cocktails, setCocktails] = useState<CocktailModel[]>([]);

    const setCocktailsValue = () => getAllCocktails((cs) => setCocktails(cs));

    useEffect(setCocktailsValue, []);

    const [openCreate, setOpenCreate] = useState(false);

    const handleClickOpenCreate = () => setOpenCreate(true);
    const handleCloseCreate = () => setOpenCreate(false);

    const createCocktail = (c: CocktailModel) => insertCocktail(c, setCocktailsValue);

    return (
        <div className="cocktails-container">
            <h1>Cocktails</h1>
            <div className={`cocktail-list ${cocktails.length > 10 ? 'large-list' : ''}`}>
                {cocktails
                    .filter((cocktail) => cocktail)
                    .map((cocktail) => (
                        <CocktailCard key={cocktail.name} cocktail={cocktail} />
                    ))}
            </div>
            {isAdmin && (
                <>
                    <FloatingActionButton onClick={handleClickOpenCreate}>
                        <IoIosAdd />
                    </FloatingActionButton>
                    <CreationDialog open={openCreate} onConfirm={createCocktail} onClose={handleCloseCreate} />
                </>
            )}
        </div>
    );
};

export default Cocktails;
