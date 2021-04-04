import {Link} from 'react-router-dom';

import '../main/Main.css';
import Court from '../court/Court';

const Main = ({   
    courts
}) => {
    return (
        <main>
            <section className="main-container">
                <img src="tennis-bgr.png" className="main-background" alt="Tennis player background" />
                <h1 className="main-heading">Wanna book the perfect court for your game?</h1>
                {/* <button className="main-button">Login</button> */}
                <button className="btn btn-fill-gradient"><Link to="/login">Login</Link></button>
                <button className="btn btn-outline-white"><Link to="/register">Register</Link></button>
            </section>
              

            <ul className="court-list">
            
            {Object.keys(courts).map(x =>
                    <Court
                        key={x}
                        id={x}
                        name={courts[x].name}
                        address={courts[x].address}
                        image={courts[x].image}
                        price={courts[x].price}
                        description={courts[x].description}
                    />
                )}
            </ul>

        </main>  
        
    );
}

export default Main;

// `url(${process.env.PUBLIC_URL)/assets/bg.jpg`