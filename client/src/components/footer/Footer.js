import {useState, useEffect} from 'react'

import '../footer/Footer.css';
import {Link} from 'react-router-dom';

const Footer = ({
    isAuthenticated
}) => {
    // console.log(isAuthenticated);

    const [auth, setAuth] = useState(isAuthenticated);

    useEffect(() => {
        setAuth(auth);
    }, [auth]);

    return (
        <footer className="footer-container">
            <div className="footer-logo">
                <img src="/Tennis-Logo.png" alt="Tennis ball logo" />
                <Link to="/">Reserve tennis</Link>
            </div>
            <div>
                <ul className="footer-menu">
                    {isAuthenticated 
                        ? <li><Link to="/courts">Tennis Clubs</Link></li> 
                        : ''
                    }
                    
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contacts">Contact</Link></li>
                </ul>
            </div>
            <div className="social-media-icons">
                <i className="fa fa-facebook-f"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-linkedin"></i>
                <i className="fa fa-instagram"></i>
            </div>
            <p>&copy; Website made by <span><Link to="https://github.com/A-Genov">A-Genov</Link></span> - contact@book-tennis.com</p>
        </footer>
    );
}

export default Footer;