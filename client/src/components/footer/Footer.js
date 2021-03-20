import '../footer/Footer.css';
import NavigationItem from '../navigation/NavigationItem';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-logo">
                <img src="/Tennis-Logo.png" alt="Tennis ball logo" />
                <a href="#">Reserve tennis</a>
            </div>
            <div>
                <ul className="footer-menu">
                    <NavigationItem>Tennis Clubs</NavigationItem>
                    <NavigationItem>Contact</NavigationItem>
                    <NavigationItem>About</NavigationItem>

                    {/* <li><a href="#">Tennis Clubs</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About</a></li> */}
                </ul>
            </div>
            <div className="social-media-icons">
                <i class="fa fa-facebook-f"></i>
                <i class="fa fa-twitter"></i>
                <i class="fa fa-linkedin"></i>
                <i class="fa fa-instagram"></i>
            </div>
            <p>&copy; Website made by <span><a href="https://github.com/A-Genov">A-Genov</a></span> - contact@example.com</p>
        </footer>
    );
}

export default Footer;