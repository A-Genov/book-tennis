import { Component } from 'react';
import '../header/Header.css';
import {Link} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    }

render() {
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
                        
                        <li className="nav-menu-list"><Link to="/about">About</Link></li>
                        
                        
                        {
                            this.props.isAuthenticated
                            ? 
                                <>
                                <li className="nav-menu-list"><Link to="/courts">Tennis clubs</Link></li>
                                <li className="nav-menu-list"><Link to="/courts/create">Create club</Link></li>
                                <li className="btn btn-fill-gradient"><Link to="/logout">Logout</Link></li>
                                </>
                            :
                                <>
                                <li className="btn btn-outline-white"><Link to="/register">Register</Link></li>
                                <li className="btn btn-fill-gradient"><Link to="/login">Login</Link></li>
                                </>
                        }
                      
                        
                    </ul>
                </article>
            </nav>
        </header>
    )
    }
    
}

export default Header;


