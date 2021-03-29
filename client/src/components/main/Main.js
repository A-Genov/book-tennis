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
                <button className="btn btn-fill-gradient"><Link to="#">Login</Link></button>
                <button className="btn btn-outline-white"><Link to="#">Register</Link></button>
            </section>
              

            <ul className="court-list">
            
                {courts.map(x =>
                    <Court
                        key={x.id}
                        id={x.id}
                        name={x.name}
                        address={x.address}
                        image={x.image}
                        price={x.price}
                        description={x.description}
                    />
                )}
            </ul>

        </main>  
        
    );
}

export default Main;

// `url(${process.env.PUBLIC_URL)/assets/bg.jpg`