import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
    document.title = "Not Found • Bartender's Companion";

    return (
        <div className="not-found">
            <div className="info">
                <h1>This page is not real.</h1>
                <span>Unfortunately, this URL either doesn't exist or is still a work in progress. Maybe try again later ?</span>
                <span>Or just go back to the home page. That might be a better alternative, actually.</span>
                <Link to="/" className="neutral-link button">
                    Go back to the home page
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
