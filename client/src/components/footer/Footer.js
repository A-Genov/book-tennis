import '../footer/Footer.css';
import {Link} from 'react-router-dom';
import NavigationItem from '../navigation/NavigationItem';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-logo">
                <img src="/Tennis-Logo.png" alt="Tennis ball logo" />
                <Link to="/">Reserve tennis</Link>
            </div>
            <div>
                <ul className="footer-menu">
                    {/* <NavigationItem>Tennis Clubs</NavigationItem> */}
                    {/* <NavigationItem>Contact</NavigationItem> */}
                    {/* <NavigationItem>About</NavigationItem> */}

                    <li><Link to="/clubs">Tennis Clubs</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
            <div className="social-media-icons">
                <i className="fa fa-facebook-f"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-linkedin"></i>
                <i className="fa fa-instagram"></i>
            </div>
            <p>&copy; Website made by <span><a href="https://github.com/A-Genov">A-Genov</a></span> - contact@example.com</p>
        </footer>
    );
}

export default Footer;