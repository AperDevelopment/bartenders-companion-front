import './NavbarItem.css';
import { IconType } from 'react-icons';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

type Props = {
    startIcon: ReactElement<IconType>,
    title: string,
    to: string,
};

const NavbarItem = ({ startIcon, title, to }: Props) => {
  return (
    <Link to={to} className='neutral-link'>
        <div className='navbar-item'>
            <span className="item-icon">{startIcon}</span>
            {title}
        </div>
    </Link>
  );
}

export default NavbarItem