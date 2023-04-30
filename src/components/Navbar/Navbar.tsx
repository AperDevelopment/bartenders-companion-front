import { useState } from 'react';
import './Navbar.css';
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaBarcode, FaGlassMartiniAlt, FaWineBottle } from 'react-icons/fa';
import NavbarItem from '../NavbarItem';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setOpen] = useState(true);

    return (
        <nav className={isOpen ? 'open' : ''}>
            <div className="logo">
                <Link to='/'>
                    <img src="" alt="Bartender's Companion" />
                </Link>
            </div>
            <div className="toggle-button" onClick={() => setOpen(!isOpen)}>
                {
                    isOpen ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />
                }
            </div>
            <NavbarItem startIcon={<FaGlassMartiniAlt />} title='Cocktails' to='/cocktails' />
            <NavbarItem startIcon={<FaWineBottle />} title='Ingredients' to='/ingredients' />
            <NavbarItem startIcon={<FaBarcode />} title='Products' to='/products' />
        </nav>
    );
};

export default Navbar;
