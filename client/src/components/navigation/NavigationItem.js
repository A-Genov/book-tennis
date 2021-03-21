import {Link} from 'react-router-dom'
import '../navigation/NavigationItem.css';

const NavigationItem = (props) => {
    return(
        <li className="nav-menu-list"><Link to="/">{props.children}</Link></li>
    );
}

export default NavigationItem;