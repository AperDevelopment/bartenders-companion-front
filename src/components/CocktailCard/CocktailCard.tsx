import './CocktailCard.css';
import CocktailModel from '../../model/cocktail';
import { FaCocktail } from 'react-icons/fa';
import { RiTempHotLine } from 'react-icons/ri';
import { TbGlassFull, TbLeaf } from 'react-icons/tb';
import { Link } from 'react-router-dom';

type Props = {
    cocktail: CocktailModel;
};

const CocktailCard = ({ cocktail }: Props) => {
    return (
        <div className="cocktail-card">
            <div className="card">
                <div className="cocktail-image">
                    <FaCocktail />
                </div>
                <div className="card-body">
                    <div className="card-content">
                        <h3>{cocktail.name}</h3>
                        <p>{cocktail.description}</p>
                    </div>
                    <div className="card-footer">
                        <span className="volume">{cocktail.volume_ml} mL</span>
                        <Link to={`/cocktails/${cocktail.id}`} className="view-more">
                            View more
                        </Link>
                    </div>
                </div>
            </div>
            <div className="icons">
                {cocktail.is_alcoholic && <TbGlassFull />}
                {cocktail.is_vegan && <TbLeaf />}
                {cocktail.is_hot && <RiTempHotLine />}
            </div>
        </div>
    );
};

export default CocktailCard;
