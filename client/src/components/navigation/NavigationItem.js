import '../navigation/NavigationItem.css';

const NavigationItem = (props) => {
    return(
        <li class="nav-menu-list"><a href="#">{props.children}</a></li>
    );
}

export default NavigationItem;