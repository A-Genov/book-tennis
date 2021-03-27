import '../header/Header.css';
import '../navigation/NavigationItem';
import {Link} from 'react-router-dom';
import NavigationItem from '../navigation/NavigationItem';

const Header = (props) => {
    return (
        <header className="site-header">
            <nav className="site-header-nav">
                <article className="header-nav-logo">
                    <section className="logo-wrapper">
                        <img src="/Tennis-Logo.png" alt="Tennis ball logo" />
                    </section>
                    <section>
                        <Link to="/" className="company-name">Reserve Tennis</Link>
                    </section>
                </article>
                <article>
                    <ul className="header-nav-menu">
                        {/* <NavigationItem>About</NavigationItem> */}
                        {/* <NavigationItem>Tennis clubs</NavigationItem> */}
                        {/* <NavigationItem>Create club</NavigationItem> */}
                        {/* <NavigationItem>Tennis news</NavigationItem> */}
                        <li className="nav-menu-list"><Link to="/about">About</Link></li>
                        <li className="nav-menu-list"><Link to="/news">Tennis news</Link></li>
                        <li className="nav-menu-list"><Link to="/clubs">Tennis clubs</Link></li>
                        <li className="nav-menu-list"><Link to="/courts/create">Create club</Link></li>
                        <li className="btn btn-outline-white"><Link href="#">Register</Link></li>
                        <li className="btn btn-fill-gradient"><Link href="#">Login</Link></li>
                    </ul>
                </article>
            </nav>
        </header>
    )

}

export default Header;