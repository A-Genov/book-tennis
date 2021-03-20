import '../header/Header.css';
import '../navigation/NavigationItem';
import NavigationItem from '../navigation/NavigationItem';

const Header = () => {
    return (
        <header className="site-header">
            <nav className="site-header-nav">
                <article className="header-nav-logo">
                    <section className="logo-wrapper">
                        <img src="/Tennis-Logo.png" alt="Tennis ball logo" />
                    </section>
                    <section>
                        <p>Reserve Tennis</p>
                    </section>
                </article>
                <article>
                    <ul class="header-nav-menu">
                        <NavigationItem>About</NavigationItem>
                        <NavigationItem>Tennis clubs</NavigationItem>
                        <NavigationItem>Create club</NavigationItem>
                        <NavigationItem>Tennis news</NavigationItem>
                        {/* <li class="nav-menu-list"><a href="#">About</a></li>
                        <li class="nav-menu-list"><a href="#">Tennis clubs</a></li>
                        <li class="nav-menu-list"><a href="#">Create club</a></li>
                        <li class="nav-menu-list"><a href="#">Tennis news</a></li> */}
                        <li class="btn btn-outline-white"><a href="#">Register</a></li>
                        <li class="btn btn-fill-gradient"><a href="#">Login</a></li>
                    </ul>
                </article>
            </nav>
        </header>
    )

}

export default Header;