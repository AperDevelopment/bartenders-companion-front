import './CocktailView.css';
import CocktailModel from '../../model/cocktail';
import { useEffect, useState } from 'react';
import { getCocktailById, updateCocktailById } from '../../services/cocktail';
import { useParams } from 'react-router-dom';
import { FaCocktail, FaEdit, FaTrash } from 'react-icons/fa';
import { RiTempHotLine } from 'react-icons/ri';
import { TbGlassFull, TbLeaf } from 'react-icons/tb';
import { Tooltip } from '@mui/material';
import CreationDialog from '../../components/CreationDialog';

const CocktailView = () => {
    const params = useParams();
    const [cocktail, setCocktail] = useState(new CocktailModel({}));
    const isAdmin = (): boolean => {
        if (cocktail.ingredients && cocktail.instructions) return true;
        return false;
    };

    const [openEdit, setOpenEdit] = useState(false);

    const handleClickOpenEdit = () => setOpenEdit(true);
    const handleCloseEdit = () => setOpenEdit(false);

    const setCocktailValue = () => {
        getCocktailById(Number(params.id), (c) => {
            setCocktail(c);
            document.title = `${c.name} • Bartender's Companion`;
        });
    };

    useEffect(setCocktailValue, [params.id]);

    const updateCocktail = (c: CocktailModel) => updateCocktailById(Number(params.id), c, setCocktailValue);

    return (
        <div className={`cocktail-view ${cocktail.ingredients && cocktail.instructions ? '' : 'small-view'}`}>
            <header>
                <div className="cocktail-image">
                    <FaCocktail />
                </div>
                <div className="view-header">
                    <span>
                        <h2>{cocktail.name}</h2>
                        <span>({cocktail.volume_ml} mL)</span>
                        {isAdmin() && (
                            <div className="admin-buttons">
                                <span className="button">
                                    <FaEdit onClick={handleClickOpenEdit} />
                                    <CreationDialog open={openEdit} onConfirm={updateCocktail} onClose={handleCloseEdit} cocktail={cocktail} />
                                </span>
                                <span className="button">
                                    <FaTrash />
                                </span>
                            </div>
                        )}
                    </span>
                    <div className="icons-big">
                        {cocktail.is_alcoholic && (
                            <Tooltip title="Contains alcohol" followCursor>
                                <span>
                                    <TbGlassFull className="icon" />
                                </span>
                            </Tooltip>
                        )}
                        {cocktail.is_vegan && (
                            <Tooltip title="Vegan-friendly" followCursor>
                                <span>
                                    <TbLeaf className="icon" />
                                </span>
                            </Tooltip>
                        )}
                        {cocktail.is_hot && (
                            <Tooltip title="Served hot" followCursor>
                                <span>
                                    <RiTempHotLine className="icon" />
                                </span>
                            </Tooltip>
                        )}
                    </div>
                    {cocktail.description}
                </div>
            </header>
            {isAdmin() && (
                <main>
                    <aside>
                        <h3>Ingredients</h3>
                        <ul>
                            {cocktail.ingredients.map((ingredient) => (
                                <li key={ingredient}>{ingredient}</li>
                            ))}
                        </ul>
                    </aside>
                    <section>
                        <h3>Instructions</h3>
                        <ol>
                            {cocktail.instructions.map((instruction) => (
                                <li key={instruction}>{instruction}</li>
                            ))}
                        </ol>
                    </section>
                </main>
            )}
        </div>
    );
};

export default CocktailView;
